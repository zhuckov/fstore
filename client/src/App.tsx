import { Route, Routes, useLocation } from "react-router-dom";
import { FC } from "react";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Admin from "./pages/Admin";
import Header from "./components/simple/header/Header";
import AdminCatalog from "./pages/admin-catalog/AdminCatalog";
import AdminSideMenu from "./components/ordinary/admin-sidemenu/AdminSideMenu";

const App: FC = () => {
  const location = useLocation();
  const isAdmin =
    location.pathname == "/admin-panel" ||
    location.pathname == "/admin-manage-menu" ||
    location.pathname == "/admin-orders" ||
    location.pathname == "/admin-users";
  return (
    <div className={isAdmin ? "flex w-12/12" : "max-w-screen-ds mx-auto"}>
      {!isAdmin && <Header />}
      {isAdmin && <AdminSideMenu />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/admin-manage-menu" element={<AdminCatalog />} />
        <Route path="/admin-panel" element={<Admin />} />
        <Route path="/admin-orders" element={<Admin />} />
        <Route path="/admin-users" element={<Admin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
