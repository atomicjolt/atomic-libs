import React, { useState } from "react";
import {
  Calendar,
  DateInput,
  IconMenu,
  Item,
  Section,
  TextInput,
} from "../elements";
import { parseDate, now, getLocalTimeZone } from "@internationalized/date";

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
      {/* <Calendar value={date} onChange={setDate} isInvalid /> */}
      <div>
        <DateInput
          value={date}
          onChange={setDate}
          label="Label"
          message="Message"
          errorMessage="error"
          granularity="second"
        />
      </div>
      <div>
        <TextInput label="Label" message="Message" error="error" />
      </div>
    </div>
  );
}
