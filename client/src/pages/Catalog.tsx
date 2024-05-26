import { FC, useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import CatalogCard from "../components/smart/catalog-card/CatalogCard";
import { fetchAllProducts } from "../services/productService";
import { IProduct } from "../types/types";
import { Autoplay } from "swiper/modules";

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
      <h1 className="text-4xl font-header-link mb-4">Каталог</h1>
      {isLoading && <p>Загрузка</p>}
      {error && <p>{error}</p>}
      {products.length && !isLoading ? (
        <Swiper modules={[Autoplay]} spaceBetween={20} speed={1200} slidesPerView={4} autoplay={{ delay: 2000 }} loop={true}>
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
