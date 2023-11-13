import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import userEvent from '@testing-library/user-event';

import Button from './Button';

describe('Button', () => {
  const title = 'test';

  test('matches snapshot with children', () => {
    const { container } = render(<Button>{title}</Button>);
    expect(container).toMatchSnapshot();
  });

  test('onClick is invoked on user click', async () => {
    const onClickMock = jest.fn();
    render(<Button onClick={onClickMock}>{title}</Button>);

    const button = screen.getByText(title);
    expect(button).toBeTruthy();
    expect(button).toBeInTheDocument();

    await userEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });
});
