import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ItemDetails from './ItemDetails';

describe('ListItem', () => {
  const title = 'close';
  test('should render the relevant card data', () => {
    render(<ItemDetails />);

    const listItem = screen.getByText(title);
    expect(listItem).toBeInTheDocument();
  });
});
