import { render } from '@testing-library/react';

import Product from './selling';

describe('Product', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Product />);
    expect(baseElement).toBeTruthy();
  });
});
