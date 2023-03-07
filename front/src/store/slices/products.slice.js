import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    setProducts: (state, action) => action.payload,
  },
});

export const { setProducts } = productSlice.actions;

export default productSlice.reducer;

export const getAllProductsThunk = () => (dispatch) => {
  axios
    .get("http://localhost:5000/api/products")
    .then((res) => dispatch(setProducts(res.data)));
};
