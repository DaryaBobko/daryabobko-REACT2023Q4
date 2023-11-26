import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './pages/404/404';

describe('Not found page', () => {
  test('renders 404 page for invalid route', () => {
    render(
      <MemoryRouter>
        <NotFound />
      </MemoryRouter>
    );

    const headingElement = screen.getByText(/404/i);
    const paragraphElement = screen.getByText(/Page Not Found/i);

    expect(headingElement).toBeInTheDocument();
    expect(paragraphElement).toBeInTheDocument();
  });
});
