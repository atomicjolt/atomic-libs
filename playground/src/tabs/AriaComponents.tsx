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
  Textarea,
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
      <br />
      <TextInput label="Name" message="Message" error="Error" isInvalid />
      <br />
      <Textarea
        label="Name"
        message="Message"
        error="Error"
        canResize
        size="medium"
      />
    </div>
  );
}
