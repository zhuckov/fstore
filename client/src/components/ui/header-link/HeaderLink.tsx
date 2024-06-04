import { NavLink } from "react-router-dom";
import { IHeaderLink } from "../../../types/types";

const HeaderLink = ({ link, children }: IHeaderLink) => {
  const notActiveClasses = "hidden lp:inline-flex gap-2 lp:text-xl lp:items-center lp:text-gray-900 hover:text-gray-600";
  const ActiveClasses = "hidden lp:inline-flex gap-2 lp:text-xl lp:gothic lp:text-gray-400 lp:items-center";
  return (
    <NavLink to={link} className={({ isActive }) => (isActive ? ActiveClasses : notActiveClasses)}>
      {children}
    </NavLink>
  );
};

export default HeaderLink;
