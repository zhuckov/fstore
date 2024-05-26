import { FC } from "react";
import { IProductList } from "../../../types/types";

const ProductsListView: FC<IProductList> = ({ products }) => {
  return (
    <section className="flex flex-col gap-2 mt-4 w-full">
      {products.map((product) => (
        <div
          className="hover:bg-admin-side-bg  bg-card-not-active cursor-pointer flex w-auto px-6 py-4 items-center rounded-lg"
          key={product.id}
        >
          <div className="card-info flex items-center">
            <img className="w-14 h-14 rounded-lg mr-6" src={product.productPhoto} alt={product.productName} />
            <p className="text-2xl mr-10">{product.productName}</p>
            <p className="text-2xl">
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
