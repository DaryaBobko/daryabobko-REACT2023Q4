import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Main from './Main';

test('saves entered value to local storage on button click', () => {
  render(<Main />);

  const input = screen.getByRole('textbox');
  fireEvent.change(input, { target: { value: 'testValue' } });

  const searchButton = screen.getByRole('button');
  fireEvent.click(searchButton);

  expect(localStorage.getItem('searchValue')).toBe('testValue');
});
