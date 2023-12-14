import React from "react";
import cn from "classnames";

import {
  EventHandler,
  InputComponentProps,
  InputElementProps,
} from "../../../../types";
import Calendar from "../Calendar";
import Popover from "../../../Utility/Popover";
import { DateLike } from "../Date.types";
import { StyledDatePicker } from "./DateInput.styles";
import TextInput from "../../TextInput";
import { useDateInput } from "../../../../hooks/useDateInput";

export interface DateInputProps
  extends InputElementProps<HTMLInputElement>,
    InputComponentProps {
  value?: DateLike | null;
  onChange?: EventHandler<DateLike | null, React.SyntheticEvent<Element>>;
}

/** Date Input Component. Accepts a `ref` */
const DateInput = React.forwardRef<HTMLInputElement, DateInputProps>(
  (props, ref) => {
    const {
      value,
      onChange,
      error,
      size = "medium",
      disabled = false,
      onFocus,
      onBlur,
      ...rest
    } = props;

    const { containerRef, input, calendar } = useDateInput({
      value: value || null,
      dateFormat: "MM/dd/yyy",
      onChange,
    });

    return (
      <StyledDatePicker
        className={cn("aje-input", "aje-input__date", `is-${size}`, {
          "has-error": error,
          "is-disabled": disabled,
        })}
        ref={containerRef}
      >
        <TextInput
          ref={ref}
          value={input.value}
          disabled={disabled}
          onChange={input.onChange}
          size={size}
          onFocus={(e) => {
            calendar.open();
            input.toggleEditing();
            onFocus && onFocus(e);
          }}
          onBlur={(e) => {
            input.toggleEditing();
            onBlur && onBlur(e);
          }}
          {...rest}
        />

        <Popover show={calendar.isOpen}>
          <Calendar
            date={calendar.value}
            onSelect={calendar.onSelect}
            size="small"
          />
        </Popover>
      </StyledDatePicker>
    );
  }
);

export default DateInput;
