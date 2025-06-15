import { CartItemData } from "../features/cart/cartSlice";

export type OrderItemProps = {
  item : CartItemData;
  isLoadingIngredients: boolean;
  ingredients: string[];
};

export type Order = {
  id: string | undefined;
  priority: boolean;
};

export type UpdateOrderProps = {
  order: Order;
};

export type OrderSummary = {
  id: string | undefined;
  status: string | undefined;
  priority: boolean;
  priorityPrice: number;
  orderPrice: number;
  estimatedDelivery: string;
  cart: CartItemData[];
};
