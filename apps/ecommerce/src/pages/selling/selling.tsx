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
  const [selectedImage, setSelectedImage] = useState(0);

  function navbar() {
    return (
      <div className="w-full navbar">
        <div className="flex-none md:hidden">
          <label
            htmlFor="my-drawer-3"
            className="btn btn-square btn-ghost"
            onClick={() => toggleDrawer(true)}
          >
            <ReactSVG src={menuPath} />
          </label>
        </div>
        <div className="flex items-center justify-start px-10">
          <ReactSVG src={logoPath} />
        </div>
        <div className="flex-none hidden md:block">
          <ul className="menu menu-horizontal">
            {['Collections', 'Men', 'Women', 'About', 'Contact'].map(
              (item, index) => (
                <li key={index}>
                  <a className="text-dark-grayish-blue">{item}</a>
                </li>
              )
            )}
          </ul>
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
            className="object-cover h-6 px-2 rounded-full md:h-8 md:px-4"
          />
        </div>
      </div>
    );
  }

  function productDetails(product: Product) {
    return (
      <div className="p-6 md:px-12 md:my-auto">
        <p className="text-xs font-bold uppercase text-primary">
          {product.brand}
        </p>
        <p className="py-4 text-3xl font-bold text-very-dark-blue md:text-5xl">
          {product.name}
        </p>
        <p className="pb-4 text-sm text-neutral md:text-base">
          {product.description}
        </p>
        <div className="flex flex-row pb-6 md:flex-col">
          <div className="flex flex-row items-center justify-start flex-1">
            <p className="pr-4 text-2xl font-bold text-very-dark-blue">
              ${' '}
              {product.discount > 0
                ? ((product.price * product.discount) / 100).toFixed(2)
                : product.price.toFixed(2)}
            </p>
            {product.discount ? (
              <p className="p-1 text-sm font-bold rounded text-primary bg-pale-orange">
                {product.discount}%
              </p>
            ) : null}
          </div>
          <div className="my-auto ">
            {product.discount ? (
              <div className="flex items-center justify-end flex-1 md:flex md:justify-start md:py-2">
                <p className="font-bold line-through text-grayish-blue">
                  $ {product.price.toFixed(2)}
                </p>
              </div>
            ) : null}
          </div>
        </div>
        <div className="md:flex md:gap-4">
          <ItemQuantity
            quantity={productQuantity}
            handleProductDecrement={handleProductDecrement}
            handleProductIncrement={handleProductIncrement}
          ></ItemQuantity>
          <button
            className="w-full font-semibold text-white normal-case btn btn-primary md:w-2/3 md:gap-4"
            onClick={handleAddToCart}
          >
            <img
              src={CartIcon}
              alt="Cart icon"
              className="h-4 pr-4 fill-white md:pr-0"
            />{' '}
            Add to cart
          </button>
        </div>
      </div>
    );
  }

  function lightBox(isInModal: boolean) {
    return (
      <div className="hidden md:flex md:flex-col md:gap-6 md:w-58">
        <label htmlFor="my-modal-3" className="modal-button">
          <img
            src={props.product.images[selectedImage]}
            alt="Product"
            className="md:rounded-xl"
          />
        </label>
        <div className="hidden md:flex md:justify-between">
          {props.product.images.map((image, index) => (
            <img
              onClick={() => setSelectedImage(index)}
              src={image}
              alt="Product"
              className={classNames('md:w-24 md:rounded-md md:cursor-pointer', {
                'md:modal-button': !isInModal,
                'md:border-2': index === selectedImage,
                'md:border-primary': index === selectedImage,
                'md:bg-blend-soft-light': index === selectedImage,
              })}
            />
          ))}
        </div>
      </div>
    );
  }

  function handleImageClick(index: number) {
    setSelectedImage(index);
  }

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
      <div className="drawer ">
        <input
          id="my-drawer-3"
          type="checkbox"
          className="drawer-toggle"
          checked={isDrawerOpen}
        />
        <div className="flex flex-col drawer-content md:px-16 md:pt-6 md:relative">
          <div
            className={classNames(
              'hidden md:block md:absolute md:right-6 md:w-1/3 md:top-20',
              {
                'md:hidden': !isCartOpen,
              }
            )}
          >
            <Cart handleRemoveFromCart={handleRemoveFromCart}></Cart>
          </div>
          {navbar()}
          <div className="hidden md:block md:h-1 md:divider md:bg-light-grayish-blue"></div>
          <div className="md:grid md:grid-cols-2">
            <div className="relative stack md:px-12 md:w-full md:flex md:my-auto">
              <div
                className={classNames('absolute w-11/12 top-6 md:hidden', {
                  hidden: !isCartOpen,
                })}
              >
                <Cart handleRemoveFromCart={handleRemoveFromCart}></Cart>
              </div>
              <Carousel imagePaths={props.product.images}></Carousel>
              {lightBox(false)}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="relative modal-box md:bg-transparent md:shadow-none md:py-12">
                  <label
                    htmlFor="my-modal-3"
                    className="absolute top-0 py-4 bg-transparent border-none btn btn-sm btn-circle right-4"
                  >
                    <ReactSVG src={closePath} />
                  </label>
                  {lightBox(true)}
                </div>
              </div>
            </div>
            {productDetails(props.product)}
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
            {['Collections', 'Men', 'Women', 'About', 'Contact'].map(
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
