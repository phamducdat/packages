import React from 'react';
import { render } from '@testing-library/react';
import MenuPath from '../MenuPath';

describe('MenuPath component', () => {
  test('renders without crashing', () => {
    const { container } = render(<MenuPath path={'/home'} />);
    expect(container.firstChild).toBeDefined();
  });
});
