import { FC, useState } from "react";
import { IEditableInputProps } from "../../../types/types";

const EditableInput: FC<IEditableInputProps> = ({ value, setValue, placeholder, valueValidator, postfix = "", emptyText }) => {
  const [isEdit, setIsEdit] = useState(false);

  function setEdit(): void {
    setIsEdit(!isEdit);
  }
  function blurHandle(e: React.FocusEvent<HTMLInputElement>): void {
    setIsEdit(false);
    if (e.target.value != "") {
      if (valueValidator && valueValidator(e.target.value.toString())) {
        setValue(parseInt(e.target.value));
      }
      if (!valueValidator) {
        setValue(parseInt(e.target.value));
      }
    }
  }
  return isEdit || !value ? (
    <input
      type="text"
      placeholder={placeholder}
      onBlur={blurHandle}
      className="text-lg focus-visible:outline-none w-6/12 border-l-2 border-gray-300 pl-2"
    />
  ) : (
    <p className="text-xl" onClick={() => setEdit()}>
      {value ? value + postfix : emptyText}
    </p>
  );
};

export default EditableInput;
