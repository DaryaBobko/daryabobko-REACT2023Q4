import { render } from '@testing-library/react';

import Input from './Input';

describe('Input', () => {
  const title = 'test';

  test('matches snapshot props', () => {
    const { container } = render(
      <Input onSearchChange={() => {}} value={title} />
    );
    expect(container).toMatchSnapshot();
  });
});
