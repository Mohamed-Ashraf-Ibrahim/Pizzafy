import { useLoaderData } from "react-router-dom";
import MenuItem from "./MenuItem";
import { getMenu } from "../../services/apiRestaurant";
import { Pizza } from "../../types/pizza";

function Menu() {
  const menu = useLoaderData() as Pizza[];

  return (
    <ul className="divide-y-2 divide-stone-200 px-3">
      {menu.map((pizza) => (
        <MenuItem pizza={pizza} key={pizza.id} />
      ))}
    </ul>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export async function loader() {
  const menu = await getMenu();
  return menu;
}

export default Menu;
