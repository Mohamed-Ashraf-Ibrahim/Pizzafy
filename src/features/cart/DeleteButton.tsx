/* eslint-disable react/prop-types */
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";

type DeleteButtonProps = {
  pizzaId: string;
};

function DeleteButton({ pizzaId }: DeleteButtonProps) {
  const dispatch = useDispatch();

  const handleDeleteItem = () => {
    dispatch(deleteItem(pizzaId));
  };

  return (
    <Button onClick={handleDeleteItem} type="small">
      Delete
    </Button>
  );
}

export default DeleteButton;
