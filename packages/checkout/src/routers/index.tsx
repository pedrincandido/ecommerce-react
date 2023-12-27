import { ReactNode } from "react";
import ShoppingCart from "src/components/ShoppingCart";

type SubRoutChild = {
  path?: string;
  element?: ReactNode;
  children?: SubRoutChild[];
};
export type PathRoutePropsItems = {
  path: string;
  element?: ReactNode;
  children: SubRoutChild[];
};

const Routers = (): PathRoutePropsItems | {} => {
  return {
    path: "checkout",
    children: [{ path: "checkout", element: <ShoppingCart /> }],
  };
};

export default Routers;
