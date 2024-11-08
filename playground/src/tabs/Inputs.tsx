import React, { useState } from "react";
import {
  ComboBox,
  CustomSelect,
  Item,
  Key,
  MaterialIcon,
  NumberInput,
  Radio,
  RadioGroup,
  TextInput,
  ToggleSwitch,
} from "@atomicjolt/atomic-elements";

export default function Inputs() {
  const [radioValue, setRadioValue] = useState("opt1");
  const [toggleChecked, setToggleChecked] = useState(false);
  const [number, setNumber] = useState(0);
  const [selectValue, setSelectValue] = useState<Key | null>(null);
  const [comboxValue, setComboboxValue] = useState<Key | null>(null);

  return (
    <>
      <div className="padder">
        <TextInput label="Text Input" size="medium" />
      </div>
      <div className="padder">
        <ComboBox
          label="Combobox"
          selectedKey={comboxValue}
          onSelectionChange={setComboboxValue}
        >
          <Item id="Item 1">Item 1</Item>
          <Item id="Item 2">Item 2</Item>
          <Item id="Third Thing">Third Thing</Item>
        </ComboBox>
      </div>
      <div className="padder">
        <NumberInput
          label="Number Input"
          maxValue={10}
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
          <Radio value="opt1">Item 1</Radio>
          <Radio value="opt2">Item 2</Radio>
          <Radio value="opt3">Item 3</Radio>
        </RadioGroup>
      </div>
      <div className="padder">
        <ToggleSwitch isSelected={toggleChecked} onChange={setToggleChecked}>
          Toggle Switch
        </ToggleSwitch>
      </div>
      <div className="padder">
        <CustomSelect
          label="Custom Select"
          selectedKey={selectValue}
          onSelectionChange={setSelectValue}
        >
          <Item id="val1">
            <MaterialIcon icon="add" />
            Add
          </Item>
          <Item id="val2">
            <MaterialIcon icon="delete" />
            Remove
          </Item>
          <Item id="val3">
            <MaterialIcon icon="circle" />
            No Change
          </Item>
        </CustomSelect>
      </div>
    </>
  );
}
