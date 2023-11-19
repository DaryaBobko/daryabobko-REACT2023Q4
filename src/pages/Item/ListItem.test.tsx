import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import ItemDetails from './ItemDetails';
import { MemoryRouter } from 'react-router';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: (): jest.Mock => mockedUsedNavigate,
}));

describe('ListItem', () => {
  const title = 'close';
  test('should render the relevant card data', async () => {
    render(
      <MemoryRouter>
        <ItemDetails />
      </MemoryRouter>
    );

    const listItem = screen.getByText(title);
    expect(listItem).toBeInTheDocument();
  });
});
