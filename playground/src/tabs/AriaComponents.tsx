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
          // State Management
          value={date}
          onChange={setDate}
          defaultValue={date}
          placeholderValue={date}
          // Help Text
          label="Label"
          message="Message"
          error="error"
          hideLabel
          // Status
          isRequired
          isInvalid
          isDisabled
          isReadOnly
          // Aria
          aria-describedby="afeaf"
          aria-details="afeafe"
          aria-label="afeafe"
          aria-labelledby="afeafea"
          // Component Specific
          shouldForceLeadingZeros
          granularity="day"
          isDateUnavailable={() => false}
          maxValue={date}
          minValue={date}
          hideTimeZone
          hourCycle={12}
          // Common
          id=""
          className="afeafea"
          key=""
          size="medium"
          name=""
          ref={() => {}}
          autoFocus
          // Events
          onBlur={() => {}}
          onFocus={() => {}}
          onKeyDown={() => {}}
          onFocusChange={() => {}}
          onKeyUp={() => {}}
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
