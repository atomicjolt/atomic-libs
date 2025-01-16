import { useRef } from "react";
import {
  useDatePicker,
  AriaDatePickerProps,
  DateValue,
} from "@react-aria/datepicker";
import { useDatePickerState } from "react-stately";
import { AriaProps, FieldInputProps } from "../../../../types";
import { DatePickerComboInput, DatePickerWrapper } from "./DatePicker.styles";
import { DateInput } from "../DateInput";
import { IconButton } from "../../../Buttons/IconButton";
import { Popover } from "../../../Overlays/Popover";
import { Calendar } from "../Calendar";
import { ErrorMessage, Label, Message } from "../../../Fields";
import { OverlayTriggerStateContext } from "@components/Overlays/OverlayTrigger/context";
import { useRenderProps } from "@hooks";
import { Flex } from "@components/Layout/Flex/Flex";
import { filterDOMProps } from "@react-aria/utils";

export interface DatePickerProps<T extends DateValue>
  extends AriaProps<AriaDatePickerProps<T>>,
    FieldInputProps {}

/** DatePicker is a combination of a `<DateInput/>` component and a dropdown `<Calendar />` component. */
export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  const state = useDatePickerState(props);
  const ref = useRef(null);
  const {
    groupProps,
    labelProps,
    fieldProps,
    buttonProps,
    calendarProps,
    errorMessageProps,
    descriptionProps,
  } = useDatePicker(props, state, ref);

  const {
    size = "medium",
    error,
    isRequired,
    isInvalid,
    label,
    message,
  } = props;

  const calendarSize = ["auto", "full"].includes(size) ? "medium" : size;

  const renderProps = useRenderProps({
    componentClassName: "aje-date-picker",
    ...props,
  });

  return (
    <DatePickerWrapper {...filterDOMProps(props)} {...renderProps}>
      {label && <Label {...labelProps}>{label}</Label>}
      {message && <Message {...descriptionProps}>{message}</Message>}

      <DatePickerComboInput
        {...groupProps}
        ref={ref}
        className={"aje-input__date-segments"}
        padding="both"
      >
        <DateInput {...fieldProps} size="full" isRequired={isRequired} />
        <IconButton icon="today" variant="content" {...buttonProps} />
      </DatePickerComboInput>

      {isInvalid && error && (
        <ErrorMessage {...errorMessageProps}>{error}</ErrorMessage>
      )}

      <OverlayTriggerStateContext.Provider value={state}>
        <Popover triggerRef={ref} placement="bottom start" variant="datepicker">
          <Calendar {...calendarProps} size={calendarSize}>
            <Flex justifyContent="space-between" alignItems="center">
              <IconButton
                icon="chevron_left"
                variant="ghost"
                slot="previous-month"
              />
              <Calendar.Title />
              <IconButton
                icon="chevron_right"
                variant="ghost"
                slot="next-month"
              />
            </Flex>
            <Calendar.Grid>
              {(date) => <Calendar.Cell date={date} />}
            </Calendar.Grid>
          </Calendar>
        </Popover>
      </OverlayTriggerStateContext.Provider>
    </DatePickerWrapper>
  );
}
