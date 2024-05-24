import React, { useState } from "react";
// import "./playground.scss";

import { Item, Tabs } from "./elements";
import Buttons from "./tabs/Buttons";
import Modals from "./tabs/Modals";
import Tables from "./tabs/Tables";
import Aria from "./tabs/Aria";
import Localization from "./tabs/Localization";
import Overlays from "./tabs/Overlays";
import Fields from "./tabs/Fields";

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
        <Item key="localization" title="Localization">
          <Localization />
        </Item>
        <Item key="overlays" title="Overlays">
          <Overlays />
        </Item>
        <Item key="fields" title="Fields">
          <Fields />
        </Item>

        <Item key="aria" title="Aria">
          <Aria />
        </Item>
      </Tabs>
    </div>
  );
}

export default Playground;
