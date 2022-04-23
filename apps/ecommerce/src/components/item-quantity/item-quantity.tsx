import MinusIcon from '../../assets/icon-minus.svg';
import PlusIcon from '../../assets/icon-plus.svg';

export interface ItemQuantityProps {
  quantity: number;
  handleProductIncrement(): void;
  handleProductDecrement(): void;
}

export function ItemQuantity(props: ItemQuantityProps) {
  return (
    <div className="flex pb-4">
      <button
        className="border-none rounded-none rounded-tl-lg rounded-bl-lg btn bg-light-grayish-blue"
        onClick={props.handleProductDecrement}
      >
        <img src={MinusIcon} alt="Minus icon" />
      </button>
      <input
        type="text"
        min={0}
        value={props.quantity}
        className="w-full max-w-xs font-bold text-center border-none rounded-none input font-very-dark-blue bg-light-grayish-blue"
      />
      <button
        className="border-none rounded-none rounded-tr-lg rounded-br-lg btn bg-light-grayish-blue"
        onClick={props.handleProductIncrement}
      >
        <img src={PlusIcon} alt="Plus icon" />
      </button>
    </div>
  );
}

export default ItemQuantity;
