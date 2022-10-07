import React, { useState } from "react";
import "./playground.scss";
import {
  Button,
  TextInput,
  IconButton,
  Tabs,
  NumberInput,
  RadioGroup,
  Radio,
  ToggleSwitch,
  CustomSelect,
  Option,
  IconMenu,
  ErrorModal,
  Popover,
  PopoverWrapper,
} from "./elements";
import FormTesting from "./FormTesting";

function Playground() {
  const [currentTab, setCurrentTab] = useState("buttons");
  const [radioValue, setRadioValue] = useState("opt1");
  const [toggleChecked, setToggleChecked] = useState(false);
  const [number, setNumber] = useState(0);
  const [selectValue, setSelectValue] = useState<string[] | null>(["val1"]);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="padder">
      <div className="scroll">
        <div className="content">
          <div className="wrapper">
            <PopoverWrapper>
              <p
                style={{
                  fontSize: "20px",
                  backgroundColor: "peru",

                  width: "200px",
                }}
              >
                Here's the Content
              </p>
              <Popover show position="top-left">
                <div
                  style={{
                    backgroundColor: "lightblue",
                    fontSize: "20px",
                    padding: "10px",
                  }}
                >
                  Hi
                </div>
              </Popover>
            </PopoverWrapper>
          </div>
        </div>
      </div>
      {/* <Tabs currentTab={currentTab} onChange={setCurrentTab}>
        <Tabs.Navigation>
          <Tabs.Link to="inputs">Inputs</Tabs.Link>
          <Tabs.Link to="buttons">Buttons</Tabs.Link>
          <Tabs.Link to="form">Form</Tabs.Link>
          <Tabs.Link to="modal">Modal</Tabs.Link>
        </Tabs.Navigation>
        <Tabs.Content>
          <Tabs.Tab name="inputs">
            <div className="padder">
              <TextInput label="Text Input" size="medium" />
            </div>
            <div className="padder">
              <NumberInput
                label="Number Input"
                max={10}
                value={number}
                onChange={setNumber}
              />
            </div>
            <div className="padder">
              <RadioGroup
                label="Radio Group Label"
                name="radiogroup"
                onChange={setRadioValue}
                value={radioValue}
              >
                <Radio value="opt1">Option 1</Radio>
                <Radio value="opt2">Option 2</Radio>
                <Radio value="opt3">Option 3</Radio>
              </RadioGroup>
            </div>
            <div className="padder">
              <ToggleSwitch
                label="Toggle Switch"
                checked={toggleChecked}
                onChange={setToggleChecked}
              />
            </div>
            <div className="padder">
              <CustomSelect
                label={"Custom Select"}
                value={selectValue}
                onChange={setSelectValue}
                searchable
              >
                <Option value="val1" searchKey="Value 1">
                  Value 1
                </Option>
                <Option value="val2" searchKey="Value 2">
                  Value 2
                </Option>
                <Option value="val3" searchKey="Value 3">
                  Value 3
                </Option>
              </CustomSelect>
            </div>
          </Tabs.Tab>
          <Tabs.Tab name="buttons">
            <div className="padder">
              <Button>Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="error">Error</Button>
              <Button variant="inverted">Inverted</Button>
            </div>
            <div className="padder">
              <IconButton icon="more_vert" ariaLabel="more" />
            </div>
            <div className="padder">
              <IconMenu icon="more_vert" label="more">
                <IconMenu.Item>Test</IconMenu.Item>
                <IconMenu.Item>Test</IconMenu.Item>
                <IconMenu.Item>Test</IconMenu.Item>
              </IconMenu>
            </div>
          </Tabs.Tab>
          <Tabs.Tab name="form">
            <FormTesting />
          </Tabs.Tab>
          <Tabs.Tab name="modal">
            <ErrorModal
              title="Title"
              open={modalOpen}
              centered
              onClose={() => setModalOpen(false)}
            >
              Here is some content
            </ErrorModal>
          </Tabs.Tab>
        </Tabs.Content>
      </Tabs> */}
    </div>
  );
}

export default Playground;
