import { FC } from "react";
import { MenuIcon } from "../../ui/icons/menu/MenuIcon";
import SideLink from "../../ui/side-link/SideLink";
import { DashboardIcon } from "../../ui/icons/dashboard/DashboardIcon";

const AdminSideMenu: FC = () => {
  return (
    <div className="mt-10">
      <p className="text-admin-menu-color opacity-50 text-base mb-3">MENU</p>
      <SideLink link="/admin-panel" linkText="Dashboard" Icon={MenuIcon} />
      <SideLink link="/" linkText="Manage Menu" Icon={DashboardIcon} />
    </div>
  );
};

export default AdminSideMenu;
