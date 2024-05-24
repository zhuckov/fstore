import { FC } from "react";
import { IProductList } from "../../../types/types";

const ProductsListView: FC<IProductList> = ({ products }) => {
  return (
    <section className="flex flex-col  w-full">
      {products.map((product) => (
        <div className="bg-admin-side-bg flex w-auto px-6 py-4 items-center rounded-lg" key={product.id}>
          <div className="card-info flex items-center">
            <img className="w-20 h-20 rounded-lg mr-6" src={product.productPhoto} alt={product.productName} />
            <p className="text-4xl mr-10">{product.productName}</p>
            <p className="text-4xl">
              {Intl.NumberFormat("ru-RU", {
                style: "currency",
                currency: "RUB",
              }).format(product.productPrice)}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default ProductsListView;
