/* eslint-disable react/prop-types */
import { useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";

import DeleteButton from "./DeleteButton";
import QuantityButtons from "./QuantityButtons";
import { CartItemData, getCurrentQuantityId } from "./cartSlice";

type CartItemProps = {
  item: CartItemData;
};

function CartItem({ item }: CartItemProps) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantityId(pizzaId));

  return (
    <li className="flex items-center justify-between border-b px-2 py-6 lg:px-3 lg:py-5">
      <p className="text-sm font-medium lg:text-xl">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center space-x-3 font-medium lg:space-x-8">
        <p className="text-sm font-bold lg:text-lg">
          {formatCurrency(totalPrice)}
        </p>
        <QuantityButtons pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteButton pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
