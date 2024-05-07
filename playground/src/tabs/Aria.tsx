import React, { useState } from "react";
import {
  Button,
  CheckBox,
  ChipGroup,
  ComboBox,
  CustomSelect,
  DateInput,
  DatePicker,
  Item,
  MaterialIcon,
  NumberInput,
  SearchInput,
  TextAreaInput,
  TextInput,
  TimeInput,
  ToolTip,
  ToolTipTrigger,
} from "../elements";
import {
  FieldErrorMessage,
  FieldMessage,
  FieldInput,
  VirtualInput,
  FieldLabel,
  TextField,
} from "../../../src/components/Internal/Field";

export default function Aria() {
  return (
    <div>
      <ChipGroup
        onRemove={(key) => console.log(key)}
        label="Label"
        message="message"
        error="error"
        disabledKeys={["shopping"]}
        selectionMode="multiple"
      >
        <Item key="news">News</Item>
        <Item key="travel">Travel</Item>
        <Item key="gaming">Gaming</Item>
        <Item key="shopping">Shopping</Item>
      </ChipGroup>
    </div>
  );
}
