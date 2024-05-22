import { FC } from "react";
import Logo from "../components/ui/logo/Logo";
import AdminSideMenu from "../components/simple/admin-sidemenu/AdminSideMenu";

const Admin: FC = () => {
  return (
    <div>
      <div className="w-2/12 h-screen side-menu bg-admin-side-bg pt-10 pl-10">
        <Logo pathToLogo="/logo.svg" />
        <AdminSideMenu />
      </div>
    </div>
  );
};

export default Admin;
