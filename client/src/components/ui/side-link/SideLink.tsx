import { FC } from "react";
import { ISideLink } from "../../../types/types";
import { NavLink } from "react-router-dom";

const SideLink: FC<ISideLink> = ({ Icon, link, linkText }) => {
  return (
    <NavLink to={link} className="flex items-center gap-4">
      {Icon}
      <span className="text-admin-menu-color opacity-50 text-base font-semibold">{linkText}</span>
    </NavLink>
  );
};

export default SideLink;
