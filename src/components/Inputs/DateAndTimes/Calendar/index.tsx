import React, { useState } from "react";
import { isSameDay, isSameMonth, getMonth, getDate } from "date-fns";
import cn from "classnames";

import { EventHandler } from "../../../../types";
import { DateInterval, DateLike, Time, CalendarView } from "../Date.types";
import { updateTime, getEra, getMonthName, withinInterval } from "../utils";
import YearPicker from "../YearPicker";
import MonthPicker from "../MonthPicker";
import MaterialIcon from "../../../Icons/MaterialIcon";
import TimePicker from "../TimePicker";
import useCalendar from "../useCalendar";
import {
  CalendarContent,
  CalendarDay,
  CalendarFooter,
  CalendarGrid,
  CalendarHeader,
  CalendarHeaderSelectors,
  CalendarNavigationButton,
  CalendarWeekDay,
  CalendarWrapper,
  StyledCalendar,
} from "./Calendar.styles";

interface CommonProps {
  readonly size?: "small" | "medium" | "large";
  /** Display the start and end of weeks in neighboring months */
  readonly showNeighbors?: boolean;
  /** Always display AD / BC next to the year. *Note*: BC will always display either way.*/
  readonly showEra?: boolean;
  readonly disabled?: boolean;
}

type IntervalSupport =
  | {
      /** Enables the selection of date intervals, instead of single dates */
      readonly interval?: false;
      /** The current selected date / date range on the calendar. Can be one of two things:
       * - When `interval` is `false`: `DateLike` object.
       * - When `interval` is `true`: A two-item tuple of a start `DateLike` and an end `DateLike`
       */
      readonly date: DateLike | null;
      /** Called when the user selects a new date, or clears their selection */
      readonly onSelect: EventHandler<DateLike | null, React.MouseEvent>;
      readonly withTime?: boolean;
    }
  | {
      readonly interval: true;
      readonly date: DateInterval | null;
      readonly onSelect: EventHandler<DateInterval | null, React.MouseEvent>;
      readonly withTime?: false | never;
    };

export type CalendarProps = CommonProps & IntervalSupport;

export default function Calendar(props: CalendarProps) {
  const {
    date: selectedDate,
    interval = false,
    onSelect,
    size = "medium",
    showNeighbors = true,
    showEra = false,
    disabled = false,
    withTime = false,
  } = props;

  const [view, setView] = useState<CalendarView>(CalendarView.Date);
  const [potentialIntervalEnd, setPotentialIntervalEnd] =
    useState<DateLike | null>(null);

  const {
    intervalStart,
    intervalEnd,
    time,
    view: calendarView,
    onClickDay,
    setToToday,
    // @ts-ignore
  } = useCalendar({
    interval,
    selectedDate,
    onSelect,
    showNeighbors,
    withTime,
  });

  const renderContent = () => {
    switch (view) {
      case CalendarView.Date: {
        return (
          <CalendarGrid className="aje-calendar__grid">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <CalendarWeekDay
                className="aje-calendar__week-day"
                key={`weekday-${d}-${i}`}
                aria-hidden
              >
                {d}
              </CalendarWeekDay>
            ))}
            {calendarView.inWeeks().map((week, i) =>
              week.map((date) => {
                const isNeighbor = !isSameMonth(date, calendarView.date);

                if (isNeighbor && !showNeighbors) {
                  return <span />;
                }

                const isSelected =
                  (intervalStart && isSameDay(date, intervalStart)) ||
                  (intervalEnd && isSameDay(date, intervalEnd));

                const inInterval =
                  interval &&
                  withinInterval(date, {
                    start: intervalStart,
                    end: intervalEnd,
                  });

                const intervalClasses = interval
                  ? {
                      "in-interval": inInterval,
                      "in-potential-interval": !intervalEnd
                        ? withinInterval(date, {
                            start: intervalStart,
                            end: potentialIntervalEnd,
                          })
                        : false,
                      "interval-start":
                        intervalStart &&
                        intervalEnd &&
                        isSameDay(date, intervalStart),
                      "interval-end":
                        intervalEnd && isSameDay(date, intervalEnd),
                    }
                  : {};

                let label = `${getMonthName(getMonth(date))}`;
                label += ` ${getDate(date)}`;
                if (isSelected) {
                  label += " is currently selected";
                } else if (inInterval) {
                  label += " is currently in selected interval";
                }

                return (
                  <CalendarDay
                    className={cn("aje-calendar__day", intervalClasses, {
                      "is-selected": isSelected,
                      "neighboring-month": isNeighbor,
                    })}
                    key={`day-${getMonth(date)}-${getDate(date)}`}
                    aria-label={label}
                    onClick={(e) => onClickDay(date, e)}
                    onMouseEnter={() => {
                      if (!interval || intervalEnd) return;
                      setPotentialIntervalEnd(date);
                    }}
                  >
                    {getDate(date)}
                  </CalendarDay>
                );
              })
            )}
          </CalendarGrid>
        );
      }
      case CalendarView.Month: {
        return (
          <MonthPicker
            month={calendarView.month}
            onSelect={(month) => {
              calendarView.setMonth(month);
              // Put this in a setTimeout so the click handler
              // for DateInput gets called before the view switches
              // If it doesn't, the calendar will close prematurely
              setTimeout(() => setView(CalendarView.Date), 0);
            }}
          />
        );
      }
      case CalendarView.Year: {
        return (
          <YearPicker
            year={calendarView.year}
            onSelect={(year) => {
              calendarView.setYear(year);
              // Put this in a setTimeout so the click handler
              // for DateInput gets called before the view switches
              // If it doesn't, the calendar will close prematurely
              setTimeout(() => setView(CalendarView.Date), 0);
            }}
          />
        );
      }
    }
  };

  return (
    <CalendarWrapper className={cn("aje-calendar__wrapper", `is-${size}`)}>
      <StyledCalendar
        className="aje-calendar"
        aria-label="DateLike Picker"
        aria-disabled={disabled}
      >
        <CalendarHeader className="aje-calendar__header">
          <CalendarHeaderSelectors className="aje-calendar__header__selectors">
            <button
              onClick={() =>
                setView(
                  view === CalendarView.Month
                    ? CalendarView.Date
                    : CalendarView.Month
                )
              }
            >
              {getMonthName(calendarView.month, size == "small")}
            </button>
            <button
              onClick={() =>
                setView(
                  view === CalendarView.Year
                    ? CalendarView.Date
                    : CalendarView.Year
                )
              }
            >
              {Math.abs(calendarView.year)}
            </button>
            {(calendarView.year < 0 || showEra) && (
              <span className="aje-calendar__era">
                ({getEra(calendarView.date)})
              </span>
            )}
          </CalendarHeaderSelectors>
          <div className="aje-calendar__header__buttons">
            <CalendarNavigationButton
              className="aje-calendar__header__button year-btn"
              aria-label="Previous Year"
              onClick={calendarView.decreaseYear}
            >
              <MaterialIcon icon="chevron_left" />
              <MaterialIcon icon="chevron_left" />
            </CalendarNavigationButton>
            <CalendarNavigationButton
              className="aje-calendar__header__button month-btn"
              aria-label="Previous Month"
              onClick={calendarView.decreaseMonth}
            >
              <MaterialIcon icon="chevron_left" />
            </CalendarNavigationButton>
            <CalendarNavigationButton
              className="aje-calendar__header__button month-btn"
              aria-label="Next Month"
              onClick={calendarView.increaseMonth}
            >
              <MaterialIcon icon="chevron_right" />
            </CalendarNavigationButton>
            <CalendarNavigationButton
              className="aje-calendar__header__button year-btn"
              onClick={calendarView.increaseYear}
              aria-label="Next Year"
            >
              <MaterialIcon icon="chevron_right" />
              <MaterialIcon icon="chevron_right" />
            </CalendarNavigationButton>
          </div>
        </CalendarHeader>
        <CalendarContent className="aje-calendar__content">
          {renderContent()}
        </CalendarContent>
        <CalendarFooter className="aje-calendar__footer">
          <button onClick={(e) => onSelect(null, e)}>Clear</button>
          <button onClick={setToToday}>Today</button>
        </CalendarFooter>
      </StyledCalendar>
      {withTime && !interval && (
        <TimePicker
          time={time}
          onChange={(time: Time, e) => {
            if (!interval && intervalStart) {
              // @ts-ignore
              onSelect(updateTime(intervalStart, time), e);
            }
          }}
        />
      )}
    </CalendarWrapper>
  );
}
