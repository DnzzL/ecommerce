import { ReactSVG } from 'react-svg';
import CartIcon from '../../assets/icon-cart.svg';
import UserAvatar from '../../assets/image-avatar.png';
import Carousel from '../../components/carousel/carousel';
import Cart from '../../components/cart/cart';
import ItemQuantity from '../../components/item-quantity/item-quantity';

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
        <div className="flex flex-col drawer-content">
          <div className="w-full navbar">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <ReactSVG src={menuPath} />
              </label>
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
            <div className="flex items-center justify-start px-2">
              <ReactSVG src={logoPath} />
            </div>
            <div className="flex items-center justify-end flex-1 px-2">
              <ReactSVG src={cartPath} />
              <img
                src={UserAvatar}
                alt="User avatar"
                className="object-cover h-6 px-2 rounded-fullw-6"
              />
            </div>
          </div>
          <div className="relative stack">
            <div className="absolute w-11/12 top-6">
              <Cart></Cart>
            </div>
            <Carousel
              imagePaths={[
                '../../assets/image-product-1.jpg',
                '../../assets/image-product-2.jpg',
                '../../assets/image-product-3.jpg',
                '../../assets/image-product-4.jpg',
              ]}
            ></Carousel>
          </div>
          <div className="p-6">
            <p className="text-xs font-bold uppercase text-primary">
              Sneaker Company
            </p>
            <p className="py-4 text-3xl font-bold text-very-dark-blue">
              Fall Limited Edition Sneakers
            </p>
            <p className="pb-4 text-sm text-neutral">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex flex-row pb-6">
              <div className="flex flex-row items-center justify-start flex-1">
                <p className="pr-4 text-2xl font-bold text-very-dark-blue">
                  $125.00
                </p>
                <p className="p-1 text-sm font-bold rounded text-primary bg-pale-orange">
                  50%
                </p>
              </div>
              <div className="flex items-center justify-end flex-1">
                <p className="font-bold line-through text-grayish-blue">
                  $250.00
                </p>
              </div>
            </div>
            <ItemQuantity></ItemQuantity>
            <button className="w-full font-semibold text-white normal-case btn btn-primary">
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
