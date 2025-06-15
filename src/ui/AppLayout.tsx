import Header from "./Header";
import CartOverview from "../features/cart/CartOverview";
import { Outlet, useNavigation } from "react-router-dom";
import Loader from "./Loader";
import { ReactElement } from "react";

function AppLayout(): ReactElement {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />

      <main className="max-w-10xl overflow-auto">
        <Outlet />
      </main>

      <CartOverview />
    </div>
  );
}

export default AppLayout;
