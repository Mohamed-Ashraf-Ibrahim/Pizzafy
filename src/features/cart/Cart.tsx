import LinkButton from "../../ui/LinkButton";
import Button from "../../ui/Button";
import EmptyCart from "./EmptyCart";
import CartItem from "./CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, getCart } from "./cartSlice";
import { RootState } from "../../store";


function Cart() {
  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const userName = useSelector((state: RootState) => state.user.userName);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  if (!cart.length) return <EmptyCart />;

  return (
    <div className="px-4 py-2">
      <LinkButton to="/menu">&larr;Back to menu</LinkButton>

      <h2 className="mt-8 px-2 text-lg font-bold lg:px-6 lg:text-2xl">
        Your cart, {userName}
      </h2>

      <ul className="py-4 lg:px-4 lg:py-5">
        {cart.map((item, index) => (
          <CartItem key={index} item={item} />
        ))}
      </ul>

      <div className="space-x-5">
        <Button type={"primary"} to="/order/new">
          Order pizzas
        </Button>
        <Button onClick={handleClearCart} type={"secondary"}>
          Clear cart
        </Button>
      </div>
    </div>
  );
}

export default Cart;
