import { IProduct } from "../types/types";

const URL = "http://localhost:80/products/";

export const fetchAllProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Ошибка при получении продуктов.");
  }
  const data = await response.json();
  return data;
};

export const createNewProduct = async (product: any) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(product),
  });

  if (!response.ok) {
    throw new Error(`Ошибка: ${response.status} - ${response.statusText}`);
  }
};
