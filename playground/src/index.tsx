import React from "react";
import ReactDom from "react-dom/client";

import "../../src/defines/fonts.scss";
import "../../src/defines/variables.scss";
import "../../src/components/index.scss";
import Playground from "./Playground";

const root = ReactDom.createRoot(document.getElementById("root")!);

root.render(
  <React.StrictMode>
    <Playground />
  </React.StrictMode>
);
