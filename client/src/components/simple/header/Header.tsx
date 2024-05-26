import { useState } from "react";
import HeaderMenu from "../header-menu/HeaderMenu";
import Sidebar from "../sidebar/Sidebar";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="bg-white">
      <HeaderMenu setMobileMenuOpen={setMobileMenuOpen} />
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </header>
  );
}
