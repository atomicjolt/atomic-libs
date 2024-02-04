import React, { useState } from "react";
import {
  DateInput,
  DatePicker,
  Select,
  Option,
  ListBox,
  Item,
  Section,
  CustomSelect,
  TextInput,
  ComboBox,
} from "../elements";
import { now, getLocalTimeZone } from "@internationalized/date";

export default function AriaComponents() {
  const [key, setKey] = useState<React.Key>("1");

  return (
    <div
      style={{
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <CustomSelect label="label" onSelectionChange={setKey} selectedKey={key}>
        <Item key="1">Option 1</Item>
        <Item key="2">Option 2</Item>
        <Item key="3">Option 3</Item>
      </CustomSelect>
    </div>
  );
}
