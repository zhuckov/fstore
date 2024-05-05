import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import { FC } from "react";
import Catalog from "./components/pages/Catalog";
import Home from "./components/pages/Home";
import ErrorPage from "./components/pages/ErrorPage";

const App: FC = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default App;
