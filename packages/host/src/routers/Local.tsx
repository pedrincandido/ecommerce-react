import type { ReactNode } from 'react';
// import RootLayout from '../components/RootLayout';
import Home from '../pages/Home';

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
    // element: <RootLayout />,
    children: [
      { path: '', element: <Home /> },
    ],
  };
};

export default Local;
