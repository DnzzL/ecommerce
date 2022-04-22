import styles from './cart.module.css';

/* eslint-disable-next-line */
export interface CartProps {}

export function Cart(props: CartProps) {
  return (
    <div className="h-64 shadow-xl card bg-base-100">
      <div className="card-body">
        <h1 className="text-sm card-title">Cart</h1>
        <div className="divider"></div>
        <div className="flex items-center h-full">
          <p className="justify-end text-sm font-semibold text-center text-dark-grayish-blue">
            Your cart is empty.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Cart;
