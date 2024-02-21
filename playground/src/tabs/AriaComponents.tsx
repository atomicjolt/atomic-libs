import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  CustomSelect,
  IconButton,
  IconMenu,
  Item,
  MaterialIcon,
  SearchInput,
  Section,
  Select,
  TimeInput,
  ToggleSwitch,
  ToolTip,
  CheckBox,
  RadioGroup,
  Radio,
} from "../elements";
import styled from "styled-components";
import { HasVariant } from "../../../src/types";
import { ButtonVariants } from "../../../src/components/Buttons/Buttons.types";
import classNames from "classnames";
import Checkbox from "../../../src/components/Inputs/Checkbox";

export default function AriaComponents() {
  const [selected, setSelected] = useState<any>(false);
  const [selectedRadio, setSelectedRadio] = useState<any>("v1");

  return (
    <div
      style={{
        padding: "16px",
      }}
    >
      <ToggleSwitch isSelected={selected} onChange={setSelected}>
        Label
      </ToggleSwitch>
      <Checkbox
        isSelected={selected}
        onChange={setSelected}
        message="Message"
        error="Error"
        isInvalid
        isRequired
      >
        Label
      </Checkbox>

      <RadioGroup label="Label" message="message" error="error">
        <Radio value="v1">Radio 1</Radio>
        <Radio value="v2">Radio 2</Radio>
        <Radio value="v3">Radio 3</Radio>
      </RadioGroup>
    </div>
  );
}
