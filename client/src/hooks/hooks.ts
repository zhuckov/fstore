import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store/products-store/productStore";
import { removeProduct } from "../store/products-store/productsSlice";
import { useEffect } from "react";
import { fetchAllProducts } from "../store/products-store/products-function";

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

  useEffect(() => {
    if (productStatus === "idle") {
      dispatch(fetchAllProducts());
    }
  }, [productStatus, dispatch]);

  return { products, productStatus, error, handleRemove };
};
