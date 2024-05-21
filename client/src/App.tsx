import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/header/Header";
import { FC } from "react";
import Catalog from "./components/pages/Catalog";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";
import Admin from "./components/pages/Admin";

const App: FC = () => {
  const location = useLocation();
  const isAdmin = location.pathname == "/admin-panel";
  return (
    <div className={isAdmin ? "ds:w-auto" : "max-w-screen-ds mx-auto"}>
      {!isAdmin && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/admin-panel" element={<Admin />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
