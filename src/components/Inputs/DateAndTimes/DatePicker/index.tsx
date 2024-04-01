import React, { useRef } from "react";
import { useDatePicker, AriaDatePickerProps, DateValue } from "react-aria";
import { useDatePickerState } from "react-stately";
import { Size, AriaProps, FieldInputProps } from "../../../../types";
import {
  CalendarWrapper,
  DatePickerVirtualInput,
  DatePickerWrapper,
} from "./DatePicker.styles";
import classNames from "classnames";
import DateInput from "../DateInput";
import IconButton from "../../../Buttons/IconButton";
import { Popover } from "../../../Atoms/Popover";
import { Dialog } from "../../../Atoms/Dialog";
import Calendar from "../Calendar";
import { ErrorMessage, Label, Message } from "../../../Atoms/Field";

export type DatePickerProps<T extends DateValue> = AriaProps<
  AriaDatePickerProps<T>
> &
  FieldInputProps;

/** DatePicker is a combination of a `<DateInput/>` component and a dropdown `<Calendar />` component. */
export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  const state = useDatePickerState(props);
  const ref = useRef(null);
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    dialogProps,
    calendarProps,
    errorMessageProps,
    descriptionProps,
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
  } = props;

  const calendarSize: Size = ["auto", "full"].includes(size)
    ? "medium"
    : (size as Size);

  return (
    <DatePickerWrapper
      className={classNames("aje-date-picker", className)}
      size={size}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
    >
      {label && <Label {...labelProps}>{label}</Label>}
      {message && <Message {...descriptionProps}>{message}</Message>}

      <DatePickerVirtualInput
        {...groupProps}
        ref={ref}
        className={"aje-input__date-segments"}
      >
        <DateInput {...fieldProps} size="full" isRequired={isRequired} />
        <IconButton icon="today" variant="content" {...buttonProps} />
      </DatePickerVirtualInput>

      {isInvalid && error && (
        <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>
      )}

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
