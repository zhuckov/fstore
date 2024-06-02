import { FC, useState } from "react";
import ProductTitle from "../product-title/ProductTitle";
import { IEditableHeading } from "../../../types/types";

const EditableHeading: FC<IEditableHeading> = ({ initialValue }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [value, setValue] = useState(!initialValue ? "" : initialValue);

  function setEdit(): void {
    setIsEdit(true);
  }
  function blurHandle(e: React.FocusEvent<HTMLInputElement>): void {
    setIsEdit(false);
    setValue(e.target.value);
  }
  return isEdit || !value ? (
    <input
      placeholder="Введите название продукта"
      className="text-xl mb-4 focus-visible:outline-none border-l-2 border-gray-300 pl-2"
      onBlur={blurHandle}
      defaultValue={value}
    />
  ) : (
    <ProductTitle clickEvent={setEdit} title={value} />
  );
};

export default EditableHeading;
