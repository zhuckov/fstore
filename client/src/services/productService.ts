import { IProduct } from "@/types/types";

const URL = "http://localhost:80/";

export const fetchAllProducts = async (): Promise<IProduct[]> => {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Ошибка при получении продуктов.");
  }
  const data = await response.json();
  return data;
};
