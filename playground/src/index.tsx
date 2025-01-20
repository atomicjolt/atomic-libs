import React from "react";
import ReactDom from "react-dom/client";

import Playground from "./Playground";
import { ElementsProvider } from "../../packages/atomic-elements/src";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <ElementsProvider applyDefaultStyles>
      <Playground />
    </ElementsProvider>
  </React.StrictMode>
);
