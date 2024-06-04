import { createAsyncThunk } from "@reduxjs/toolkit";
import { IProductPost } from "../../types/types";

export const fetchAllProducts = createAsyncThunk("products/fetchAllProducts", async () => {
  const response = await fetch("http://localhost:80/products/");
  if (!response.ok) {
    throw new Error("Ошибка при получении продуктов.");
  }
  const data = await response.json();
  return data;
});

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

export const createNewProduct = createAsyncThunk("http://localhost:80/products", async (product: IProductPost) => {
  const response = await fetch("http://localhost:80/products/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }
  return product;
});
