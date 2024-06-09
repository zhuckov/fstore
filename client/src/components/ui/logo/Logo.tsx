import { NavLink } from "react-router-dom";
import { ILogoProps } from "../../../core/types/types";

const Logo = ({ pathToLogo }: ILogoProps) => {
  return (
    <div className="logo mb-6">
      <NavLink to="/" className="flex items-center gap-4">
        <img className="h-16 w-auto" src={pathToLogo} alt="" />
        <span className="text-2xl font-semibold">Pasta Hut</span>
      </NavLink>
    </div>
  );
};

export default Logo;
