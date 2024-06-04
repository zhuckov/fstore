import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { IStoreProduct, ProductsState } from "../../types/types";
import { fetchAllProducts } from "./products-function";

const initialState: ProductsState = {
  products: [],
  status: "idle",
  error: null,
};

export const removeProduct = createAsyncThunk("products/removeProduct", async (id: number) => {
  const response = await fetch("http://localhost:80/products/", {
    method: "DELETE",
    body: JSON.stringify({
      id: id,
    }),
  });
  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }
  return id;
});

const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<IStoreProduct>) => {
      state.products.push(action.payload);
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
      })
      .addCase(removeProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = state.products.filter((product) => product.id !== action.payload);
      })
      .addCase(removeProduct.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
