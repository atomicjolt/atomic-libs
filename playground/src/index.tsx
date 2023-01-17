import React from "react";
import ReactDom from "react-dom/client";

import "../../src/defines/fonts.scss";
import "../../src/defines/variables.scss";
import "../../src/defines/globals.scss";
import Playground from "./Playground";
import { Modal } from "./elements";

const rootElement = document.getElementById("root");
Modal.init(rootElement as HTMLElement);
const root = ReactDom.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Playground />
  </React.StrictMode>
);
