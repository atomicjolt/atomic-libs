import React from "react";
import ReactDOM from "react-dom/client";
import { ElementsProvider } from "@atomicjolt/atomic-elements";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ElementsProvider applyDefaultStyles>
      <App />
    </ElementsProvider>
  </React.StrictMode>
);
