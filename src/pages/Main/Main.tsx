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

const Main: React.FC = () => {
  const [filteredAnimals, setFilteredAnimals] = useState([] as Animal[]);
  const [value, setValue] = useState(
    localStorage.getItem(ANIMAL_SEARCH_VALUE) || ''
  );
  const [isShowError, setShowError] = useState(false);
  const [isLoading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const [pageSize, setPageSize] = useState(
    Number(searchParams.get('pageSize')) || 8
  );
  const [pageNumber, setPageNumber] = useState(
    Number(searchParams.get('pageNumber')) || 1
  );

  const showError = () => {
    setShowError((prevState) => !prevState);
  };

  const onSearchChange = (value: string) => {
    setValue(value);
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
    localStorage.setItem(ANIMAL_SEARCH_VALUE, value);
    getAnimals();
  };

  const getAnimals = useCallback(() => {
    fetch(
      `https://stapi.co/api/v1/rest/animal/search?pageNumber=${pageNumber}&pageSize=${pageSize}`
    )
      .then((response) => response.json())
      .then((animalsSearchResult: AnimalSearchResult) => {
        setFilteredAnimals(search(animalsSearchResult.animals, value));
      })
      .catch((error) => {
        console.warn(error);
      })
      .finally(() => setLoading(false));
  }, [pageNumber, value, pageSize]);

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

  return (
    <div className={styles.containerWrapper}>
      <div className={classNames(styles.container, styles.header)}>
        <div className={styles.searchPanel}>
          <Input onSearchChange={onSearchChange} value={value} />
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
      <ul className={styles.pagination}>
        {[...Array(7)].map((_, i) => (
          <PaginationItem
            onClick={() => setPageNumber(i + 1)}
            key={i}
            className={pageNumber === i + 1 ? 'active-btn' : ''}
          >
            {i + 1}
          </PaginationItem>
        ))}
      </ul>
      {isShowError && <CustomError />}
    </div>
  );
};

export default Main;
