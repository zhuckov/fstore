import { FC } from "react";
import EditableHeading from "../../ui/editable-heading/EditableHeading";
import PricingForm from "../pricing-form/PricingForm";
import { IProductFormProps } from "../../../types/types";

const ProductForm: FC<IProductFormProps> = ({ price, setPrice, sale, setIsSale, isSale, setSale, setProductName, productName }) => {
  return (
    <form className="flex w-full flex-col" action="#">
      <EditableHeading initialValue={productName} setProductName={setProductName} />
      <PricingForm
        productName={productName}
        setProductName={setProductName}
        price={price}
        sale={sale}
        setPrice={setPrice}
        isSale={isSale}
        setSale={setSale}
        setIsSale={setIsSale}
      />
      <div className="flex gap-4 items-center justify-between border-gray-400 mt-8 w-6/12 border-t-2 pt-4">
        <p className="text-lg w-6/12 text-gray-500 font-semibold">
          Итоговая цена:{" "}
          {Intl.NumberFormat("ru-RU", {
            currency: "RUB",
            style: "currency",
            maximumFractionDigits: 0,
          }).format(Math.round(price * (1 - sale / 100)))}
        </p>
        <button
          onClick={() => console.log("z")}
          type="button"
          className="m-w-40 focus:outline-none text-gray-100 text-sm bg-blue-700 hover:bg-blue-800 font-medium rounded-lg px-4 py-2"
        >
          Добавить товар
        </button>
      </div>
    </form>
  );
};

export default ProductForm;
