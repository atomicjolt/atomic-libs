import React, { useState } from "react";
import "./playground.css";

import { Flex, Key, MaterialIcon, Tabs } from "@atomicjolt/atomic-elements";
import Buttons from "./tabs/Buttons";
import Modals from "./tabs/Modals";
import Tables from "./tabs/Tables";
import Aria from "./tabs/Aria";
import Localization from "./tabs/Localization";
import Overlays from "./tabs/Overlays";
import Fields from "./tabs/Fields";
import Loading from "./tabs/Loading";
import Links from "./tabs/Links";

export function MyTab(props: any) {
  return (
    <Tabs.Tab {...props}>
      {({ isSelected }) => (
        <Flex alignItems="center" justifyContent="space-between" gap={8}>
          {isSelected && <MaterialIcon icon="check" />}
          <span>{props.children}</span>
        </Flex>
      )}
    </Tabs.Tab>
  );
}

function Playground() {
  const [currentTab, setCurrentTab] = useState<Key>("buttons");

  return (
    <div className="padder" style={{ height: "100%" }}>
      <Tabs selectedKey={currentTab} onSelectionChange={setCurrentTab}>
        <Tabs.List>
          <MyTab id="buttons">Buttons</MyTab>
          <MyTab id="modal">Modals</MyTab>
          <MyTab id="tables">Tables</MyTab>
          <MyTab id="localization">Localization</MyTab>
          <MyTab id="overlays">Overlays</MyTab>
          <MyTab id="fields">Fields</MyTab>
          <MyTab id="loading">Loading</MyTab>
          <MyTab id="links">Links</MyTab>
          <MyTab id="aria">Aria</MyTab>
        </Tabs.List>

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
