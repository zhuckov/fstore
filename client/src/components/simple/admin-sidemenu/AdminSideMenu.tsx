import { FC } from "react";
import { MenuIcon } from "../../ui/icons/menu/MenuIcon";
import SideLink from "../../ui/side-link/SideLink";

const AdminSideMenu: FC = () => {
  return (
    <div className="mt-10">
      <p className="text-admin-menu-color opacity-50 text-base">MENU</p>

      <SideLink link="/catalog" linkText="Catalog" Icon={<MenuIcon iconColor="#A6ABC8" />} />
    </div>
  );
};

export default AdminSideMenu;
