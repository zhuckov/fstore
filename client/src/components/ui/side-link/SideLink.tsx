import { FC } from "react";

import { NavLink } from "react-router-dom";
import { ISideLink } from "../../../types/types";

const SideLink: FC<ISideLink> = ({ Icon, link, linkText }) => {
  return (
    <NavLink to={link} className={({ isActive }) => `flex items-center gap-4 pl-3 py-3 rounded-xl ${isActive ? "bg-admin-active-bg" : ""}`}>
      {({ isActive }) => (
        <>
          <Icon isActive={isActive} />
          <span className={`text-base font-semibold ${isActive ? "text-admin-active-link" : "text-admin-menu-color opacity-50"}`}>
            {linkText}
          </span>
        </>
      )}
    </NavLink>
  );
};

export default SideLink;
