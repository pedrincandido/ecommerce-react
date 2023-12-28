import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface BaseStats {
  HP: number;
  Attack: number;
  Defense: number;
}

export interface CardItem {
  id: number;
  price: number;
  quantity: number;
  name: {
    english: string;
  };
  type: string[];
  base: BaseStats;
}

export interface CartState {
  items: CardItem[];
}

const initialState: CartState = {
  items: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<CardItem>) => {
      const existingIndex = state.items.findIndex((item) => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.items[existingIndex].quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    removeItem: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
