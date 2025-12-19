import React, { useContext } from "react";
import { AriaCalendarGridProps, useCalendarGrid } from "@react-aria/calendar";
import { RangeCalendarStateContext } from "../RangeCalendar.context";
import { useLocale } from "@react-aria/i18n";
import { CalendarDate, getWeeksInMonth } from "@internationalized/date";
import { CalendarContent, CalendarWeekDay } from "../../Calendar/Calendar.styles";
import { RenderStyleProps } from "../../../../../types";

interface RangeCalendarGridProps
  extends AriaCalendarGridProps,
    RenderStyleProps<never> {
  children: (date: CalendarDate) => React.ReactNode;
}

export function RangeCalendarGrid(props: RangeCalendarGridProps) {
  const state = useContext(RangeCalendarStateContext)!;
  const { locale } = useLocale();
  const { gridProps, headerProps, weekDays } = useCalendarGrid(props, state);

  // Get the number of weeks in the month so we can render the proper number of rows.
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale);

  return (
    <CalendarContent {...gridProps} className="aje-range-calendar__content">
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
                  <React.Fragment key={i}>
                    {props.children(date)}
                  </React.Fragment>
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