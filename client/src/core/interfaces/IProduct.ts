import { ProductId, Rating } from "../types/types";

/*Интерфейс описывает структуру объекта продукта.*/
export interface IProduct {
  /* Идентификатор продукта */
  id?: ProductId;
  /* Название продукта */
  productName: string;
  /* Цена продукта */
  productPrice: number;
  /* Описание продукта */
  productDescription?: string;
  /* Рейтинг продукта */
  productRating?: Rating;
  /* URL фото продукта */
  productPhoto: string;
}

export interface IProductFormProps extends Pick<IProduct, "productName" | "productPrice"> {
  /* Обработчик отправки формы для создания продукта */
  submitCreateProduct?: () => void;
  /* Функция для установки нового названия продукта */
  setProductName: (newProductName: string) => void;
  /* Функция для установки новой цены продукта */
  setPrice: (newPrice: number) => void;
  /* Процент скидки на продукт */
  sale: number;
  /* Установка процента скидки на продукт */
  setSale: (percent: number) => void;
  /* Указывает, находится ли продукт на скидке */
  isSale: boolean;
  /* Переключатель, находится ли продукт на скидке */
  setIsSale: () => void;
}

/* Интерфейс для POST-запроса создания продукта.*/

export interface IProductPost extends Pick<IProduct, "productName" | "productPrice" | "productDescription" | "productPhoto"> {}

export interface ProductsState {
  products: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

/*
 * Интерфейс для возращаемых данных из UseProducts
 */

export interface UseProductsReturnType extends ProductsState {
  handleRemove: (id: number) => void;
  addProductHandler: (product: IProductPost) => void;
  updateProductHandler: (product: IProductPost) => void;
}
