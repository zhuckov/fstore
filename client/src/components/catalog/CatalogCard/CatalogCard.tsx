import { IProduct } from "../../../core/types/types";

const CatalogCard = ({ productName, productPrice, productPhoto }: IProduct) => {
  return (
    <div className="card">
      <img className="object-cover" src={productPhoto} alt={productName} />
      <p className="text-3xl">{productName}</p>
      <p className="flex gap-3 text-xl">
        {Intl.NumberFormat("ru-RU", {
          style: "currency",
          currency: "RUB",
        }).format(productPrice)}
      </p>
    </div>
  );
};

export default CatalogCard;
