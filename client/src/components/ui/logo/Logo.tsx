import { FC } from "react";
import { NavLink } from "react-router-dom";

const Logo: FC<LogoProps> = ({ pathToLogo }) => {
  return (
    <div className="logo">
      <NavLink to="/admin-panel" className="flex items-center gap-4 m-1.5 p-1.5">
        <img className="h-16 w-auto" src={pathToLogo} alt="" />
        <span className="text-2xl font-semibold">Pasta Hut</span>
      </NavLink>
    </div>
  );
};

export default Logo;
