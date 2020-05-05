import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App date={new Date(2020, 3, 4, 14, 45, 10)} />);
  const textElement = getByText(/2020/i);
  expect(textElement).toBeInTheDocument();
});
