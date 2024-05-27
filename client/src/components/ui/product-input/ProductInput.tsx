import { FC } from "react";
import { IProductInputProps } from "../../../types/types";

const ProductInput: FC<IProductInputProps> = ({ classes, blurEvent, defaultValue }) => {
  return <input type="text" className={classes} onBlur={(e) => blurEvent(e)} defaultValue={defaultValue} />;
};

export default ProductInput;
