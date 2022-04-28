import { useSelector } from 'react-redux';
import { ReactSVG } from 'react-svg';
import { CartItem, Product, selectCartItems } from '../../app/store/cart.slice';

export interface CartProps {
  handleRemoveFromCart: (product: Product) => void;
}

export function Cart(props: CartProps) {
  const binPath = '../../assets/icon-delete.svg';
  const items = useSelector(selectCartItems);

  function handleClick(product: Product) {
    props.handleRemoveFromCart(product);
  }

  const cartContent = (items: CartItem[]) =>
    items.map((item) => (
      <div className="flex flex-col flex-1">
        <div className="flex">
          <div className="w-1/4">
            <img
              src={item.product.images[0]}
              alt="Product"
              className="h-12 rounded"
            />
          </div>
          <div className="w-1/2">
            <div className="flex flex-col">
              <p className="text-sm truncate text-grayish-blue">
                {item.product.name}
              </p>
              <div className="flex">
                <p className="text-sm text-grayish-blue">
                  ${item.product.price.toFixed(2)}
                </p>
                <p className="text-sm text-grayish-blue">x</p>
                <p className="text-sm text-grayish-blue">{item.quantity}</p>
                <p className="text-sm font-semibold text-very-dark-blue">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
          <div
            className="w-1/4 cursor-pointer"
            onClick={() => handleClick(item.product)}
          >
            <ReactSVG
              src={binPath}
              alt="Delete icon"
              className="flex items-center justify-end h-full"
            />
          </div>
        </div>
        <div className="py-4">
          <button className="w-full font-semibold text-white normal-case btn btn-primary">
            Checkout
          </button>
        </div>
      </div>
    ));

  return (
    <div className="h-64 shadow-xl card bg-base-100">
      <div className="card-body">
        <h1 className="text-sm card-title">Cart</h1>
        <div className="py-1 divider"></div>
        <div className="flex items-center h-full">
          {items.length ? (
            cartContent(items)
          ) : (
            <p className="justify-end text-sm font-semibold text-center text-dark-grayish-blue">
              Your cart is empty.
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
