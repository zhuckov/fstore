import { FC, useState } from "react";
import ProductForm from "../product-form/ProductForm";

const ProductCreatePage: FC = () => {
  const [price, setPrice] = useState<number>(0);
  const [sale, setSale] = useState<number>(0);
  const [isSale, setIsSale] = useState<boolean>(false);

  const [pictureLink, setPictureLink] = useState<string>("/cesar.jpg");

  const toggleSaleFlag = () => {
    setIsSale(!isSale);
  };
  const saleSetter = (percent: number | string) => {
    setSale(parseInt(percent.toString()));
  };
  const priceSetter = (newPrice: string | number) => {
    const parsedPrice = typeof newPrice === "string" ? parseInt(newPrice, 10) : newPrice;
    setPrice(parsedPrice);
  };
  return (
    <div className="pt-10 px-10 w-9/12">
      <p className="mb-10 text-3xl">Добавление товара</p>
      <div className="flex items-start gap-8 w-full">
        <div className="gallery">
          <img className="min-w-card-photo-xl h-card-photo-xl rounded-sm" src={pictureLink} alt="product photo" />
        </div>
        <ProductForm price={price} sale={sale} setPrice={priceSetter} isSale={isSale} setSale={saleSetter} setIsSale={toggleSaleFlag} />
      </div>
    </div>
  );
};

export default ProductCreatePage;
