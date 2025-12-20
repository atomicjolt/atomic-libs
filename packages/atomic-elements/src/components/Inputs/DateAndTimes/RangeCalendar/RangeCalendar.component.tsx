import { useRef } from "react";
import {
  useRangeCalendar,
  AriaRangeCalendarProps,
  DateValue,
} from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import { useRangeCalendarState } from "react-stately";

import { AriaProps, ExtendedSize, RenderBaseProps } from "../../../../types";
import { useRenderProps } from "@hooks";
import { Provider } from "@components/Internal/Provider";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";
import { useContextProps } from "@hooks/useContextProps";
import { ErrorMessageContext } from "@components/Fields/Atoms/ErrorMessage";

import { RangeCalendarTitle } from "./components/RangeCalendarTitle";
import { RangeCalendarGrid } from "./components/RangeCalendarGrid";
import { RangeCalendarCell } from "./components/RangeCalendarCell";
import { RangeCalendarWrapper } from "./RangeCalendar.styles";
import {
  RangeCalendarContext,
  RangeCalendarStateContext,
  RangeCalendarTitleContext,
} from "./RangeCalendar.context";

export interface RangeCalendarProps<T extends DateValue>
  extends AriaProps<AriaRangeCalendarProps<T>>,
    RenderBaseProps<never> {
  size?: ExtendedSize;
  isDisabled?: boolean;
  isInvalid?: boolean;
}

/**
 * RangeCalendar component
 *
 * The RangeCalendar component is used to select a date range from a calendar. It is built on top of the `react-aria` and `react-stately` libraries.
 * The RangeCalendar component accepts date range objects from the `@internationalized/date` library.
 *
 * @example
 * import React, { useState } from "react";
 * import { parseDate } from "@internationalized/date";
 *
 * const [range, setRange] = useState({
 *   start: parseDate("2021-01-01"),
 *   end: parseDate("2021-01-07")
 * });
 *
 * <RangeCalendar value={range} onChange={setRange}>
 *   <RangeCalendar.Title />
 *   <RangeCalendar.Grid>
 *     {(date) => <RangeCalendar.Cell date={date} />}
 *   </RangeCalendar.Grid>
 * </RangeCalendar>
 */
export function RangeCalendar<T extends DateValue>(
  props: RangeCalendarProps<T>
) {
  let ref = useRef(null);
  // TS is getting confused because react-aria uses some conditional types that
  // it doesn't understand how to resolve when using useContextProps
  [props, ref] = useContextProps(RangeCalendarContext as any, props, ref);

  const { size = "medium" } = props;
  const { locale } = useLocale();
  const state = useRangeCalendarState({
    ...props,
    locale,
    createCalendar,
  });

  const {
    calendarProps,
    prevButtonProps,
    nextButtonProps,
    title,
    errorMessageProps,
  } = useRangeCalendar(props, state, ref);

  const renderProps = useRenderProps({
    componentClassName: "aje-range-calendar",
    ...props,
    size,
    selectors: {
      "data-disabled": props.isDisabled,
      "data-invalid": props.isInvalid,
    },
  });

  return (
    <RangeCalendarWrapper {...calendarProps} {...renderProps} ref={ref}>
      <Provider
        values={[
          [RangeCalendarStateContext.Provider, state],
          [RangeCalendarTitleContext.Provider, { title }],
          [
            ButtonContext.Provider,
            {
              slots: {
                [DEFAULT_SLOT]: {},
                "previous-month": prevButtonProps,
                "next-month": nextButtonProps,
              },
            },
          ],
          [
            ErrorMessageContext.Provider,
            { isInvalid: props.isInvalid, ...errorMessageProps },
          ],
        ]}
      >
        {renderProps.children}
      </Provider>
    </RangeCalendarWrapper>
  );
}

/** The current Month & Year formatted & localized */
RangeCalendar.Title = RangeCalendarTitle;
/** The grid of days in the calendar */
RangeCalendar.Grid = RangeCalendarGrid;
/** A cell in the calendar grid */
RangeCalendar.Cell = RangeCalendarCell;
