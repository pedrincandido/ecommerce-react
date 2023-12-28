import type { ReactNode } from 'react';
// import RootLayout from '../components/RootLayout';
import RootLayout from '../pages/Home';
import HomeContent from '../modules/product/HomeContent';
import RemoteApp2Routers from "search/Routers";

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
    path: '/',
    element: <RootLayout />,
    children: [
      { path: '', element: <HomeContent /> },
      { ...RemoteApp2Routers() },
    ],
  };
};

export default Local;
