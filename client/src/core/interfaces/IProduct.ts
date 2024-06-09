import { ProductId, Rating } from "../types/types";

/**
 * Интерфейс описывает структуру объекта продукта.
 */
export interface IProduct {
  /** Идентификатор продукта */
  id?: ProductId;
  /** Название продукта */
  productName: string;
  /** Цена продукта */
  productPrice: number;
  /** Описание продукта */
  productDescription?: string;
  /** Рейтинг продукта */
  productRating?: Rating;
  /** URL фото продукта */
  productPhoto: string;
}

/**
 * Интерфейс для POST-запроса создания продукта.
 */

export interface IProductPost extends Pick<IProduct, "productName" | "productPrice" | "productDescription" | "productPhoto"> {}

export interface ProductsState {
  products: IProduct[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null | undefined;
}

/**
 * Интерфейс для возращаемых данных из UseProducts
 */

export interface UseProductsReturnType extends ProductsState {
  handleRemove: (id: number) => void;
  addProductHandler: (product: IProductPost) => void;
  updateProductHandler: (product: IProductPost) => void;
}
