import { FC } from "react";
import { data } from "../../products.data";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/css";

interface CatalogProps {}

const Catalog: FC<CatalogProps> = ({}) => {
  return (
    <div className="lp:px-4 tb:px-3">
      <h1 className="text-4xl font-header-link">Каталог</h1>
      {/* <section className="mt-6 grid ds:grid-cols-4 ds:gap-x-2 ds:gap-y-6 lp:grid-cols-3 lp:gap-x-2 lp:gap-y-6 tb:grid-cols-2 tb:gap-x-2 tb:gap-y-6 mb:grid-cols-1 mb:gap-y-6">

      </section> */}
      {data.length ? (
        <Swiper spaceBetween={20} slidesPerView={4} autoplay={true} loop={true}>
          {data.map((product) => (
            <SwiperSlide key={product.productId} className="flex flex-col ds:gap-2">
              <img className="object-cover" src={product.productImage} alt={product.productName} />
              <p className="text-3xl">{product.productName}</p>
              <p className="flex gap-3 text-xl">
                {Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                }).format(product.productNewPrice)}
                {product.productOldPrice != 0 ? (
                  <span className="text-gray-400 text-xl line-through">
                    {Intl.NumberFormat("ru-RU", {
                      style: "currency",
                      currency: "RUB",
                    }).format(product.productOldPrice)}
                  </span>
                ) : (
                  ""
                )}
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
