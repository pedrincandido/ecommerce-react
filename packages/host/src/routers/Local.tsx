import type { ReactNode } from "react";
// import RootLayout from '../components/RootLayout';
import RootLayout from "../pages/RootLayout";
import HomeContent from "../modules/product/components/HomeContent";
import RemoteApp2Routers from "search/Routers";
import RemoteApp1Routers from "checkout/Routers";

type SubRoutChild = {
  path?: string;
  element?: ReactNode;
  children?: SubRoutChild[];
};
type PathRoutePropsItems = {
  path: string;
  element?: ReactNode;
  children: SubRoutChild[];
};

const Local = (): PathRoutePropsItems | {} => {
  return {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <HomeContent /> },
      { ...RemoteApp1Routers() },
      { ...RemoteApp2Routers() },
    ],
  };
};

export default Local;
