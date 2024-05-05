import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface IHeaderLink {
  link: string;
  children: ReactNode;
}

const HeaderLink: FC<IHeaderLink> = ({ link, children }) => {
  const notActiveClasses = "hidden lp:inline-flex gap-2 lp:text-xl lp:items-center lp:text-gray-900 hover:text-gray-600";
  const ActiveClasses = "hidden lp:inline-flex gap-2 lp:text-xl lp:gothic lp:text-gray-400 lp:items-center";
  return (
    <NavLink to={link} className={({ isActive }) => (isActive ? ActiveClasses : notActiveClasses)}>
      {children}
    </NavLink>
  );
};

export default HeaderLink;
