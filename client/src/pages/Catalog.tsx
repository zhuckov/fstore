import { FC, useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { IProduct } from "../types/types";
import CatalogCard from "../components/smart/catalog-card/CatalogCard";
import { fetchAllProducts } from "../services/productService";

interface CatalogProps {}

const Catalog: FC<CatalogProps> = ({}) => {
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
    <div className="lp:px-4 tb:px-3">
      <h1 className="text-4xl font-header-link">Каталог</h1>
      {isLoading && <p>Загрузка</p>}
      {error && <p>{error}</p>}
      {products.length && !isLoading ? (
        <Swiper spaceBetween={20} slidesPerView={4} autoplay={true} loop={true}>
          {products.map((product) => (
            <SwiperSlide key={product.id} className="flex flex-col ds:gap-2">
              <CatalogCard
                id={product.id}
                productName={product.productName}
                productPhoto={product.productPhoto}
                productPrice={product.productPrice}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        ""
      )}
    </div>
  );
};

export default Catalog;
