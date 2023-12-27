import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routers from "./routers";
import { Provider } from 'react-redux';
import { store } from 'checkout/store';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={createBrowserRouter(Routers())} />
    </Provider>
  );
};
export default App;
