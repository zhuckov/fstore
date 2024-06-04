import { GridCatalogIcon } from "../../ui/icons/grid-catalog/GridCatalogIcon";
import { RowCatalogIcon } from "../../ui/icons/row-catalog/RowCatalogIcon";

const CatalogDisplaySwitcher = () => {
  return (
    <div className="flex items-center gap-1">
      <GridCatalogIcon />
      <RowCatalogIcon />
    </div>
  );
};

export default CatalogDisplaySwitcher;
