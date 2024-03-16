import React, { useState } from "react";
// import "./playground.scss";

import { Item, Tabs } from "./elements";
import Buttons from "./tabs/Buttons";
import Modals from "./tabs/Modals";
import Tables from "./tabs/Tables";
import Aria from "./tabs/Aria";

function Playground() {
  const [currentTab, setCurrentTab] = useState<React.Key>("tables");

  return (
    <div className="padder" style={{ height: "100%" }}>
      <Tabs selectedKey={currentTab} onSelectionChange={setCurrentTab}>
        <Item key="buttons" title="Buttons">
          <Buttons />
        </Item>
        <Item key="modal" title="Modals">
          <Modals />
        </Item>
        <Item key="tables" title="Tables">
          <Tables />
        </Item>
        <Item key="aria" title="Aria">
          <Aria />
        </Item>
      </Tabs>
    </div>
  );
}

export default Playground;
