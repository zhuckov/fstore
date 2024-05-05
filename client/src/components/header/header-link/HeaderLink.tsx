import { FC, ReactNode } from "react";
import { NavLink } from "react-router-dom";

interface IHeaderLink {
  link: string;
  children: ReactNode;
}

const HeaderLink: FC<IHeaderLink> = ({ link, children }) => {
  const notActiveClasses = "hidden lg:inline text-xl font-header-link  text-gray-900";
  const ActiveClasses = "hidden lg:inline text-xl gothic  text-gray-400";
  return (
    <NavLink to={link} className={({ isActive }) => (isActive ? ActiveClasses : notActiveClasses)}>
      {children}
    </NavLink>
  );
};

export default HeaderLink;
