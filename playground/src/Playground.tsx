import React, { useState } from "react";
import "./playground.css";

import { Key, Tabs } from "@atomicjolt/atomic-elements";
import Buttons from "./tabs/Buttons";
import Modals from "./tabs/Modals";
import Tables from "./tabs/Tables";
import Aria from "./tabs/Aria";
import Localization from "./tabs/Localization";
import Overlays from "./tabs/Overlays";
import Fields from "./tabs/Fields";
import Loading from "./tabs/Loading";
import Links from "./tabs/Links";
import { Home } from "./tabs/Home";

function Playground() {
  const [currentTab, setCurrentTab] = useState<Key>("aria");

  return (
    <div className="padder" style={{ height: "100%" }}>
      <Tabs selectedKey={currentTab} onSelectionChange={setCurrentTab}>
        <Tabs.List>
          <Tabs.Tab id="home">Home</Tabs.Tab>
          <Tabs.Tab id="buttons">Buttons</Tabs.Tab>
          <Tabs.Tab id="modal">Modals</Tabs.Tab>
          <Tabs.Tab id="tables">Tables</Tabs.Tab>
          <Tabs.Tab id="localization">Localization</Tabs.Tab>
          <Tabs.Tab id="overlays">Overlays</Tabs.Tab>
          <Tabs.Tab id="fields">Fields</Tabs.Tab>
          <Tabs.Tab id="loading">Loading</Tabs.Tab>
          <Tabs.Tab id="links">Links</Tabs.Tab>
          <Tabs.Tab id="aria">Aria</Tabs.Tab>
        </Tabs.List>

        <Tabs.Panel id="home">
          <Home />
        </Tabs.Panel>

        <Tabs.Panel id="buttons">
          <Buttons />
        </Tabs.Panel>

        <Tabs.Panel id="modal">
          <Modals />
        </Tabs.Panel>

        <Tabs.Panel id="tables">
          <Tables />
        </Tabs.Panel>

        <Tabs.Panel id="localization">
          <Localization />
        </Tabs.Panel>

        <Tabs.Panel id="overlays">
          <Overlays />
        </Tabs.Panel>

        <Tabs.Panel id="fields">
          <Fields />
        </Tabs.Panel>

        <Tabs.Panel id="loading">
          <Loading />
        </Tabs.Panel>

        <Tabs.Panel id="links">
          <Links />
        </Tabs.Panel>

        <Tabs.Panel id="aria">
          <Aria />
        </Tabs.Panel>
      </Tabs>
    </div>
  );
}

export default Playground;
