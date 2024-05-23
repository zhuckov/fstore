import { FC } from "react";
import { MenuIcon } from "../../ui/icons/menu/MenuIcon";
import SideLink from "../../ui/side-link/SideLink";
import { DashboardIcon } from "../../ui/icons/dashboard/DashboardIcon";
import { OrderIcon } from "../../ui/icons/orders/OrderIcon";
import { UsersIcon } from "../../ui/icons/user/UsersIcon";

const AdminSideMenu: FC = () => {
  return (
    <div className="mt-10">
      <p className="text-admin-menu-color opacity-50 text-base my-1">MENU</p>
      <div className="flex flex-col gap-1">
        <SideLink link="/admin-panel" linkText="Dashboard" Icon={DashboardIcon} />
        <SideLink link="/admin-manage-menu" linkText="Manage Menu" Icon={MenuIcon} />
      </div>
      <p className="text-admin-menu-color opacity-50 text-base my-1">OTHER</p>
      <div className="flex flex-col gap-1">
        <SideLink link="/admin-users" linkText="Users" Icon={UsersIcon} />
        <SideLink link="/admin-orders" linkText="Manage Orders" Icon={OrderIcon} />
      </div>
    </div>
  );
};

export default AdminSideMenu;
