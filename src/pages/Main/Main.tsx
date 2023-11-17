import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import { useSearchParams } from 'react-router-dom';

import { ANIMAL_SEARCH_VALUE } from '../../constants';
import { Animal, AnimalSearchResult } from '../../models/AnimalSearchResult';

import CustomError from '../../components/CustomError/CustomError';
import ListItem from '../../components/ListItem/ListItem';
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import styles from './Main.module.scss';
import '../../styles/space.scss';
import PaginationItem from '../../components/PaginationItem/PaginationItem';
import CustomNavLink from '../../components/CustomNavLink/CustomNavLink';
import { useDispatch, useSelector } from 'react-redux';
import { setInputValue, selectSearchValue } from '../../counterSlice';
import { RootState } from '../../store/store';

const Main: React.FC = () => {
  const dispatch = useDispatch();
  const [filteredAnimals, setFilteredAnimals] = useState<Animal[]>([]);
  const [totalPages, setTotalPages] = useState(1);

  const [isShowError, setShowError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const [pageSize, setPageSize] = useState(
    Number(searchParams.get('pageSize')) || 8
  );
  const [pageNumber, setPageNumber] = useState(
    Number(searchParams.get('pageNumber')) || 1
  );

  const searchValue = useSelector((state: RootState) =>
    selectSearchValue(state)
  );

  const showError = () => {
    setShowError((prevState) => !prevState);
  };

  const onSearchChange = (value: string) => {
    dispatch(setInputValue(value));
  };

  const search = (animals: Animal[], value: string): Animal[] => {
    if (value.length === 0) {
      return animals;
    }

    if (animals) {
      return animals.filter((animal) => {
        return animal.name.toLowerCase().includes(value.toLowerCase());
      });
    }

    return [];
  };

  const showFilteredItem = () => {
    localStorage.setItem(ANIMAL_SEARCH_VALUE, searchValue);
    getAnimals();
  };

  const getAnimals = useCallback(() => {
    fetch(
      `https://stapi.co/api/v1/rest/animal/search?pageNumber=${pageNumber}&pageSize=${pageSize}`
    )
      .then((response) => response.json())
      .then((animalsSearchResult: AnimalSearchResult) => {
        setFilteredAnimals(search(animalsSearchResult.animals, searchValue));
        setTotalPages(animalsSearchResult.page.totalPages);
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => setLoading(false));
  }, [pageNumber, searchValue, pageSize]);

  useEffect(() => {
    getAnimals();
  }, [pageNumber, getAnimals]);

  useEffect(() => {
    setSearchParams(`pageNumber=${pageNumber}&pageSize=${pageSize}`);
  }, [pageNumber, pageSize, setSearchParams]);

  const inputChange = (event: React.FormEvent<HTMLInputElement>) => {
    const inputValue = Number(event.currentTarget.value);
    setPageSize(inputValue);
    setPageNumber(1);
  };

  function range(firstPage: number, lastPage: number) {
    const pages = [];

    for (let i = firstPage; i <= lastPage; i++) {
      pages.push(i);
    }

    return pages;
  }

  // const count = useSelector((state: RootState) => selectCount(state));
  const pages = range(1, totalPages);
  return (
    <div className={styles.containerWrapper}>
      {/* <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button> */}
      <div className={classNames(styles.container, styles.header)}>
        <div className={styles.searchPanel}>
          <Input onSearchChange={onSearchChange} value={searchValue} />
          <Button onClick={showFilteredItem}>Search</Button>
        </div>
        <Button onClick={showError}>Throw error</Button>
      </div>
      <div className={classNames(styles.content, 'pv-4')}>
        <div className={styles.wrapperInput}>
          <label> enter the number of cards elements </label>
          <input value={pageSize} onChange={inputChange} />
        </div>
        <div className={styles.container}>
          {isLoading ? (
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
      {totalPages > 1 && (
        <ul className={styles.pagination}>
          {pages.map((page: number) => (
            <PaginationItem
              onClick={() => setPageNumber(page)}
              key={page}
              className={pageNumber === page ? 'active-btn' : ''}
            >
              {page}
            </PaginationItem>
          ))}
        </ul>
      )}
      {isShowError && <CustomError />}
    </div>
  );
};

export default Main;
