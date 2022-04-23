import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactSVG } from 'react-svg';
import { cartActions, Product } from '../../app/store/cart.slice';
import CartIcon from '../../assets/icon-cart.svg';
import UserAvatar from '../../assets/image-avatar.png';
import Carousel from '../../components/carousel/carousel';
import Cart from '../../components/cart/cart';
import ItemQuantity from '../../components/item-quantity/item-quantity';
import classNames from 'classnames';

export interface SellingProps {
  product: Product;
  quantity: number;
}

export function Selling(props: SellingProps) {
  const menuPath = '../../assets/icon-menu.svg';
  const logoPath = '../../assets/logo.svg';
  const cartPath = '../../assets/icon-cart.svg';
  const closePath = '../../assets/icon-close.svg';
  const dispatch = useDispatch();

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [productQuantity, setProductQuantity] = useState(props.quantity);

  function toggleDrawer(isOpen: boolean) {
    setDrawerOpen(isOpen);
  }

  function handleChangeCartOpen() {
    setIsCartOpen(!isCartOpen);
  }

  function handleProductDecrement() {
    setProductQuantity(productQuantity - 1);
  }

  function handleProductIncrement() {
    setProductQuantity(productQuantity + 1);
  }

  function handleAddToCart() {
    productQuantity > 0
      ? dispatch(
          cartActions.addToCart({
            product: props.product,
            quantity: productQuantity,
          })
        )
      : dispatch(cartActions.removeFromCart(props.product));
  }

  function handleRemoveFromCart(product: Product) {
    dispatch(cartActions.removeFromCart(product));
  }

  return (
    <div>
      <div className="drawer">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
        />
        <div className="flex flex-col drawer-content">
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                className="btn btn-square btn-ghost"
                onClick={() => toggleDrawer(true)}
              >
                <ReactSVG src={menuPath} />
              </label>
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {['Collection', 'Men', 'Women', 'About', 'Contact'].map(
                  (item, index) => (
                    <li key={index}>
                      <a>{item}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div className="flex items-center justify-start px-2">
              <ReactSVG src={logoPath} />
            </div>
            <div className="flex items-center justify-end flex-1 px-2">
              <ReactSVG
                src={cartPath}
                onClick={handleChangeCartOpen}
                className="cursor-pointer"
              />
              <img
                src={UserAvatar}
                alt="User avatar"
                className="object-cover h-6 px-2 rounded-fullw-6"
              />
            </div>
          </div>
          <div className="relative stack">
            <div
              className={classNames('absolute w-11/12 top-6', {
                hidden: !isCartOpen,
              })}
            >
              <Cart handleRemoveFromCart={handleRemoveFromCart}></Cart>
            </div>
            <Carousel imagePaths={props.product.images}></Carousel>
          </div>
          <div className="p-6">
            <p className="text-xs font-bold uppercase text-primary">
              {props.product.brand}
            </p>
            <p className="py-4 text-3xl font-bold text-very-dark-blue">
              {props.product.name}
            </p>
            <p className="pb-4 text-sm text-neutral">
              {props.product.description}
            </p>
            <div className="flex flex-row pb-6">
              <div className="flex flex-row items-center justify-start flex-1">
                <p className="pr-4 text-2xl font-bold text-very-dark-blue">
                  ${' '}
                  {props.product.discount > 0
                    ? (
                        (props.product.price * props.product.discount) /
                        100
                      ).toFixed(2)
                    : props.product.price.toFixed(2)}
                </p>
                {props.product.discount ? (
                  <p className="p-1 text-sm font-bold rounded text-primary bg-pale-orange">
                    {props.product.discount}%
                  </p>
                ) : null}
                {props.product.discount ? (
                  <div className="flex items-center justify-end flex-1">
                    <p className="font-bold line-through text-grayish-blue">
                      $ {props.product.price.toFixed(2)}
                    </p>
                  </div>
                ) : null}
              </div>
            </div>
            <ItemQuantity
              quantity={productQuantity}
              handleProductDecrement={handleProductDecrement}
              handleProductIncrement={handleProductIncrement}
            ></ItemQuantity>
            <button
              className="w-full font-semibold text-white normal-case btn btn-primary"
              onClick={handleAddToCart}
            >
              <img
                src={CartIcon}
                alt="Cart icon"
                className="h-4 pr-4 fill-white"
              />{' '}
              Add to cart
            </button>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="p-4 overflow-y-auto menu w-80 bg-base-100">
            <ReactSVG
              src={closePath}
              className="px-4 pt-4 pb-12 cursor-pointer"
              onClick={() => toggleDrawer(false)}
            />
            {['Collection', 'Men', 'Women', 'About', 'Contact'].map(
              (item, index) => (
                <li>
                  <a key={index} className="font-semibold">
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Selling;
