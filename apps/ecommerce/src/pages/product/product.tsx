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
          <Cart></Cart>
          <div className={styles['product-image-container']}>
            <img
              className={styles['product-image']}
              src={ProductImage1}
              alt="Product"
            />
            <button
              className={[
                styles['arrow-button'],
                styles['previous-arrow'],
              ].join(' ')}
            >
              <img src={PreviousIcon} alt="Previous icon" />
            </button>
            <button
              className={[styles['arrow-button'], styles['next-arrow']].join(
                ' '
              )}
            >
              <img src={NextIcon} alt="Next icon" />
            </button>
          </div>
          <div className={styles['details']}>
            <p className={styles['brand']}>Sneaker Company</p>
            <p className={styles['name']}>Fall Limited Edition Sneakers</p>
            <p className={styles['description']}>
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className={styles['price-container']}>
              <div className={styles['left']}>
                <p className={styles['price']}>$125.00</p>
                <p className={styles['discount']}>50%</p>
              </div>
              <div className={styles['right']}>
                <p className={styles['original-price']}>$250.00</p>
              </div>
            </div>
            <div className={styles['quantity-container']}>
              <button
                className={[
                  styles['quantity-button'],
                  styles['left-button'],
                ].join(' ')}
              >
                <img src={MinusIcon} alt="Minus icon" />
              </button>
              <input
                className={styles['quantity-input']}
                type="text"
                value="0"
              />
              <button
                className={[
                  styles['quantity-button'],
                  styles['right-button'],
                ].join(' ')}
              >
                <img src={PlusIcon} alt="Plus icon" />
              </button>
            </div>
            <button className={styles['cart-button']}>
              <img src={CartIcon} alt="Cart icon" />
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
