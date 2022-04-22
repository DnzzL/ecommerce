import { render } from '@testing-library/react';

import ItemQuantity from './item-quantity';

describe('ItemQuantity', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ItemQuantity />);
    expect(baseElement).toBeTruthy();
  });
});
