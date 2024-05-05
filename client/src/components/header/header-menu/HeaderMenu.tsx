import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import HeaderLink from "../header-link/HeaderLink";

interface IHeaderMenu {
  setMobileMenuOpen: (newState: boolean) => void;
}

const HeaderMenu: FC<IHeaderMenu> = ({ setMobileMenuOpen }) => {
  return (
    <div className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <Popover.Group className="lg:flex lg:gap-x-12 items-center">
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <img className="h-16 w-auto" src="/logo.svg" alt="" />
            </NavLink>
          </div>
          <HeaderLink link="/">Home</HeaderLink>
          <HeaderLink link="/catalog">Catalog</HeaderLink>
          <HeaderLink link="/cart">Cart</HeaderLink>
        </Popover.Group>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:items-center lg:gap-2 lg:justify-end">
          <HeaderLink link="/login">Log in</HeaderLink>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
          </svg>
        </div>
      </nav>
    </div>
  );
};

export default HeaderMenu;
