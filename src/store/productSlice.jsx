import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const apiUrl = process.env.REACT_APP_API_URL;
const apiUrl = import.meta.env.VITE_API_URL; 

const initialState = {
  data: [],
  status: "idle",
};

// Async thunk for fetching products
export const getProducts = createAsyncThunk("products/get", async () => {
  // const response = await axios.get("https://fakestoreapi.com/products");
  const response = await axios.get(apiUrl);
  return response.data; // Return the fetched data
});

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {}, // No reducers since we're using extraReducers
  extraReducers: (builder) => {
    builder
      .addCase(getProducts.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(getProducts.fulfilled, (state, action) => {
        state.data = action.payload;
        state.status = "succeeded";
      })
      .addCase(getProducts.rejected, (state, action) => {
        state.status = "error";
      });
  },
});

export default productSlice.reducer;
