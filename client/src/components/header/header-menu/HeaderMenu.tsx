import { FC } from "react";
import HeaderLink from "../header-link/HeaderLink";

const HeaderMenu: FC = () => {
  return (
    <nav className="flex gap-3">
      <HeaderLink name="Home" link="/" />
      <HeaderLink name="Catalog" link="/catalog" />
      <HeaderLink name="Cart" link="/cart" />
    </nav>
  );
};

export default HeaderMenu;
