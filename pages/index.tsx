import React from 'react';

import { useEffect } from 'react';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

import { ANIMAL_SEARCH_VALUE } from '../constants';
import { Animal } from '../models/AnimalSearchResult';

import CustomError from '../components/CustomError/CustomError';
import ListItem from '../components/ListItem/ListItem';
import Input from '../components/Input/Input';
import Button from '../components/Button/Button';

import styles from '../styles/Main.module.scss';
// import '../../styles/space.scss';
import PaginationItem from '../components/PaginationItem/PaginationItem';
import CustomNavLink from '../components/CustomNavLink/CustomNavLink';
import { useDispatch, useSelector } from 'react-redux';
import {
  setSearch,
  selectSearchValue,
  selectFilteredList,
  setShowError,
  showError,
  setOriginalList,
  calculateFilteredList,
  setLoading,
  showLoading,
} from '../animalSlice';
import { RootState } from '../store/store';
import { useGetAnimalsQuery } from '../utils/getAnimals';

const Main: React.FC = () => {
  const dispatch = useDispatch();

  const [searchParams, setSearchParams] = useSearchParams();

  const searchValue = useSelector((state: RootState) =>
    selectSearchValue(state)
  );
  const error = useSelector((state: RootState) => showError(state));
  const filteredAnimals = useSelector((state: RootState) =>
    selectFilteredList(state)
  );
  const loading = useSelector((state: RootState) => showLoading(state));

  const pageSize = Number(searchParams.get('pageSize')) || 32;
  const pageNumber = Number(searchParams.get('pageNumber')) || 1;

  const {
    data: animalsSearchResult,
    isFetching,
    isError,
  } = useGetAnimalsQuery({
    pageNumber,
    pageSize,
  });

  useEffect(() => {
    dispatch(setOriginalList(animalsSearchResult?.animals || []));
    dispatch(calculateFilteredList());
    dispatch(setLoading(isFetching));
  }, [dispatch, animalsSearchResult, isFetching]);

  const onSearchChange = (value: string) => {
    dispatch(setSearch(value));
  };

  const searchAnimals = () => {
    window.localStorage.setItem(ANIMAL_SEARCH_VALUE, searchValue);

    dispatch(calculateFilteredList());
  };

  const itemsToShowChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = Number(event.currentTarget.value);
    setSearchParams({
      pageNumber: `${pageNumber}`,
      pageSize: `${inputValue}`,
    });
  };

  useEffect(() => {
    setSearchParams({
      pageNumber: `${pageNumber}`,
      pageSize: `${pageSize}`,
    });
  }, [pageNumber, pageSize, setSearchParams]);

  return (
    <div className={styles.containerWrapper}>
      <div className={classNames(styles.container, styles.header)}>
        <div className={styles.searchPanel}>
          <Input
            onSearchChange={onSearchChange}
            value={searchValue}
            testid="searchInput"
          />
          <Button onClick={searchAnimals} testid="searchButton">
            Search
          </Button>
        </div>
        <Button onClick={() => dispatch(setShowError())}>Throw error</Button>
      </div>
      <div className={classNames(styles.content, 'pv-4')}>
        <div className={styles.wrapperInput}>
          <label> enter the number of cards elements </label>
          <input value={pageSize} onChange={itemsToShowChange} />
        </div>
        <div className={styles.container}>
          {loading ? (
            <div className={styles.spinner} />
          ) : (
            <ul className={styles.listWrapper}>
              {filteredAnimals.map((animal: Animal) => (
                <CustomNavLink
                  key={animal.uid}
                  to={animal.uid.toString()}
                  className="wrapper-list-item"
                >
                  <ListItem {...animal} />
                </CustomNavLink>
              ))}
            </ul>
          )}
        </div>
      </div>

      {animalsSearchResult && animalsSearchResult.page.totalPages > 1 && (
        <ul className={styles.pagination}>
          {[...Array(animalsSearchResult.page.totalPages)].map((_, i) => (
            <PaginationItem
              onClick={() => {
                setSearchParams({
                  pageNumber: `${i + 1}`,
                  pageSize: `${pageSize}`,
                });
              }}
              key={i}
              className={pageNumber === i + 1 ? 'active-btn' : ''}
            >
              {i + 1}
            </PaginationItem>
          ))}
        </ul>
      )}

      {(error || isError) && <CustomError />}
    </div>
  );
};

export default Main;
