import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/products-store/productStore";

import { useEffect } from "react";
import { createNewProduct, fetchAllProducts, removeProduct, updateProduct } from "../store/products-store/products-function";
import { IProductPost } from "../types/types";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((state) => state.product.products);
  const productStatus = useAppSelector((state) => state.product.status);
  const error = useAppSelector((state) => state.product.error);
  const handleRemove = (id: number) => {
    dispatch(removeProduct(id));
  };

  const addProductHandler = (product: IProductPost) => {
    dispatch(createNewProduct(product));
  };

  const updateProductHandler = (product: IProductPost) => {
    dispatch(updateProduct(product));
  };

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchAllProducts());
    }
  }, [productStatus, dispatch]);

  return { products, productStatus, error, handleRemove, addProductHandler, updateProductHandler };
};
