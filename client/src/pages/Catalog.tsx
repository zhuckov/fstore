import { FC, useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { IProduct } from "../types/types";
import CatalogCard from "../components/smart/catalog-card/CatalogCard";

interface CatalogProps {}

const Catalog: FC<CatalogProps> = ({}) => {
  const [products, setProducts] = useState<IProduct[]>([]);
  // const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>();

  async function fetchAllProducts() {
    const response = await fetch("http://localhost:80/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setProducts(data);
        console.log(data);
      });
  }
  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="lp:px-4 tb:px-3">
      <h1 className="text-4xl font-header-link">Каталог</h1>
      {products.length ? (
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
        <h2>Products not exists</h2>
      )}
    </div>
  );
};

export default Catalog;
