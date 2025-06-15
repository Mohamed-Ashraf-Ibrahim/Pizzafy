/* eslint-disable react/prop-types */
import { useDispatch } from "react-redux";
import Button from "../../ui/Button";
import { decreaseItemQuantity, increaseItemQuantity } from "./cartSlice";

type QuantityButtonsProps = {
  pizzaId: string;
  currentQuantity: number;
};

function QuantityButtons({ pizzaId, currentQuantity }: QuantityButtonsProps) {
  const dispatch = useDispatch();

  const handleIncrease = () => {
    dispatch(increaseItemQuantity(pizzaId));
  };

  const handleDecrease = () => {
    dispatch(decreaseItemQuantity(pizzaId));
  };

  return (
    <div className="flex items-center gap-5">
      <Button type="round" onClick={handleIncrease}>
        +
      </Button>
      <span className="text-base font-semibold">{currentQuantity}</span>
      <Button type="round" onClick={handleDecrease}>
        -
      </Button>
    </div>
  );
}

export default QuantityButtons;
