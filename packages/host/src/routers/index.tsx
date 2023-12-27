import React from "react";
import RemoteSearchApp from "search/Routers";
import Local from "./Local";

const Search = React.lazy(() => import("search/Search"));
// const Checkout = React.lazy(() => import("checkout/Checkout"));

const Routers = () => [
  Local(),
  { ...RemoteSearchApp() },
  // { ...RemoteApp1Routers() },
];

export default Routers;
