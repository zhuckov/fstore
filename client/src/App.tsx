import { Route, Routes, useLocation } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Admin from "./pages/Admin";
import Header from "./components/simple/header/Header";
import AdminCatalog from "./pages/admin-catalog/AdminCatalog";
import AdminSideMenu from "./components/simple/admin-sidemenu/AdminSideMenu";
import ProductCreatePage from "./components/smart/product-create/ProductCreatePage";

const App = () => {
  const location = useLocation();
  const adminPaths = [
    "/admin/panel",
    "/admin/manage-menu",
    "/admin/orders",
    "/admin/create-product",
    "/admin/users",
    "/admin/edit-product/:id",
  ];
  const editProductPathRegex = /^\/admin\/edit-product\/[^/]+$/;
  const isAdmin = adminPaths.includes(location.pathname) || editProductPathRegex.test(location.pathname);
  return (
    <div className={isAdmin ? "flex w-12/12" : "max-w-screen-ds mx-auto"}>
      {!isAdmin && <Header />}
      {isAdmin && <AdminSideMenu />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/admin/panel" element={<Admin />} />
        <Route path="/admin/orders" element={<Admin />} />
        <Route path="/admin/users" element={<Admin />} />
        <Route path="/admin/create-product" element={<ProductCreatePage />} />
        <Route path="/admin/edit-product/:id" element={<ProductCreatePage />} />
        <Route path="/admin/manage-menu" element={<AdminCatalog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
