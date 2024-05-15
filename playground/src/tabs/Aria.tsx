import React, { useState } from "react";
import {
  Button,
  CheckBox,
  Chip,
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
  const chips = [
    { key: "news", text: "News" },
    { key: "travel", text: "Travel" },
    { key: "gaming", text: "Gaming" },
    { key: "shopping", text: "Shopping" },
  ];
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
        <Chip key="news">News</Chip>
        <Chip key="travel">Travel</Chip>
        <Chip key="gaming">Gaming</Chip>
        <Chip key="shopping">Shopping</Chip>
      </ChipGroup>

      <Chip
        onPress={() => console.log("hi")}
        onRemove={() => console.log("remove")}
        variant="warning"
      >
        Test Chip
      </Chip>
    </div>
  );
}
