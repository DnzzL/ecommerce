import CartIcon from '../../assets/icon-cart.svg';
import MinusIcon from '../../assets/icon-minus.svg';
import NextIcon from '../../assets/icon-next.svg';
import PlusIcon from '../../assets/icon-plus.svg';
import PreviousIcon from '../../assets/icon-previous.svg';
import ProductImage1 from '../../assets/image-product-1.jpg';
import ProductImage2 from '../../assets/image-product-2.jpg';
import ProductImage3 from '../../assets/image-product-3.jpg';
import Cart from '../../components/cart/cart';
import Header from '../../components/header/header';
import styles from './product.module.css';
import useLocalStorageState from 'use-local-storage-state';
import { ReactSVG } from 'react-svg';
import UserAvatar from '../../assets/image-avatar.png';
import Carousel from '../../components/carousel/carousel';

/* eslint-disable-next-line */
export interface ProductProps {}

export function Product(props: ProductProps) {
  const menuPath = '../../assets/icon-menu.svg';
  const logoPath = '../../assets/logo.svg';
  const cartPath = '../../assets/icon-cart.svg';
  const closePath = '../../assets/icon-close.svg';

  return (
    <div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <ReactSVG src={menuPath} />
              </label>
            </div>
            <div className="flex items-center justify-start px-2">
              <ReactSVG src={logoPath} />
            </div>
            <div className="flex items-center justify-end flex-1 px-2">
              <ReactSVG src={cartPath} />
              <img
                src={UserAvatar}
                alt="User avatar"
                className="object-cover rounded-fullw-6 h-6 px-2"
              />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="menu menu-horizontal">
                {['Collection', 'Men', 'Women', 'About', 'Contact'].map(
                  (item) => (
                    <li>
                      <a>{item}</a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          <Carousel
            imagePaths={[
              '../../assets/image-product-1.jpg',
              '../../assets/image-product-2.jpg',
              '../../assets/image-product-3.jpg',
              '../../assets/image-product-4.jpg',
            ]}
          ></Carousel>
          <div className="p-6">
            <p className="text-primary uppercase font-bold text-xs">
              Sneaker Company
            </p>
            <p className="text-very-dark-blue font-bold text-3xl py-4">
              Fall Limited Edition Sneakers
            </p>
            <p className="text-neutral text-sm pb-4">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex flex-row pb-6">
              <div className="flex flex-row flex-1 items-center justify-start">
                <p className="text-very-dark-blue font-bold text-2xl pr-4">
                  $125.00
                </p>
                <p className="text-primary font-bold text-sm bg-pale-orange rounded p-1">
                  50%
                </p>
              </div>
              <div className="flex flex-1 items-center justify-end">
                <p className="text-grayish-blue font-bold line-through">
                  $250.00
                </p>
              </div>
            </div>
            <div className="flex pb-4">
              <button className="btn bg-light-grayish-blue border-none rounded-none rounded-tl-lg rounded-bl-lg">
                <img src={MinusIcon} alt="Minus icon" />
              </button>
              <input
                type="text"
                placeholder="Type here"
                className="input w-full max-w-xs text-center border-none font-very-dark-blue font-bold bg-light-grayish-blue rounded-none"
              />
              <button className="btn bg-light-grayish-blue border-none rounded-none rounded-tr-lg rounded-br-lg">
                <img src={PlusIcon} alt="Plus icon" />
              </button>
            </div>
            <button className="btn btn-primary text-white normal-case font-semibold w-full">
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
          <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
            <ReactSVG src={closePath} className="px-4 pt-4 pb-12" />
            {['Collection', 'Men', 'Women', 'About', 'Contact'].map((item) => (
              <li>
                <a>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Product;
