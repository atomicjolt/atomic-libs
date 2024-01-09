import React, { useState } from "react";
import "./playground.scss";

import { Tabs } from "./elements";
import Inputs from "./tabs/Inputs";
import Buttons from "./tabs/Buttons";
import Modals from "./tabs/Modals";
import Scrollings from "./tabs/Scrollings";
import Dates from "./tabs/Dates";

function Playground() {
  const [currentTab, setCurrentTab] = useState("buttons");

  return (
    <div className="padder" style={{ height: "100%" }}>
      <Tabs currentTab={currentTab} onChange={setCurrentTab}>
        <Tabs.Navigation>
          <Tabs.Link to="inputs">Inputs</Tabs.Link>
          <Tabs.Link to="dates">Dates</Tabs.Link>
          <Tabs.Link to="buttons">Buttons</Tabs.Link>
          <Tabs.Link to="modal">Modals</Tabs.Link>
          <Tabs.Link to="scrolling">Scrolling</Tabs.Link>
        </Tabs.Navigation>
        <Tabs.Content>
          <Tabs.Tab name="inputs">
            <Inputs />
          </Tabs.Tab>
          <Tabs.Tab name="dates">
            <Dates />
          </Tabs.Tab>
          <Tabs.Tab name="buttons">
            <Buttons />
          </Tabs.Tab>
          <Tabs.Tab name="modal">
            <Modals />
          </Tabs.Tab>
          <Tabs.Tab name="scrolling">
            <Scrollings />
          </Tabs.Tab>
        </Tabs.Content>
      </Tabs>
    </div>
  );
}

export default Playground;