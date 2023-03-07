import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: JSON.parse(window.localStorage.getItem("cart") || "[]"),
  reducers: {
    setCart: (state, action) => {
      const index = state.findIndex(
        (prod) => prod.product._id === action.payload._id
      );
      if (index === -1) {
        const product = action.payload;
        const prodQuantity = {
          product,
          quantity: 1,
        };
        return [...state, prodQuantity];
      } else {
        state[index].quantity += 1;
      }
    },
    removeItem: (state, action) => {
      const newCart = state.filter(
        (item) => item.product._id !== action.payload._id
      );
      return newCart;
    },
  },
});

export const { setCart, removeItem } = cartSlice.actions;

export default cartSlice.reducer;
