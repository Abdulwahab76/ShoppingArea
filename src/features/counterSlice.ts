import { createSlice } from "@reduxjs/toolkit";
import { cartType } from "../Types/types";

const initialState: cartType[] = [];

export const cartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      let notFind = false;
      let area = false
      state.map((product) => {
        if (product._productId !== action.payload._productId) {
          area =  true;
          return( product );
        } else if (product._productId === action.payload._productId) {
          notFind = true;
          return { ...product, quantity: product.quantity++ };
        }
      });
      if (notFind === false) {
        return [...state, action.payload];
      }
    },

    removeFromCart: (state, action) => {
      return state.filter(
        (product) => product._productId !== action.payload._productId
      );
    },

    decreaseFromCart: (state, action) => {
      state.map((product) => {
        if (product._productId !== action.payload._productId) {
          return product;
        } else if (product._productId === action.payload._productId) {
          return { ...product, quantity: product.quantity-- };
        }
      });
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseFromCart,
} = cartSlice.actions;

export default cartSlice.reducer;
