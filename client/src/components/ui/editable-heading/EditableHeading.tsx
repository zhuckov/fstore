import { FC, useState } from "react";
import { IEditableInputProps } from "../../../types/types";
import ProductTitle from "../product-title/ProductTitle";

const EditableHeading: FC<IEditableInputProps> = ({ initialValue }) => {
  const [isEdit, setIsEdit] = useState(false);

  const [value, setValue] = useState(!initialValue ? "" : initialValue);

  function setEdit(): void {
    setIsEdit(true);
  }
  function blurHandle(e: React.FocusEvent<HTMLInputElement>): void {
    setIsEdit(false);
    setValue(e.target.value);
  }
  return isEdit ? (
    <input placeholder="Введите название продукта..." className="text-2xl mb-4" onBlur={blurHandle} defaultValue={value} />
  ) : (
    <ProductTitle clickEvent={setEdit} title={value != "" ? value.toString() : "Нажмите что бы добавить название товара"} />
  );
};

export default EditableHeading;
