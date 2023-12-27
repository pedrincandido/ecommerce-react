import { ReactNode } from "react";
import SearchContent from "../components/SearchContent";

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
    path: "search",
    children: [{ path: "", element: <SearchContent /> }],
  };
};

export default Routers;
