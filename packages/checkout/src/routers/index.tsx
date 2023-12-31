import { ReactNode } from "react";
import ShoppingCart from "../components/ShoppingCart";

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
    children: [{ path: "", element: <ShoppingCart /> }],
  };
};

export default Routers;
