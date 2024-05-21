import { FC, useEffect } from "react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface CatalogProps {}

const Catalog: FC<CatalogProps> = ({}) => {
  const [products, setProducts] = useState<Product[]>([]);
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
              <img className="object-cover" src={product.productPhoto} alt={product.productName} />
              <p className="text-3xl">{product.productName}</p>
              <p className="flex gap-3 text-xl">
                {Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                }).format(product.productPrice)}
              </p>
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
