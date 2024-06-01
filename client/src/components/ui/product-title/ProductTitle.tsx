import { FC } from "react";
import { IProductTitleProps } from "../../../types/types";

const ProductTitle: FC<IProductTitleProps> = ({ title, clickEvent }) => {
  return (
    <h2 onClick={() => clickEvent()} className="text-2xl mb-4">
      {title}
    </h2>
  );
};

export default ProductTitle;
