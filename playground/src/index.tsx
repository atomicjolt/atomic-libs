import React from "react";
import ReactDom from "react-dom/client";
import { ElementsProvider } from "@atomicjolt/atomic-elements";

import { App } from "./App";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <ElementsProvider applyDefaultStyles>
      <App />
    </ElementsProvider>
  </React.StrictMode>
);
