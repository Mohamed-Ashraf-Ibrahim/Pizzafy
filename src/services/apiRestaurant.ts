const API_URL = import.meta.env.VITE_API_URL;

type MenuItem = {
  id: number;
  name: string;
  description?: string;
  unitPrice: number;
  imageUrl: string;
  ingredients: string[];
  soldOut: boolean;
};

type CartItem =  {
  pizzaId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  totalPrice: number;
  addIngredients: string[];
  removeIngredients: string[];
};

type Order = {
  id: string;
  customer: string;
  estimatedDelivery: string;
  orderPrice: number;
  priorityPrice: number;
  priority: boolean;
  cart: CartItem[];
  status: "pending" | "preparing" | "delivered";
};

type NewOrder = {
  customer: string;
  cart: CartItem[];
  priority: boolean;
};

if (!API_URL) {
  throw new Error("VITE_API_URL environment variable is not defined");
}

export async function getMenu(): Promise<MenuItem[]> {
  const res = await fetch(`${API_URL}/menu`);

  // fetch won't throw error on 400 errors (e.g. when URL is wrong), so we need to do it manually. This will then go into the catch block, where the message is set
  if (!res.ok) throw Error("Failed getting menu");

  const { data } = await res.json();
  return data;
}

export async function getOrder(id: string): Promise<Order> {
  const res = await fetch(`${API_URL}/order/${id}`);
  if (!res.ok) throw Error(`Couldn't find order #${id}`);

  const { data } = await res.json();
  return data;
}

export async function createOrder(newOrder: NewOrder): Promise<Order> {
  try {
    const res = await fetch(`${API_URL}/order`, {
      method: "POST",
      body: JSON.stringify(newOrder),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    const { data } = await res.json();
    return data;
  } catch {
    throw Error("Failed creating your order");
  }
}

export async function updateOrder(
  id: string,
  updateObj: Partial<Order>,
): Promise<void> {
  try {
    const res = await fetch(`${API_URL}/order/${id}`, {
      method: "PATCH",
      body: JSON.stringify(updateObj),
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) throw Error();
    // We don't need the data, so we don't return anything
  } catch (err) {
    throw Error("Failed updating your order");
  }
}
