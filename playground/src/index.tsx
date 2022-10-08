import React from "react";
import ReactDom from "react-dom/client";

import "../../src/defines/fonts.scss";
import "../../src/defines/variables.scss";
import "../../src/components/index.scss";
import Playground from "./Playground";
import { Modal } from "./elements";

const rootElement = document.getElementById("root");
Modal.init(rootElement!);
const root = ReactDom.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <Playground />
  </React.StrictMode>
);
