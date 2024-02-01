import React, { useState } from "react";
import {
  Calendar,
  DateInput,
  IconMenu,
  Item,
  Section,
  TextInput,
  Button,
  Popover,
  IconButton,
} from "../elements";
import { parseDate, now, getLocalTimeZone } from "@internationalized/date";

import { useDatePicker } from "react-aria";
import { useDatePickerState } from "react-stately";

// Reuse the DateField, Popover, Dialog, Calendar, and Button from your component library.

function DatePicker(props) {
  let state = useDatePickerState(props);
  let ref = React.useRef(null);
  let {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref);

  return (
    <div style={{ display: "inline-flex", flexDirection: "column" }}>
      <div
        {...groupProps}
        ref={ref}
        style={{ display: "flex", alignItems: "end" }}
      >
        <DateInput
          {...fieldProps}
          label={props.label}
          errorMessage={props.errorMessage}
          isDisabled={props.isDisabled}
          isRequired={props.isRequired}
          hideLabel={props.hideLabel}
          size={props.size}
          message={props.message}
          hideTimeZone={props.hideTimeZone}
        />
        <IconButton icon="calendar_month" variant="content" {...buttonProps} />
      </div>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          {/* <Dialog {...dialogProps}> */}
          <div
            style={{
              border: "1px solid black",
              borderRadius: "5px",
              boxShadow: "0 5px 10px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Calendar {...calendarProps} size="small" />
          </div>
          {/* </Dialog> */}
        </Popover>
      )}
    </div>
  );
}

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
        />
      </div>
      <div>
        <TextInput label="Label" message="Message" error="error" />
      </div>
      <div>
        <DatePicker label="Label" value={date} onChange={setDate} />
      </div>
    </div>
  );
}
