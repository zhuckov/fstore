import { IProduct } from "../types/types";
import { v4 as uuidv4 } from "uuid";
const URL = "http://localhost:80/products/";

export const getUnicalImageName = () => {
  return `image_${uuidv4()}`;
};

export const fetchAllProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Ошибка при получении продуктов.");
  }
  const data = await response.json();
  return data;
};

export const createNewProduct = async (product: IProduct) => {
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
