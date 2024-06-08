import { Route, Routes, useLocation } from "react-router-dom";
import Catalog from "./pages/Catalog/Catalog";
import Home from "./pages/HomePage/Home";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import AdminCatalog from "./pages/AdminCatalog/AdminCatalog";
import AdminSideMenu from "./components/layout/admin-sidemenu/AdminSideMenu";
import ProductCreatePage from "./pages/СreateProductPage/ProductCreatePage";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./components/layout/header/Header";

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
        <Route path="/admin/panel" element={<Dashboard />} />
        <Route path="/admin/orders" element={<Dashboard />} />
        <Route path="/admin/users" element={<Dashboard />} />
        <Route path="/admin/create-product" element={<ProductCreatePage />} />
        <Route path="/admin/edit-product/:id" element={<ProductCreatePage />} />
        <Route path="/admin/manage-menu" element={<AdminCatalog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
