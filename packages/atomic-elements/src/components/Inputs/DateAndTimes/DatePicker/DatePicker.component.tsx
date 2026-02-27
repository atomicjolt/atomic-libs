import { useRef } from "react";
import {
  useDatePicker,
  AriaDatePickerProps,
  DateValue,
} from "@react-aria/datepicker";
import { filterDOMProps } from "@react-aria/utils";
import { useDatePickerState } from "react-stately";
import { useRenderProps } from "@hooks";
import { fieldStatusSelectors } from "@hooks/useRenderProps";
import { AriaProps, FieldInputProps, Size } from "../../../../types";
import { IconButton } from "../../../Buttons/IconButton";
import { Popover } from "../../../Overlays/Popover";
import { Calendar } from "../Calendar";
import {
  DateField,
  ErrorMessage,
  Label,
  Message,
  ComboInput,
} from "../../../Fields";
import { OverlayTriggerStateContext } from "@components/Overlays/OverlayTrigger/context";
import { Flex } from "@components/Layout/Flex";

export interface DatePickerProps<T extends DateValue>
  extends AriaProps<AriaDatePickerProps<T>>,
    FieldInputProps {
  calendarSize?: Size;
}

/** DatePicker is a combination of a `<DateInput/>` component and a dropdown `<Calendar />` component. */
export function DatePicker<T extends DateValue>(props: DatePickerProps<T>) {
  const state = useDatePickerState(props);
  const ref = useRef(null);
  const {
    labelProps,
    fieldProps,
    buttonProps,
    calendarProps,
    errorMessageProps,
    descriptionProps,
  } = useDatePicker(props, state, ref);

  const {
    size = "medium",
    calendarSize = "small",
    error,
    isInvalid,
    label,
    message,
  } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-date-picker",
    ...props,
    selectors: fieldStatusSelectors(props),
  });

  return (
    <>
      <div {...filterDOMProps(props)} {...renderProps}>
        <DateField
          {...fieldProps}
          size={size}
          style={{
            // The props of DateInput can affect the width due to number of segments shown
            // so we allow it grow larger than the default width constraints.
            width: "unset",
            minWidth: "var(--size-x)",
            ...renderProps.style,
          }}
        >
          <Label {...labelProps}>{label}</Label>
          {message && <Message {...descriptionProps}>{message}</Message>}
          <ComboInput padding="both">
            <DateField.Segments>
              {(_, index) => <DateField.Segment key={index} index={index} />}
            </DateField.Segments>
            <IconButton
              icon="today"
              variant="content"
              style={{ marginLeft: "auto" }}
              ref={ref}
              {...buttonProps}
            />
          </ComboInput>
          <ErrorMessage {...errorMessageProps} isInvalid={isInvalid}>
            {error}
          </ErrorMessage>
        </DateField>
      </div>
      <OverlayTriggerStateContext.Provider value={state}>
        <Popover
          triggerRef={ref}
          placement="bottom end"
          variant="datepicker"
          offset={15}
        >
          <Calendar {...calendarProps} size={calendarSize}>
            <Flex $justify="space-between" $align="center">
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
    </>
  );
}
