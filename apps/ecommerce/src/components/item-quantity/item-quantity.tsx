import styles from './item-quantity.module.css';
import MinusIcon from '../../assets/icon-minus.svg';
import PlusIcon from '../../assets/icon-plus.svg';

/* eslint-disable-next-line */
export interface ItemQuantityProps {}

export function ItemQuantity(props: ItemQuantityProps) {
  return (
    <div className="flex pb-4">
      <button className="border-none rounded-none rounded-tl-lg rounded-bl-lg btn bg-light-grayish-blue">
        <img src={MinusIcon} alt="Minus icon" />
      </button>
      <input
        type="text"
        value="0"
        className="w-full max-w-xs font-bold text-center border-none rounded-none input font-very-dark-blue bg-light-grayish-blue"
      />
      <button className="border-none rounded-none rounded-tr-lg rounded-br-lg btn bg-light-grayish-blue">
        <img src={PlusIcon} alt="Plus icon" />
      </button>
    </div>
  );
}

export default ItemQuantity;
