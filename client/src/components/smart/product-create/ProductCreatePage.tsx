import { FC, useState } from "react";
import ProductForm from "../product-form/ProductForm";
import { createNewProduct } from "../../../services/productService";

const ProductCreatePage: FC = () => {
  const [price, setPrice] = useState<number>(0);
  const [sale, setSale] = useState<number>(0);
  const [isSale, setIsSale] = useState<boolean>(true);
  const [productName, setProductName] = useState<string>("");
  const [pictureLink, setPictureLink] = useState<string>("/cesar.jpg");
  const submitHandler = () => {
    if (price != 0 && pictureLink != "" && productName != "") {
      const newProduct = {
        productName: productName,
        productPrice: price,
        productPhoto: pictureLink,
      };
      createNewProduct(newProduct);
    }
  };

  const nameSetter = (newName: string) => {
    setProductName(newName);
  };

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
        <ProductForm
          submitCreateProduct={submitHandler}
          setProductName={nameSetter}
          price={price}
          sale={sale}
          productName={productName}
          setPrice={priceSetter}
          isSale={isSale}
          setSale={saleSetter}
          setIsSale={toggleSaleFlag}
        />
      </div>
    </div>
  );
};

export default ProductCreatePage;
