import { store } from "checkout/store"; // This is assuming you have a federated module exposing the store
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routers from "./routers";
import { GlobalStyles } from "./styles/styles";

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <RouterProvider router={createBrowserRouter(Routers())} />
    </Provider>
  );
};

export default App;
