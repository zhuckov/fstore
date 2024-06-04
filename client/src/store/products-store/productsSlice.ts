import { PayloadAction, createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { IStoreProduct, ProductsState } from "../../types/types";
import { removeProduct as deleteProduct } from "../../services/productService";

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
  const response = await fetch("http://localhost:80/products/");
  if (!response.ok) {
    throw new Error("Ошибка при получении продуктов.");
  }
  const data = await response.json();
  return data;
});

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IStoreProduct>) => {
      state.products.push(action.payload);
    },
    removeProduct: (state, action: PayloadAction<number>) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
      deleteProduct(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAllProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchAllProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
