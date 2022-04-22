import styles from './cart.module.css';

/* eslint-disable-next-line */
export interface CartProps {}

export function Cart(props: CartProps) {
  return (
    <div className="card h-64 bg-base-100 shadow-xl">
      <div className="card-body">
        <h1 className="card-title">Cart</h1>
        <div className="divider"></div>
        <p className="justify-end">Your cart is empty.</p>
      </div>
    </div>
  );
}

export default Cart;
