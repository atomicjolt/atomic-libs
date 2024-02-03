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
import type { HelpTextProps, Validation } from "@react-types/shared";
import { useDatePickerState } from "react-stately";
import {
  HasClassName,
  NewInputComponentProps,
  LimitedSizes,
} from "../../../../types";
import {
  CalendarWrapper,
  DatePickerInputWrapper,
  DatePickerWrapper,
} from "./DatePicker.styles";
import { ErrorLabel } from "../../../../styles/utils";
import classNames from "classnames";

export type OmitAriaProps<T> = Omit<
  T,
  keyof HelpTextProps | keyof Validation<any>
>;

export type DatePickerProps<T extends DateValue> = OmitAriaProps<
  AriaDatePickerProps<T>
> &
  NewInputComponentProps &
  HasClassName;

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
    errorMessage,
    className,
    isDisabled,
    isRequired,
    isReadOnly,
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
      error={errorMessage}
      size={size}
      disabled={isDisabled}
      required={isRequired}
    >
      <Label {...labelProps} message={props.message} hidden={props.hideLabel}>
        {props.label}
      </Label>
      <DatePickerInputWrapper {...groupProps} ref={ref}>
        <DateInput {...fieldProps} size={props.size} isRequired={isRequired} />
        <IconButton icon="calendar_month" variant="content" {...buttonProps} />
      </DatePickerInputWrapper>
      {props.errorMessage && <ErrorLabel>{errorMessage}</ErrorLabel>}
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
