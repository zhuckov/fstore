import { useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { removeProduct } from "../../../store/products-store/productsSlice";
import { fetchAllProducts } from "../../../store/products-store/products-function";

const ProductsListView = () => {
  const dispatch = useAppDispatch();
  const appProducts = useAppSelector((state) => state.product.products);
  const productStatus = useAppSelector((state) => state.product.status);
  const error = useAppSelector((state) => state.product.error);
  const renderCount = useRef(0);
  const handleRemove = (id: number) => {
    dispatch(removeProduct(id));
  };
  useEffect(() => {
    renderCount.current += 1;
    console.log(`Render count: ${renderCount.current}`);
    if (productStatus === "idle") {
      dispatch(fetchAllProducts());
    }
  }, [productStatus, dispatch]);

  if (productStatus === "loading") {
    return <p>Загрузка...</p>;
  }

  if (productStatus === "failed") {
    return <p>Ошибка: {error}</p>;
  }
  return (
    <section className="flex flex-col gap-2 mt-4 w-full">
      {appProducts.map((product) => (
        <div
          className="hover:bg-admin-side-bg bg-card-not-active cursor-pointer flex w-auto px-6 py-4 items-center rounded-lg"
          key={product.id}
        >
          <div className="card-info w-full flex items-center">
            <img className="w-20 h-20 rounded-lg mr-6" src={product.productPhoto} alt={product.productName} />
            <p className="text-2xl mr-10">{product.productName}</p>
            <p className="text-2xl">
              {Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
              }).format(product.productPrice)}
            </p>
            <div className="flex ml-auto items-center gap-2">
              <button className="text-blue-500 hover:underline" onClick={() => handleRemove(product.id)}>
                удалить
              </button>
              <button className="text-blue-500 py-2 hover:underline" onClick={() => console.log("Редактировать")}>
                редактировать
              </button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsListView;
