import { FC } from "react";
import { MenuIcon } from "../../ui/icons/menu/MenuIcon";
import SideLink from "../../ui/side-link/SideLink";
import { DashboardIcon } from "../../ui/icons/dashboard/DashboardIcon";
import { OrderIcon } from "../../ui/icons/orders/OrderIcon";
import { UsersIcon } from "../../ui/icons/user/UsersIcon";
import Logo from "../../ui/logo/Logo";

const AdminSideMenu: FC = () => {
  return (
    <div className="w-3/12 min-h-screen side-menu bg-admin-side-bg pt-0 px-5">
      <div className="mt-8">
        <Logo pathToLogo="/logo.svg" />
        <p className="text-admin-menu-color opacity-50 text-base mb-2">MENU</p>
        <div className="flex flex-col gap-1">
          <SideLink link="/admin-panel" linkText="Dashboard" Icon={DashboardIcon} />
          <SideLink link="/admin-manage-menu" linkText="Manage Menu" Icon={MenuIcon} />
        </div>
        <p className="text-admin-menu-color opacity-50 text-base mt-2">OTHER</p>
        <div className="flex flex-col gap-1">
          <SideLink link="/admin-users" linkText="Users" Icon={UsersIcon} />
          <SideLink link="/admin-orders" linkText="Manage Orders" Icon={OrderIcon} />
        </div>
      </div>
    </div>
  );
};

export default AdminSideMenu;
