import ReactDOM from "react-dom";

import { Provider } from "react-redux";
import ShoppingCart from "src/components/ShoppingCart";
import { store } from "src/store/store";

const CheckoutPage = () => {
  return (
    <Provider store={store}>
      <ShoppingCart />
    </Provider>
  );
};

ReactDOM.render(<CheckoutPage />, document.getElementById("app"));
