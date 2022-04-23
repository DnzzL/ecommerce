// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Selling } from '../pages/selling/selling';
import { Product, selectCartItems } from './store/cart.slice';

export function App() {
  const product = {
    id: 1,
    brand: 'Sneaker Company',
    name: 'Fall Limited Edition Sneakers',
    description:
      "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.",
    price: 250,
    quantity: 0,
    discount: 50,
    images: [
      '../../assets/image-product-1.jpg',
      '../../assets/image-product-2.jpg',
      '../../assets/image-product-3.jpg',
      '../../assets/image-product-4.jpg',
    ],
  };

  const items = useSelector(selectCartItems);

  const getQuantity = useCallback(
    (product: Product) => {
      return items.length > 0
        ? items.filter((item) => item.product.id === product.id).length
        : 0;
    },
    [items]
  );

  return <Selling product={product} quantity={getQuantity(product)}></Selling>;
}

export default App;
