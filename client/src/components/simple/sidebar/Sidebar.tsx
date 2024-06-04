import { Dialog } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "react-router-dom";

interface SidebarProps {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (newState: boolean) => void;
}

const Sidebar = ({ mobileMenuOpen, setMobileMenuOpen }: SidebarProps) => {
  return (
    <Dialog className="lp:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
      <div className="fixed inset-0 z-10" />
      <Dialog.Panel className="fixed inset-y-0 right-0 z-10 mb:w-full tb:w-7/12 overflow-y-auto bg-white px-6 py-6 tb:ring-1 tb:ring-gray-200">
        <div className="flex items-center justify-between">
          <NavLink to="/" className="-m-1.5 p-1.5">
            <img className="h-16 w-auto" src="/logo.svg" alt="PastaHut" />
          </NavLink>
          <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-700" onClick={() => setMobileMenuOpen(false)}>
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-500/10">
            <div className="space-y-2 py-6">
              <NavLink to="/" className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Home
              </NavLink>
              <NavLink
                to="/catalog"
                className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Catalog
              </NavLink>
              <NavLink
                to="/cart"
                className="-mx-3 block rounded-lg px-3 py-2 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50"
              >
                Cart
              </NavLink>
            </div>
            <div className="py-6">
              <NavLink to="#" className="-mx-3 block rounded-lg px-3 py-2.5 text-xl font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                Log in
              </NavLink>
            </div>
          </div>
        </div>
      </Dialog.Panel>
    </Dialog>
  );
};

export default Sidebar;
