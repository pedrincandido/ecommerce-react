import React from "react";
import { Provider } from "react-redux";
import { store } from "checkout/store"; // This is assuming you have a federated module exposing the store
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Routers from "./routers";
import { GlobalStyles } from "./styles/styles";

const queryClient = new QueryClient();

const App = () => {
  return (
    <Provider store={store}>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={createBrowserRouter(Routers())} />
      </QueryClientProvider>
    </Provider>
  );
};

export default App;
