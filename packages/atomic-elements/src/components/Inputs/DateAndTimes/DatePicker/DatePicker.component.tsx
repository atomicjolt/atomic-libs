import { useRef } from "react";
import {
  useDatePicker,
  AriaDatePickerProps,
  DateValue,
} from "@react-aria/datepicker";
import { useDatePickerState } from "react-stately";
import { Size, AriaProps, FieldInputProps } from "../../../../types";
import { DatePickerComboInput, DatePickerWrapper } from "./DatePicker.styles";
import classNames from "classnames";
import { DateInput } from "../DateInput";
import { IconButton } from "../../../Buttons/IconButton";
import { Popover } from "../../../Overlays/Popover";
import { Dialog } from "../../../Overlays/Dialog";
import { Calendar } from "../Calendar";
import { ErrorMessage, Label, Message } from "../../../Fields";
import { OverlayTriggerStateContext } from "@components/Overlays/OverlayTrigger/context";

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

      <DatePickerComboInput
        {...groupProps}
        ref={ref}
        className={"aje-input__date-segments"}
      >
        <DateInput {...fieldProps} size="full" isRequired={isRequired} />
        <IconButton icon="today" variant="content" {...buttonProps} />
      </DatePickerComboInput>

      {isInvalid && error && (
        <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>
      )}

      <OverlayTriggerStateContext.Provider value={state}>
        <Popover triggerRef={ref} placement="bottom start" variant="datepicker">
          <Dialog {...dialogProps}>
            <Calendar {...calendarProps} size={calendarSize} />
          </Dialog>
        </Popover>
      </OverlayTriggerStateContext.Provider>
    </DatePickerWrapper>
  );
}