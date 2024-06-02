import { FC } from "react";
import { IProductList } from "../../../types/types";
import { removeProduct } from "../../../services/productService";

const ProductsListView: FC<IProductList> = ({ products }) => {
  return (
    <section className="flex flex-col gap-2 mt-4 w-full">
      {products &&
        products.map((product) => (
          <div
            className="hover:bg-admin-side-bg  bg-card-not-active cursor-pointer flex w-auto px-6 py-4 items-center rounded-lg"
            key={product.id}
          >
            <div className="card-info w-full flex items-center">
              <img className="w-20ч  h-20 rounded-lg mr-6" src={product.productPhoto} alt={product.productName} />
              <p className="text-2xl mr-10">{product.productName}</p>
              <p className="text-2xl">
                {Intl.NumberFormat("ru-RU", {
                  style: "currency",
                  currency: "RUB",
                }).format(product.productPrice)}
              </p>
              <div className="flex ml-auto items-center gap-2">
                <button className="text-blue-500 hover:underline" onClick={() => removeProduct(product.id)}>
                  remove
                </button>
                <button className="text-blue-500 py-2 hover:underline" onClick={() => console.log("Edit")}>
                  edit
                </button>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
};

export default ProductsListView;
