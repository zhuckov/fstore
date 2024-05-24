import { ICatalogDisplaySwitcher } from "@/types/types";
import { FC } from "react";
import { GridCatalogIcon } from "../icons/grid-catalog/GridCatalogIcon";
import { RowCatalogIcon } from "../icons/row-catalog/RowCatalogIcon";

const CatalogDisplaySwitcher: FC<ICatalogDisplaySwitcher> = ({}) => {
  return (
    <div className="flex">
      <GridCatalogIcon />
      <RowCatalogIcon />
    </div>
  );
};

export default CatalogDisplaySwitcher;
