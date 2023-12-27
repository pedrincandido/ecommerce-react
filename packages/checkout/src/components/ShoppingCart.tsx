import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { CartItem, addItem, removeItem } from "../store/cartSlice";
import { RootState } from "../store/store";

const ShoppingCart: React.FC = () => {
  const cart = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch();

  const handleAddItem = (item: CartItem) => {
    dispatch(addItem(item));
  };

  const handleRemoveItem = (itemId: string) => {
    dispatch(removeItem({ id: itemId }));
  };

  return (
    <div>
      {cart.map((item: CartItem) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>Quantity: {item.quantity}</p>
          <button onClick={() => handleRemoveItem(item.id)}>Remove</button>
        </div>
      ))}
      <button onClick={() => handleAddItem({ id: "new", title: "New Item", price: 100, quantity: 1 })}>
        Add New Item
      </button>
    </div>
  );
};

export default ShoppingCart;
