import React, { useState } from "react";
// import "./playground.scss";

import { Item, Tabs } from "./elements";
import Inputs from "./tabs/Inputs";
import Buttons from "./tabs/Buttons";
import Modals from "./tabs/Modals";
import Dates from "./tabs/Dates";
import AriaComponents from "./tabs/AriaComponents";

function Playground() {
  const [currentTab, setCurrentTab] = useState<React.Key>("modal");

  return (
    <div className="padder" style={{ height: "100%" }}>
      <Tabs selectedKey={currentTab} onSelectionChange={setCurrentTab}>
        <Item key="buttons" title="Buttons">
          <Buttons />
        </Item>
        <Item key="modal" title="Modals">
          <Modals />
        </Item>
        <Item key="aria" title="Aria">
          <AriaComponents />
        </Item>
      </Tabs>
    </div>
  );
}

export default Playground;
