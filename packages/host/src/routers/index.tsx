import RemoteApp1Routers from "checkout/Routers";
import RemoteApp2Routers from "search/Routers";
import Local from "./Local";
import Home from "../pages/Home";

const Routers = () => [
  Local(),
  // { ...RemoteApp2Routers(), element: <Home /> },
  // { ...RemoteApp1Routers(), element: <Home /> },
];

export default Routers;
