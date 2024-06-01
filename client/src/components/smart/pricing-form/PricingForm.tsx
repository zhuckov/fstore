import EditableInput from "../../ui/editable-input/EditableInput";
import { FC } from "react";

const PricingForm: FC = ({}) => {
  return (
    <div className="pricing-block flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <p className="text-xl">Цена со скидкой:</p>
        <EditableInput initialValue={"100"} placeholder="Введите цену..." />
      </div>
      <div className="flex  items-center gap-8">
        <p className="text-xl">Есть скидка на товар?</p>
        <input type="checkbox" />
      </div>
      <div className="flex gap-4">
        <p className="text-xl">Цена без скидки:</p>
        <EditableInput placeholder="Введите цену..." initialValue={"0"} />
      </div>
    </div>
  );
};

export default PricingForm;
