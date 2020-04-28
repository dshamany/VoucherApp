import React from 'react';
import { render } from '@testing-library/react';
import Index from '../src/components/Index.jsx';

test('renders Index component', () => {
  const { getByText } = render(<Index />);
  expect(indexElement).toBeInTheDocument();
});
