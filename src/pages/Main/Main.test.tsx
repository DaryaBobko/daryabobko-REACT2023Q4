import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Main from './Main';
import { store } from '../../store/store';
import { MemoryRouter } from 'react-router';
import { Provider } from 'react-redux';
import { ANIMAL_SEARCH_VALUE } from '../../constants';

describe('Main component tests', () => {
  it('should save entered value to local storage on Search button click', async () => {
    render(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>
    );

    const localStorageSpy = jest.spyOn(
      window.localStorage.__proto__,
      'setItem'
    );

    const searchInput = screen.getByTestId('searchInput');
    await userEvent.type(searchInput, 'testSearchTerm');

    const searchButton = screen.getByTestId('searchButton');
    await fireEvent.click(searchButton);

    expect(localStorageSpy).toHaveBeenCalledWith(
      ANIMAL_SEARCH_VALUE,
      'testSearchTerm'
    );

    localStorageSpy.mockRestore();
  });

  it('should retrieve value from local storage upon mounting', () => {
    localStorage.setItem(ANIMAL_SEARCH_VALUE, 'initialValue');

    render(
      <Provider store={store}>
        <MemoryRouter>
          <Main />
        </MemoryRouter>
      </Provider>
    );

    const searchInput = screen.getByTestId('searchInput');
    expect(searchInput).toHaveValue('initialValue');
  });
});
