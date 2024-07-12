import { useRef } from "react";
import classNames from "classnames";
import {
  useCalendar,
  AriaCalendarGridProps,
  AriaCalendarProps,
  DateValue,
  useCalendarGrid,
  useCalendarCell,
} from "@react-aria/calendar";
import { useLocale } from "@react-aria/i18n";
import {
  getWeeksInMonth,
  CalendarDate,
  createCalendar,
  today,
  getLocalTimeZone,
} from "@internationalized/date";
import { CalendarState, useCalendarState } from "react-stately";

import { IconButton } from "../../../Buttons/IconButton";
import { Button } from "../../../Buttons/Button";
import { AriaProps, BaseProps, Size } from "../../../../types";
import {
  CalendarContent,
  StyledCalendarCell,
  CalendarFooter,
  CalendarHeader,
  CalendarWrapper,
  CalendarCellButton,
  CalendarWeekDay,
  CalendarHeaderButtons,
  CalendarHeaderTitle,
} from "./Calendar.styles";

export interface CalendarProps<T extends DateValue>
  extends AriaProps<AriaCalendarProps<T>>,
    BaseProps {
  size?: Size;
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

  const { calendarProps, prevButtonProps, nextButtonProps, title } =
    useCalendar(props, state);

  const className = classNames("aje-calendar", `is-${size}`);

  return (
    <CalendarWrapper {...calendarProps} className={className}>
      <CalendarHeader className="aje-calendar__header">
        <CalendarHeaderTitle>{title}</CalendarHeaderTitle>
        <CalendarHeaderButtons>
          <IconButton
            {...prevButtonProps}
            icon="chevron_left"
            variant="content"
          />
          <IconButton
            {...nextButtonProps}
            icon="chevron_right"
            variant="content"
          />
        </CalendarHeaderButtons>
      </CalendarHeader>
      <CalendarGrid state={state} />
      <CalendarFooter className="aje-calendar__footer">
        {/* TODO: useCalendar doesn't appear to have the ability to set the value
        to null, check if there's a way to do this? */}
        {/* <Button
          variant="calendar-footer"
          onPress={() => {
            state.setValue(null);
          }}
        >
          Clear
        </Button> */}
        <Button
          variant="calendar-footer"
          onPress={() => {
            const date = today(getLocalTimeZone());
            state.setValue(date);
            state.setFocusedDate(date);
          }}
        >
          Today
        </Button>
      </CalendarFooter>
    </CalendarWrapper>
  );
}

interface CalendarGridProps extends AriaCalendarGridProps {
  state: CalendarState;
}

function CalendarGrid(props: CalendarGridProps) {
  const { state, ...rest } = props;
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(rest, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <CalendarContent {...gridProps} className="aje-calendar__content">
      <thead {...headerProps}>
        <tr>
          {weekDays.map((day, index) => (
            <CalendarWeekDay key={index}>{day}</CalendarWeekDay>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...new Array(weeksInMonth).keys()].map((weekIndex) => (
          <tr key={weekIndex}>
            {state
              .getDatesInWeek(weekIndex)
              .map((date, i) =>
                date ? (
                  <CalendarCell key={i} state={state} date={date} />
                ) : (
                  <td key={i} />
                )
              )}
          </tr>
        ))}
      </tbody>
    </CalendarContent>
  );
}

interface CalendarCellProps {
  state: CalendarState;
  date: CalendarDate;
}

function CalendarCell(props: CalendarCellProps) {
  const { state, date } = props;
  const ref = useRef(null);
  const {
    cellProps,
    buttonProps,
    isSelected,
    isOutsideVisibleRange,
    isDisabled,
    isUnavailable,
    formattedDate,
  } = useCalendarCell({ date }, state, ref);

  const cellClassName = classNames("aje-calendar__cell", {
    "is-selected": isSelected,
    "is-disabled": isDisabled,
    "is-unavailable": isUnavailable,
  });

  return (
    <StyledCalendarCell {...cellProps} className={cellClassName}>
      <CalendarCellButton
        {...buttonProps}
        ref={ref}
        hidden={isOutsideVisibleRange}
      >
        {formattedDate}
      </CalendarCellButton>
    </StyledCalendarCell>
  );
}

export default Calendar;
