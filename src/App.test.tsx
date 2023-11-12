import App from './App';

import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

describe('Not found page', () => {
  test('renders 404 page for invalid route', () => {
    render(
      <MemoryRouter initialEntries={['/non-existent-route']}>
        <App />
      </MemoryRouter>
    );

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
  });
});
