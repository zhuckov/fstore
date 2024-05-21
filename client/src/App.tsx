import { Route, Routes, useLocation } from "react-router-dom";
import { FC } from "react";
import Catalog from "./pages/Catalog";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
import Admin from "./pages/Admin";
import Header from "./components/simple/header/Header";

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
