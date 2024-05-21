import { FC } from "react";
import { NavLink } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import HeaderLink from "../../../ui/header-link/HeaderLink";

interface IHeaderMenu {
  setMobileMenuOpen: (newState: boolean) => void;
}

const HeaderMenu: FC<IHeaderMenu> = ({ setMobileMenuOpen }) => {
  return (
    <div className="">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-4 ds:px-0" aria-label="Global">
        <Popover.Group className="lp:flex lp:gap-x-12 items-center">
          <div className="flex lp:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <img className="h-16 w-auto" src="/logo.svg" alt="" />
            </NavLink>
          </div>
          <HeaderLink link="/">Home</HeaderLink>
          <HeaderLink link="/catalog">Catalog</HeaderLink>
          <HeaderLink link="/cart">Cart</HeaderLink>
        </Popover.Group>
        <div className="flex lp:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lp:flex lp:flex-1 lp:items-center lp:gap-2 lp:justify-end">
          <HeaderLink link="/login">
            Log in
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1}
              stroke="currentColor"
              className="w-6 h-6 relative top-0.5"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
            </svg>
          </HeaderLink>
        </div>
      </nav>
    </div>
  );
};

export default HeaderMenu;
