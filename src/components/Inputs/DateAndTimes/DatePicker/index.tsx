import React, { useRef } from "react";
import { useDatePicker, AriaDatePickerProps, DateValue } from "react-aria";
import { useDatePickerState } from "react-stately";
import { Size, AriaProps, FieldBaseProps } from "../../../../types";
import {
  CalendarWrapper,
  DatePickerInputWrapper,
  DatePickerWrapper,
} from "./DatePicker.styles";
import { FieldError } from "../../../../styles/utils";
import classNames from "classnames";
import Label from "../../../Atoms/Label";
import DateInput from "../DateInput";
import IconButton from "../../../Buttons/IconButton";
import { Popover } from "../../../Atoms/Popover";
import { Dialog } from "../../../Atoms/Dialog";
import Calendar from "../Calendar";
import { FieldWrapper } from "../../../Atoms/FieldWrapper";

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
    errorMessageProps,
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

  const calendarSize: Size = ["auto", "full"].includes(size)
    ? "medium"
    : (size as Size);

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
      <FieldWrapper
        label={label}
        hideLabel={hideLabel}
        error={error}
        message={message}
        labelProps={labelProps}
        messageProps={errorMessageProps}
        errorProps={errorMessageProps}
      >
        <DatePickerInputWrapper {...groupProps} ref={ref}>
          <DateInput {...fieldProps} size="full" isRequired={isRequired} />
          <IconButton
            icon="calendar_month"
            variant="content"
            {...buttonProps}
          />
        </DatePickerInputWrapper>
      </FieldWrapper>
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
