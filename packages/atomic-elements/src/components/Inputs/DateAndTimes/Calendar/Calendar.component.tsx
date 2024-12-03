import { useRef } from "react";
import {
  useCalendar,
  AriaCalendarProps,
  DateValue,
} from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import { useCalendarState } from "react-stately";

import { AriaProps, ExtendedSize, RenderBaseProps } from "../../../../types";
import { useRenderProps } from "@hooks";
import { Provider } from "@components/Internal/Provider";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";
import { useContextProps } from "@hooks/useContextProps";
import { ErrorMessageContext } from "@components/Fields/Atoms/ErrorMessage";

import { CalendarTitle } from "./components/CalendarTitle";
import { CalendarGrid } from "./components/CalendarGrid";
import { CalendarCell } from "./components/CalendarCell";
import { CalendarWrapper } from "./Calendar.styles";
import {
  CalendarContext,
  CalendarStateContext,
  CalendarTitleContext,
} from "./Calendar.context";

export interface CalendarProps<T extends DateValue>
  extends AriaProps<AriaCalendarProps<T>>,
    RenderBaseProps<never> {
  size?: ExtendedSize;
  isDisabled?: boolean;
  isInvalid?: boolean;
}

/**
 * Calendar component
 *
 * The Calendar component is used to select a date from a calendar. It is built on top of the `react-aria` and `react-stately` libraries.
 * The Calendar component accespts a date object from the `@internationalized/date` library.
 *
 * @example
 * import React, { useState } from "react";
 * import { parseDate } from "@internationalized/date";
 *
 * const [date, setDate] = useState(parseDate("2021-01-01"));
 *
 * <Calendar value={date} onChange={setDate}>
 *   <Calendar.Title />
 *   <Calendar.Grid>
 *     {(date) => <Calendar.Cell date={date} />}
 *   </Calendar.Grid>
 * </Calendar>
 */
export function Calendar<T extends DateValue>(props: CalendarProps<T>) {
  let ref = useRef(null);
  // TS is getting confused because react-aria uses some conditional types that
  // it doesn't understand how to resolve when using useContextProps
  [props, ref] = useContextProps(CalendarContext as any, props, ref);

  const { size = "medium" } = props;
  const { locale } = useLocale();
  const state = useCalendarState({
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
  } = useCalendar(props, state);

  const renderProps = useRenderProps({
    componentClassName: "aje-calendar",
    ...props,
    size,
    selectors: {
      "data-disabled": props.isDisabled,
      "data-invalid": props.isInvalid,
    },
  });

  return (
    <CalendarWrapper {...calendarProps} {...renderProps} ref={ref}>
      <Provider
        values={[
          [CalendarStateContext.Provider, state],
          [CalendarTitleContext.Provider, { title }],
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
    </CalendarWrapper>
  );
}

/** The current Month & Year formatted & localized */
Calendar.Title = CalendarTitle;
/** The grid of days in the calendar */
Calendar.Grid = CalendarGrid;
/** A cell in the calendar grid */
Calendar.Cell = CalendarCell;
