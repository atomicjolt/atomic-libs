import React, { useState } from "react";
import {
  Button,
  CheckBox,
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
      <ToolTipTrigger delay={1500}>
        <Button>Hover Me</Button>
        <ToolTip placement="right">Test Content</ToolTip>
      </ToolTipTrigger>
      <br />
      <br />
      <ToolTipTrigger delay={1500}>
        <Button>Hover Me</Button>
        <ToolTip placement="right">Test Content</ToolTip>
      </ToolTipTrigger>
    </div>
  );
}
