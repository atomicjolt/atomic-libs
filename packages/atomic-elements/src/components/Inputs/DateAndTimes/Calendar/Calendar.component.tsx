import {
  useCalendar,
  AriaCalendarProps,
  DateValue,
} from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import { createCalendar } from "@internationalized/date";
import { useCalendarState } from "react-stately";

import { ExtendedSize, RenderBaseProps } from "../../../../types";
import { useRenderProps } from "@hooks";
import { Provider } from "@components/Internal/Provider";
import { ButtonContext } from "@components/Buttons/Button/Button.context";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";
import { ErrorMessageContext } from "@components/Fields/Atoms/ErrorMessage";
import { CalendarWrapper } from "./Calendar.styles";
import { CalendarStateContext, CalendarTitleContext } from "./Calendar.context";
import { CalendarTitle } from "./components/CalendarTitle";
import { CalendarGrid } from "./components/CalendarGrid";
import { CalendarCell } from "./components/CalendarCell";

export interface CalendarProps<T extends DateValue>
  extends AriaCalendarProps<T>,
    RenderBaseProps<never> {
  size?: ExtendedSize;
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
 * <Calendar value={date} onChange={setDate} />
 */
export function Calendar<T extends DateValue>(props: CalendarProps<T>) {
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
    size,
    ...props,
  });

  return (
    <CalendarWrapper {...calendarProps} {...renderProps}>
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
          [ErrorMessageContext.Provider, errorMessageProps],
        ]}
      >
        {renderProps.children}
      </Provider>
    </CalendarWrapper>
  );
}

Calendar.Title = CalendarTitle;
Calendar.Grid = CalendarGrid;
Calendar.Cell = CalendarCell;
