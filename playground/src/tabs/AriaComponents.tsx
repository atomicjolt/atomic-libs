import React, { useState } from "react";
import { DateInput, DatePicker } from "../elements";
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
      {/* <Calendar value={date} onChange={setDate} isInvalid /> */}
      <div>
        <DateInput
          value={date}
          onChange={setDate}
          label="Label"
          message="Message"
          errorMessage="error"
          isRequired
        />
      </div>
      <div>
        <DatePicker
          label="Label"
          value={date}
          onChange={setDate}
          size="medium"
        />
      </div>
    </div>
  );
}
