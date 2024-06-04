import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import CatalogCard from "../components/simple/catalog-card/CatalogCard";
import { Autoplay } from "swiper/modules";
import { useProducts } from "../hooks/hooks";

const Catalog = () => {
  const { products, productStatus, error } = useProducts();

  return (
    <div className="lp:px-4 tb:px-3">
      <h1 className="text-4xl font-header-link mb-4">Каталог</h1>
      {productStatus === "loading" && <p>Загрузка</p>}
      {error && <p>{error}</p>}
      {products ? (
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
