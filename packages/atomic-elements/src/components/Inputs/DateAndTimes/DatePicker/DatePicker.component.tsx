import React, { useRef } from "react";
import {
  useDatePicker,
  AriaDatePickerProps,
  DateValue,
} from "@react-aria/datepicker";
import { useDialog, AriaDialogProps } from "@react-aria/dialog";
import { filterDOMProps, mergeProps } from "@react-aria/utils";
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
  /**
   * Size of the popup calendar
   * @default "small"
   */
  calendarSize?: Size;
}

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

  // react-aria puts the caller's id on the group, so keep it off the wrapper.
  const { id: _id, ...domProps } = filterDOMProps(props);

  const {
    size = "medium",
    calendarSize = "small",
    error,
    isInvalid,
    label,
    message,
    isLoading,
    loadingLabel,
  } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-date-picker",
    ...props,
    selectors: fieldStatusSelectors(props),
  });

  return (
    <>
      <div {...domProps} {...renderProps}>
        <DateField
          {...fieldProps}
          size={size}
          style={{
            // The props of DateInput can affect the width due to number of segments shown,
            // so we shrink-to-fit the content but keep the default size as a floor.
            width: "fit-content",
            minWidth: "var(--size-x)",
            ...renderProps.style,
          }}
        >
          <Label {...labelProps}>{label}</Label>
          {message && <Message {...descriptionProps}>{message}</Message>}
          {/* The group holds the segments and the calendar button. Its ref drives
              keyboard navigation between segments and anchors the popover. */}
          <ComboInput
            {...groupProps}
            ref={ref}
            padding="both"
            isLoading={isLoading}
            loadingLabel={loadingLabel}
          >
            <DateField.Segments>
              {(_, index) => <DateField.Segment key={index} index={index} />}
            </DateField.Segments>
            <IconButton
              icon="today"
              variant="content"
              style={{ marginLeft: "auto" }}
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
          <DatePickerDialog {...dialogProps}>
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
          </DatePickerDialog>
        </Popover>
      </OverlayTriggerStateContext.Provider>
    </>
  );
}

/** The calendar popup's dialog element, labelled by the picker. */
function DatePickerDialog(
  props: AriaDialogProps & { children: React.ReactNode }
) {
  const ref = useRef<HTMLDivElement>(null);
  const { dialogProps } = useDialog(props, ref);

  return (
    <div {...mergeProps(dialogProps, { id: props.id })} ref={ref}>
      {props.children}
    </div>
  );
}
