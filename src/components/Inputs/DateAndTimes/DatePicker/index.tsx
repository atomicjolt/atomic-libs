import React, { useRef } from "react";
import {
  Calendar,
  DateInput,
  Popover,
  IconButton,
  Dialog,
  Label,
} from "../../../";
import { useDatePicker, AriaDatePickerProps, DateValue } from "react-aria";
import { useDatePickerState } from "react-stately";
import { LimitedSizes, AriaProps, FieldBaseProps } from "../../../../types";
import {
  CalendarWrapper,
  DatePickerInputWrapper,
  DatePickerWrapper,
} from "./DatePicker.styles";
import { FieldError } from "../../../../styles/utils";
import classNames from "classnames";

export type DatePickerProps<T extends DateValue> = AriaProps<
  AriaDatePickerProps<T>
> &
  FieldBaseProps;

/** DatePicker is a combination of a `<DateInput/>` component and a dropdown `<Calendar />` component. */
export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  let state = useDatePickerState(props);
  let ref = useRef(null);
  let {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
  } = useDatePicker(props, state, ref);

  const {
    size = "medium",
    error,
    className,
    isDisabled,
    isRequired,
    isReadOnly,
    isInvalid,
    label,
    message,
    hideLabel,
  } = props;

  const calendarSize: LimitedSizes = ["auto", "full"].includes(size)
    ? "medium"
    : (size as LimitedSizes);

  const datePickerClassName = classNames("aje-date-picker", className, {
    "read-only": isReadOnly,
  });

  return (
    <DatePickerWrapper
      className={datePickerClassName}
      error={isInvalid}
      size={size}
      disabled={isDisabled}
      required={isRequired}
    >
      <Label {...labelProps} message={message} hidden={hideLabel}>
        {label}
      </Label>
      <DatePickerInputWrapper {...groupProps} ref={ref}>
        <DateInput {...fieldProps} size="full" isRequired={isRequired} />
        <IconButton icon="calendar_month" variant="content" {...buttonProps} />
      </DatePickerInputWrapper>
      {error && <FieldError>{error}</FieldError>}
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          <Dialog {...dialogProps}>
            <CalendarWrapper>
              <Calendar {...calendarProps} size={calendarSize} />
            </CalendarWrapper>
          </Dialog>
        </Popover>
      )}
    </DatePickerWrapper>
  );
}
