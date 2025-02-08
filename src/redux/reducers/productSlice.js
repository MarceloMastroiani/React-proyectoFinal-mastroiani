import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    data: [],
  },
  reducers: {
    fetchProducts: (state, action) => {
      return action.payload;
    },
    setProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

export const { setProducts, fetchProducts } = productsSlice.actions;

export default productsSlice.reducer;
