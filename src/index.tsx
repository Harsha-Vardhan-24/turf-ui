import React from "react";
import ReactDOM from "react-dom/client";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.js";
import { BrowserRouter } from "react-router-dom";
import "aos/dist/aos.css";
import { Provider } from "react-redux";
import store from "./core/data/redux/store";
import "../src/style/scss/main.scss";
import "../src/style/css/feather.css";
import "./index.scss";
import "@fortawesome/fontawesome-free/css/fontawesome.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { base_path } from "./environment";
import Feature from "./router/Feature";

const rootElement = document.getElementById("root");
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <BrowserRouter basename={base_path}>
        <Feature />
      </BrowserRouter>
    </React.StrictMode>
  );
} else {
  console.error("Element with id 'root' not found.");
}
