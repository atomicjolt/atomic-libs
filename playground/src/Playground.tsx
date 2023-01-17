import React, { useRef, useState } from "react";
import "./playground.scss";
import {
  Button,
  TextInput,
  IconButton,
  Tabs,
  IconMenu,
  ErrorModal,
  Popover,
  PopoverWrapper,
} from "./elements";
import FormTesting from "./tabs/FormTesting";
import Inputs from "./tabs/Inputs";
import Buttons from "./tabs/Buttons";
import Modals from "./tabs/Modals";

interface ToolTipProps {
  children: React.ReactNode;
  tip: React.ReactNode;
}

function ToolTip(props: ToolTipProps) {
  const { children, tip } = props;

  return (
    <PopoverWrapper className="aje-tip">
      {children}
      <Popover position="top">{tip}</Popover>
    </PopoverWrapper>
  );
}

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
        <div className="padder"></div>
        <div className="padder"></div>
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
