import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ListItem from './ListItem';

describe('ListItem', () => {
  const title = 'test name';
  test('should render the relevant card data', () => {
    render(
      <ListItem
        name={title}
        earthAnimal={true}
        avian={true}
        canine={true}
        feline={false}
      />
    );

    const listItem = screen.getByText(title);
    const listItemTitle = screen.getByRole('heading', { name: /test name/i });

    expect(listItem).toBeInTheDocument();
    expect(listItemTitle).toBeInTheDocument();
  });
});
