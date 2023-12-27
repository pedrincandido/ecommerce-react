import { ReactNode } from "react";
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
declare const Routers: () => PathRoutePropsItems | {};
export default Routers;
