import { FC, useState } from "react";
import { IEditableInputProps } from "../../../types/types";

const EditableInput: FC<IEditableInputProps> = ({ initialValue, placeholder }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(!initialValue ? "" : initialValue);

  function setEdit(): void {
    setIsEdit(!isEdit);
  }
  function blurHandle(e: React.FocusEvent<HTMLInputElement>): void {
    setIsEdit(false);
    setValue(e.target.value);
  }
  return isEdit ? (
    <input type="text" placeholder={placeholder} onBlur={blurHandle} className="text-xl focus-visible:border-none focus:border-none" />
  ) : (
    <p className="text-xl" onClick={() => setEdit()}>
      {value}
    </p>
  );
};

export default EditableInput;
