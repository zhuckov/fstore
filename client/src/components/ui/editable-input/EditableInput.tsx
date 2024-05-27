import { FC, useState } from "react";
import { IEditableInputProps } from "../../../types/types";

const EditableInput: FC<IEditableInputProps> = ({ initialValue }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [value, setValue] = useState(initialValue);

  function setEdit(): void {
    setIsEdit(!isEdit);
  }

  return isEdit ? <p>{value}</p> : <p onClick={() => setEdit()}>Не редактируемое</p>;
};

export default EditableInput;
