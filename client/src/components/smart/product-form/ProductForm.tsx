import { FC } from "react";
import EditableHeading from "../../ui/editable-heading/EditableHeading";
import PricingForm from "../pricing-form/PricingForm";
import { IProductFormProps } from "../../../types/types";

const ProductForm: FC<IProductFormProps> = ({}) => {
  return (
    <form className="flex w-full flex-col" action="#">
      <EditableHeading />
      <PricingForm />
      <button
        type="button"
        className="max-w-40 w-full mt-10 focus:outline-none text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900"
      >
        Добавить товар
      </button>
    </form>
  );
};

export default ProductForm;
