import React, { useState } from "react";
import "./playground.scss";
import {
  Button,
  TextInput,
  IconButton,
  Tabs,
  IconMenu,
  ErrorModal,
} from "./elements";
import FormTesting from "./tabs/FormTesting";
import Inputs from "./tabs/Inputs";
import Buttons from "./tabs/Buttons";
import Modals from "./tabs/Modals";

function Playground() {
  const [currentTab, setCurrentTab] = useState("inputs");

  return (
    <div className="padder">
      <Tabs currentTab={currentTab} onChange={setCurrentTab}>
        <Tabs.Navigation>
          <Tabs.Link to="inputs">Inputs</Tabs.Link>
          <Tabs.Link to="buttons">Buttons</Tabs.Link>
          <Tabs.Link to="form">Form</Tabs.Link>
          <Tabs.Link to="modal">Modals</Tabs.Link>
        </Tabs.Navigation>
        <Tabs.Content>
          <Tabs.Tab name="inputs">
            <Inputs />
          </Tabs.Tab>
          <Tabs.Tab name="buttons">
            <Buttons />
          </Tabs.Tab>
          <Tabs.Tab name="form">
            <FormTesting />
          </Tabs.Tab>
          <Tabs.Tab name="modal">
            <Modals />
          </Tabs.Tab>
        </Tabs.Content>
      </Tabs>
    </div>
  );
}

export default Playground;
