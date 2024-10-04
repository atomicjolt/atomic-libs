import React from "react";
import ReactDom from "react-dom/client";

import Playground from "./Playground";
import { DevelopmentErrorBoundary, Modal, SensibleDefaults } from "./elements";

const rootElement = document.getElementById("root");
const root = ReactDom.createRoot(rootElement!);

root.render(
  <React.StrictMode>
    <SensibleDefaults />
    {/* <DevelopmentErrorBoundary> */}
    <Playground />
    {/* </DevelopmentErrorBoundary> */}
  </React.StrictMode>
);
