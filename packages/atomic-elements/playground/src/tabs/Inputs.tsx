import React, { useState } from "react";
import {
  ComboBox,
  CustomSelect,
  MaterialIcon,
  NumberInput,
  Option,
  Radio,
  RadioGroup,
  TextInput,
  ToggleSwitch,
} from "../elements";

export default function Inputs() {
  const [radioValue, setRadioValue] = useState("opt1");
  const [toggleChecked, setToggleChecked] = useState(false);
  const [number, setNumber] = useState(0);
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const [comboxValue, setComboboxValue] = useState<string | undefined>("");

  return (
    <>
      <div className="padder">
        <TextInput label="Text Input" size="medium" />
      </div>
      <div className="padder">
        <ComboBox
          options={["Option 1", "Option 2", "Third Thing"]}
          label="Combobox"
          value={comboxValue}
          onChange={setComboboxValue}
        />
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
          label="Custom Select"
          value={selectValue}
          onChange={setSelectValue}
          searchable
        >
          <Option value="val1" searchKey="Add">
            <MaterialIcon icon="add" />
            Add
          </Option>
          <Option value="val2" searchKey="Remove">
            <MaterialIcon icon="delete" />
            Remove
          </Option>
          <Option value="val3" searchKey="No Change">
            <MaterialIcon icon="circle" />
            No Change
          </Option>
        </CustomSelect>
      </div>
    </>
  );
}
