import { FC } from "react";
import EditableHeading from "../../ui/editable-heading/EditableHeading";

const ProductForm: FC = ({}) => {
  return (
    <form className="flex flex-col" action="#">
      <EditableHeading initialValue={"Паста вкусная"} />
      <input type="text" defaultValue={"Стоимость товара"} />
      <input type="text" defaultValue={"Фото товара товара"} />
      <button className="">Добавить товар</button>
    </form>
  );
};

export default ProductForm;
