import { useState } from "react";
import HeaderMenu from "../header-menu/HeaderMenu";
import Sidebar from "../sidebar/Sidebar";
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header>
      <HeaderMenu setMobileMenuOpen={setMobileMenuOpen} />
      <Sidebar mobileMenuOpen={mobileMenuOpen} setMobileMenuOpen={setMobileMenuOpen} />
    </header>
  );
}
