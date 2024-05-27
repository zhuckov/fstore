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
      <button>+ CREATE NEW</button>
      <ProductsListView products={products} />
    </div>
  );
};

export default AdminCatalog;
