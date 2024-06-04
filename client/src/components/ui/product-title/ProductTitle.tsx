import { IProductTitleProps } from "../../../types/types";

const ProductTitle = ({ title, clickEvent }: IProductTitleProps) => {
  return (
    <h2 onClick={() => clickEvent()} className="text-xl mb-4">
      {title}
    </h2>
  );
};

export default ProductTitle;
