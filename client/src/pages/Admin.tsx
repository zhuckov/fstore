import { FC } from "react";
import Logo from "../components/ui/logo/Logo";
import AdminSideMenu from "../components/ordinary/admin-sidemenu/AdminSideMenu";

const Admin: FC = () => {
  return (
    <div>
      <div className="w-2/12 h-screen side-menu bg-admin-side-bg pt-10 px-5">
        <Logo pathToLogo="/logo.svg" />
        <AdminSideMenu />
      </div>
    </div>
  );
};

export default Admin;
