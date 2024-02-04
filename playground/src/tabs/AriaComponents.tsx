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
} from "../elements";
import { now, getLocalTimeZone } from "@internationalized/date";

export default function AriaComponents() {
  const [date, setDate] = useState(now(getLocalTimeZone()));

  return (
    <div
      style={{
        // display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
      }}
    >
      <div>
        {/* <Select label="Select" message="Message" error="error">
          <Option value="1">Option 1</Option>
          <Option value="2">Option 2</Option>
          <Option value="3">Option 3</Option>
        </Select> */}
        {/* <ListBox label="Label" selectionMode="multiple" size="auto">
          <Item key={1}>Option 1</Item>
          <Item key={2}>Option 2</Item>
          <Item key={3}>Option 3</Item>
          <Section title="Section Title">
            <Item key={4}>Option 4</Item>
            <Item key={5}>Option 5</Item>
          </Section>
        </ListBox> */}
      </div>
      <br />
      <br />
      <br />
      <div>
        <CustomSelect label="Select Component" size="medium" variant="floating">
          <Item key={1} textValue="Blah">
            Option 1
          </Item>
          <Item key={2}>Option 2</Item>
          <Item key={3}>Option 3</Item>
          <Section title="Section Title">
            <Item key={4}>Option 4</Item>
            <Item key={5}>Option 5 afeafe afienafien aifneaifneain</Item>
          </Section>
        </CustomSelect>
      </div>
    </div>
  );
}
