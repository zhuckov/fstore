import { FC, useState } from "react";
import { IEditableInputProps } from "../../../types/types";
import ProductTitle from "../product-title/ProductTitle";
import ProductInput from "../product-input/ProductInput";

const EditableHeading: FC<IEditableInputProps> = ({ initialValue }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [value, setValue] = useState(initialValue == null ? "Введите название товара" : initialValue);

  function setEdit(): void {
    setIsEdit(true);
  }
  function blurHandle(e: React.FocusEvent<HTMLInputElement>): void {
    setIsEdit(false);
    setValue(e.target.value);
  }
  return isEdit ? (
    <ProductInput classes="text-2xl mb-2" blurEvent={blurHandle} defaultValue={value} />
  ) : (
    <ProductTitle clickEvent={setEdit} title={value != null ? value.toString() : "Назание товара"} />
  );
};

export default EditableHeading;
