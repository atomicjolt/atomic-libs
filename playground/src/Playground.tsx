import React, { useState } from "react";
// import "./playground.scss";

import { Key, Tabs, Item } from "./elements";
import Buttons from "./tabs/Buttons";
import Modals from "./tabs/Modals";
import Tables from "./tabs/Tables";
import Aria from "./tabs/Aria";
import Localization from "./tabs/Localization";
import Overlays from "./tabs/Overlays";
import Fields from "./tabs/Fields";
import Loading from "./tabs/Loading";
import Links from "./tabs/Links";

function Playground() {
  const [currentTab, setCurrentTab] = useState<Key>("aria");
  console.log(currentTab);

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
        <Item key="loading" title="Loading">
          <Loading />
        </Item>
        <Item key="links" title="Links">
          <Links />
        </Item>
        <Tabs.Tab title="Other content">other content</Tabs.Tab>
        <Tabs.Tab id="aria" title="Aria">
          <Aria />
        </Tabs.Tab>
      </Tabs>
    </div>
  );
}

export default Playground;
