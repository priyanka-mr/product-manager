import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('Unit Test List', () => {
  const { getByText } = render(<App />);
  expect(getByText(/Product Management/)).toBeInTheDocument();

});
