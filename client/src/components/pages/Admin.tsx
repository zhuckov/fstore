import { FC } from "react";
import Logo from "../ui/logo/Logo";

const Admin: FC = () => {
  return (
    <div>
      <div className="w-2/12 h-screen side-menu bg-admin-side-bg pt-10 pl-10">
        <Logo pathToLogo="/logo.svg" />
      </div>
    </div>
  );
};

export default Admin;
