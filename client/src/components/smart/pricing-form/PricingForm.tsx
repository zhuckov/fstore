import { IProductFormProps } from "../../../types/types";
import EditableInput from "../../ui/editable-input/EditableInput";
import { FC } from "react";

const PricingForm: FC<IProductFormProps> = ({ price, setPrice, sale, setIsSale, isSale, setSale, productName }) => {
  const toggleChecked = () => {
    if (isSale) {
      setSale(0);
    }
    setIsSale();
  };

  const percentValidator = (percent: number | string): boolean => {
    const num = typeof percent === "string" ? parseFloat(percent) : percent;
    return num > 1 && num < 100;
  };

  return (
    <div className="pricing-block flex flex-col gap-6">
      <div className="flex items-center gap-4">
        <p className="text-lg font-semibold">Скидка на товар?</p>
        <input className="relative top-0.5" checked={isSale} onChange={toggleChecked} type="checkbox" />
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-lg font-semibold">Цена:</p>
        <EditableInput setValue={setPrice} value={price} placeholder="Введите цену" />
      </div>
      {isSale ? (
        <div className="flex flex-col gap-2">
          <p className="text-lg font-semibold">Скидка:</p>
          <EditableInput
            valueValidator={percentValidator}
            postfix="%"
            value={sale}
            setValue={setSale}
            placeholder="Введите скидку в процентах"
          />
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default PricingForm;
