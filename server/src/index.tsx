import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Modal from "../../src/components/Modals/Modal";

const rootElement = document.getElementById("root") as HTMLElement;

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
