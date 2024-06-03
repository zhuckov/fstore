import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./tailwind.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/products-store/productStore";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>
);
