import { ActionFunctionArgs, useFetcher } from "react-router-dom";
import Button from "../../ui/Button";
import { updateOrder } from "../../services/apiRestaurant";
import { UpdateOrderProps } from "../../types/order";

function UpdateOrder({ order }: UpdateOrderProps) {
  const fetcher = useFetcher();
  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type="small" className="text-right">
        Make Priority
      </Button>
    </fetcher.Form>
  );
}

export async function action({ params }: ActionFunctionArgs) {
  if (!params.orderId) {
    throw new Error("Order ID is missing");
  }
  const data = { priority: true };
  await updateOrder(params.orderId, data);
  return null;
}

export default UpdateOrder;
