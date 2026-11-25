import React, { useState } from "react";
import {
  CheckBox,
  ChipGroup,
  ComboBox,
  ComboInput,
  CustomSelect,
  DateInput,
  DatePicker,
  ErrorMessage,
  FileInput,
  Input,
  Item,
  Key,
  Label,
  Loading,
  MaterialIcon,
  Message,
  MultiSelect,
  NumberInput,
  Radio,
  RadioGroup,
  SearchInput,
  Select,
  TextAreaInput,
  TextField,
  TextInput,
  TimeInput,
  ToggleSwitch,
} from "@atomicjolt/atomic-elements";
import { Demo, DemoGrid, DemoPage, Json } from "../components/Demo";

export default function Fields() {
  const [isDisabled, setIsDisabled] = useState(false);
  const [isRequired, setIsRequired] = useState(false);
  const [isReadOnly, setIsReadOnly] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [text, setText] = useState("");
  const [number, setNumber] = useState(0);
  const [toggle, setToggle] = useState(false);
  const [radio, setRadio] = useState("one");
  const [select, setSelect] = useState("one");
  const [selected, setSelected] = useState<Key | null>(null);
  const [multi, setMulti] = useState<Iterable<Key>>([]);
  const [file, setFile] = useState<File | null>(null);

  // Select and FileInput have no read-only state.
  const editable = { isDisabled, isRequired, isInvalid };
  const state = { ...editable, isReadOnly };
  const messages = { message: "Message", error: "Error" };

  return (
    <DemoPage>
      <div className="pg-toolbar">
        <CheckBox isSelected={isDisabled} onChange={setIsDisabled}>Disabled</CheckBox>
        <CheckBox isSelected={isRequired} onChange={setIsRequired}>Required</CheckBox>
        <CheckBox isSelected={isReadOnly} onChange={setIsReadOnly}>Read only</CheckBox>
        <CheckBox isSelected={isInvalid} onChange={setIsInvalid}>Invalid</CheckBox>
        <CheckBox isSelected={isLoading} onChange={setIsLoading}>Loading</CheckBox>
      </div>

      <Loading isLoading={isLoading}>
        <DemoGrid>
          <Demo title="TextInput">
            <TextInput label="Label" value={text} onChange={setText} {...messages} {...state} />
          </Demo>

          <Demo title="TextAreaInput">
            <TextAreaInput label="Label" value={text} onChange={setText} {...messages} {...state} />
          </Demo>

          <Demo title="SearchInput">
            <SearchInput
              label="Label"
              value={text}
              onChange={setText}
              onSubmit={(value) => console.log("search", value)}
              {...messages}
              {...state}
            />
          </Demo>

          <Demo title="TextField (composed)" description="Label, message, ComboInput and error placed by hand.">
            <TextField value={text} onChange={setText} {...state}>
              <Label>Label</Label>
              <Message>Message</Message>
              <ComboInput padding="both">
                <MaterialIcon icon="search" />
                <Input placeholder="placeholder" />
              </ComboInput>
              <ErrorMessage>Error</ErrorMessage>
            </TextField>
          </Demo>

          <Demo title="NumberInput">
            <NumberInput label="Label (max 10)" value={number} onChange={setNumber} maxValue={10} {...messages} {...state} />
          </Demo>

          <Demo title="CheckBox">
            <CheckBox {...messages} {...state}>CheckBox</CheckBox>
          </Demo>

          <Demo title="ToggleSwitch">
            <ToggleSwitch isSelected={toggle} onChange={setToggle} isDisabled={isDisabled}>
              ToggleSwitch
            </ToggleSwitch>
          </Demo>

          <Demo title="RadioGroup">
            <RadioGroup label="Label" value={radio} onChange={setRadio} {...messages} {...state}>
              <Radio value="one">One</Radio>
              <Radio value="two">Two</Radio>
              <Radio value="three">Three</Radio>
            </RadioGroup>
          </Demo>

          <Demo title="Select (native)">
            <Select label="Label" value={select} onChange={(value) => setSelect(String(value ?? ""))} {...messages} {...editable}>
              <option value="one">One</option>
              <option value="two">Two</option>
              <option value="three">Three</option>
            </Select>
          </Demo>

          <Demo title="CustomSelect">
            <CustomSelect
              label="Label"
              placeholder="Select an item"
              selectedKey={selected}
              onSelectionChange={setSelected}
              {...messages}
              {...state}
            >
              <Item id="one">One</Item>
              <Item id="two">Two</Item>
              <Item id="three">Three</Item>
            </CustomSelect>
          </Demo>

          <Demo title="ComboBox">
            <ComboBox label="Label" placeholder="Type to filter" {...messages} {...state}>
              <Item id="one">One</Item>
              <Item id="two">Two</Item>
              <Item id="three">Three</Item>
            </ComboBox>
          </Demo>

          <Demo title="MultiSelect">
            <MultiSelect
              label="Label"
              selectedKeys={multi}
              onSelectionChange={(keys) => setMulti(keys === "all" ? ["one", "two", "three"] : keys)}
              {...messages}
              {...state}
            >
              <Item id="one">One</Item>
              <Item id="two">Two</Item>
              <Item id="three">Three</Item>
            </MultiSelect>
          </Demo>

          <Demo title="ChipGroup">
            <ChipGroup
              label="Label"
              selectionMode="multiple"
              disabledKeys={["shopping"]}
              onRemove={(keys) => console.log("remove", keys)}
              {...messages}
              {...editable}
            >
              <Item id="news">News</Item>
              <Item id="travel">Travel</Item>
              <Item id="gaming">Gaming</Item>
              <Item id="shopping">Shopping</Item>
            </ChipGroup>
          </Demo>

          <Demo title="FileInput">
            <FileInput label="Choose a file…" file={file} onChange={setFile} {...messages} {...editable} />
          </Demo>

          <Demo title="DateInput">
            <DateInput label="Label" {...messages} {...state} />
          </Demo>

          <Demo title="DatePicker">
            <DatePicker label="Label" {...messages} {...state} />
          </Demo>

          <Demo title="TimeInput">
            <TimeInput label="Label" {...messages} {...state} />
          </Demo>

          <Demo title="Values">
            <Json value={{ text, number, toggle, radio, select, selected, multi: [...multi], file: file?.name }} />
          </Demo>
        </DemoGrid>
      </Loading>
    </DemoPage>
  );
}
