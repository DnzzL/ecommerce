import styles from './cart.module.css';

/* eslint-disable-next-line */
export interface CartProps {}

export function Cart(props: CartProps) {
  return (
    <div className={styles['container']}>
      <h1>Cart</h1>
      <hr />
      <div className={styles['items']}>
        <p>Your cart is empty.</p>
      </div>
    </div>
  );
}

export default Cart;
