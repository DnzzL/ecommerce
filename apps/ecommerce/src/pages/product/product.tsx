import CartIcon from '../../assets/icon-cart.svg';
import MinusIcon from '../../assets/icon-minus.svg';
import NextIcon from '../../assets/icon-next.svg';
import PlusIcon from '../../assets/icon-plus.svg';
import PreviousIcon from '../../assets/icon-previous.svg';
import ProductImage1 from '../../assets/image-product-1.jpg';
import Header from '../../components/header/header';
import styles from './product.module.css';

/* eslint-disable-next-line */
export interface ProductProps {}

export function Product(props: ProductProps) {
  return (
    <div className={styles['container']}>
      <Header></Header>
      <div className={styles['product-image-container']}>
        <img
          className={styles['product-image']}
          src={ProductImage1}
          alt="Product"
        />
        <button
          className={[styles['arrow-button'], styles['previous-arrow']].join(
            ' '
          )}
        >
          <img src={PreviousIcon} alt="Previous icon" />
        </button>
        <button
          className={[styles['arrow-button'], styles['next-arrow']].join(' ')}
        >
          <img src={NextIcon} alt="Next icon" />
        </button>
      </div>
      <div className={styles['details']}>
        <p className={styles['brand']}>Sneaker Company</p>
        <p className={styles['name']}>Fall Limited Edition Sneakers</p>
        <p className={styles['description']}>
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.
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
            className={[styles['quantity-button'], styles['left-button']].join(
              ' '
            )}
          >
            <img src={MinusIcon} alt="Minus icon" />
          </button>
          <input className={styles['quantity-input']} type="text" value="0" />
          <button
            className={[styles['quantity-button'], styles['right-button']].join(
              ' '
            )}
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
  );
}

export default Product;
