/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux";
import Button from "../../ui/Button";
import { formatCurrency } from "../../utils/helpers";
import { addItem, CartItemData, getCurrentQuantityId } from "../cart/cartSlice";
import DeleteButton from "../cart/DeleteButton";
import QuantityButtons from "../cart/QuantityButtons";
import { AppDispatch } from "../../store";
import { Pizza } from "../../types/pizza";

type PizzaProps = {
  pizza: Pizza;
};

function MenuItem({ pizza }: PizzaProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;
  const currentQuantity = useSelector(getCurrentQuantityId(id));
  const isInCart = currentQuantity > 0;

  const handleAddItem = () => {
    const newItem: CartItemData = {
      pizzaId: id,
      name,
      quantity: 1,
      unitPrice,
      totalPrice: unitPrice * 1,
    };
    dispatch(addItem(newItem));
  };

  return (
    <li className="flex gap-3 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-24 ${soldOut ? "opacity-70 grayscale" : ""}`}
      />
      <div className="flex flex-grow flex-col">
        <p className="font-medium">{name}</p>
        <p className="capitalize italic text-stone-500">
          {ingredients.join(", ")}
        </p>
        <div className="mt-auto">
          {!soldOut ? (
            <p>{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}
        </div>
      </div>

      {isInCart && (
        <div className="flex flex-col gap-5 py-2">
          <QuantityButtons pizzaId={id} currentQuantity={currentQuantity} />
          <DeleteButton pizzaId={id} />
        </div>
      )}

      {!soldOut && !isInCart && (
        <>
          <Button onClick={handleAddItem} type="small">
            Add to Cart
          </Button>
        </>
      )}
    </li>
  );
}

export default MenuItem;
