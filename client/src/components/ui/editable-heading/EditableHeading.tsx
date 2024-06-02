import { FC, useState } from "react";
import ProductTitle from "../product-title/ProductTitle";
import { IEditableHeading } from "../../../types/types";

const EditableHeading: FC<IEditableHeading> = ({ productName, setProductName }) => {
  const [isEdit, setIsEdit] = useState(false);

  function setEdit(): void {
    setIsEdit(true);
  }
  function blurHandle(e: React.FocusEvent<HTMLInputElement>): void {
    setIsEdit(false);
    setProductName(e.target.value);
  }
  return isEdit || !productName ? (
    <input
      placeholder="Введите название продукта"
      className="text-xl mb-4 focus-visible:outline-none border-l-2 border-gray-300 pl-2"
      onBlur={blurHandle}
      defaultValue={productName}
    />
  ) : (
    <ProductTitle clickEvent={setEdit} title={productName} />
  );
};

export default EditableHeading;
