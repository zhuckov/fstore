import { FC, useEffect, useState } from "react";
import { IProduct } from "../../types/types";
import { fetchAllProducts } from "../../services/productService";
import ProductsListView from "../../components/smart/products-view/ProductsListView";

const AdminCatalog: FC = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>();

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetchAllProducts();
        setProducts(response);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        }
      } finally {
        setIsLoading(false);
      }
    }
    getProducts();
  }, []);
  return (
    <div className="w-9/12 px-10 pt-10">
      {isLoading && <p>Загрузка</p>}
      {error && <p>{error}</p>}
      <a
        className="w-3/12 ml-auto flex gap-2 justify-center items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
        href="/admin/create-product"
      >
        <span className="text-2xl -top-0.5 relative">+</span> Добавить
      </a>
      <ProductsListView products={products} />
    </div>
  );
};

export default AdminCatalog;
