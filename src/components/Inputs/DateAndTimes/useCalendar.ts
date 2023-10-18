import React, { useEffect, useRef, useState } from "react";
import {
  getYear,
  isBefore,
  isSameMonth,
  getMonth,
  isDate,
  getHours,
  getMinutes,
  setMonth,
  setYear,
  set,
} from "date-fns";
import { EventHandler } from "../../../types";
import { DateInterval, Time } from "./Date.types";
import { inChuncks, monthInterval } from "./utils";
import { DateLike } from "./Date.types";

type IntervalOptions =
  | {
      readonly interval: false;
      readonly selectedDate: DateLike | null;
      readonly onSelect: EventHandler<DateLike | null, React.MouseEvent>;
    }
  | {
      readonly interval: true;
      readonly selectedDate: DateInterval | null;
      readonly onSelect: EventHandler<DateInterval | null, React.MouseEvent>;
    };

interface BaseOptions {
  readonly showNeighbors: boolean;
  readonly withTime: boolean;
}

type Options = BaseOptions & IntervalOptions;

interface UseCalendarReturn {
  readonly intervalStart: DateLike | null;
  readonly intervalEnd: DateLike | null;
  readonly time: Time | null;
  readonly onClickDay: (date: DateLike, event: React.MouseEvent) => void;
  readonly setToToday: (e: React.MouseEvent) => void;
  readonly view: CalendarView;
}

interface SetDate {
  year: number;
  month: number;
  date: number;
  hours: number;
  minutes: number;
  seconds: number;
  milliseconds: number;
}

/** The `view` represents the current place that the
 * user is looking in the Calendar.
 */
class CalendarView {
  date: DateLike;
  month: number;
  year: number;

  private setDate: (values: Partial<SetDate>) => void;

  constructor(date: DateLike, setDate: (values: Partial<SetDate>) => void) {
    this.date = date;
    this.month = getMonth(date);
    this.year = getYear(date);
    this.setDate = setDate;
  }

  inWeeks = () => {
    return inChuncks(monthInterval(this.date), 7);
  };

  setYear = (year: number) => this.setDate({ year });
  setMonth = (month: number) => this.setDate({ month });

  decreaseMonth = () => {
    if (this.month === 0) {
      this.setDate({
        year: this.year - 1,
        month: 11,
      });
    } else {
      this.setDate({ month: this.month - 1 });
    }
  };

  increaseMonth = () => {
    if (this.month === 11) {
      this.setDate({
        year: this.year + 1,
        month: 0,
      });
    } else {
      this.setDate({ month: this.month + 1 });
    }
  };

  decreaseYear = () => this.setDate({ year: this.year - 1 });
  increaseYear = () => this.setDate({ year: this.year + 1 });
}

function getRange(range: DateLike | DateInterval | null): DateInterval {
  if (!range) return [null, null];
  if (isDate(range) || typeof range === "number")
    return [range as DateLike, null];
  return range as DateInterval;
}

export default function useCalendar(options: Options): UseCalendarReturn {
  const { selectedDate, interval, onSelect, showNeighbors, withTime } = options;
  const today = useRef(new Date()).current;

  const [intervalStart, intervalEnd] = getRange(selectedDate);
  const initialDate = intervalStart ? intervalStart : today;

  const time: Time | null =
    withTime && intervalStart
      ? {
          hours: getHours(intervalStart),
          minutes: getMinutes(intervalStart),
        }
      : {
          hours: 0,
          minutes: 0,
        };

  const [viewingDate, _setViewingDate] = useState(
    () => new Date(getYear(initialDate), getMonth(initialDate), 1)
  );

  const setViewingDate = (values: Partial<SetDate>) => {
    _setViewingDate(set(viewingDate, values));
  };

  useEffect(() => {
    _setViewingDate(new Date(getYear(initialDate), getMonth(initialDate), 1));
  }, [initialDate]);

  const onClickDay = (date: DateLike, event: React.MouseEvent) => {
    if (!isSameMonth(date, viewingDate)) {
      setViewingDate({ month: getMonth(date) });
    }

    if (interval) {
      if (intervalEnd) {
        onSelect([date, null], event);
      } else {
        if (isBefore(date, intervalStart as DateLike)) {
          onSelect([date, intervalStart], event);
        } else {
          onSelect([intervalStart, date], event);
        }
      }
    } else {
      onSelect(set(date, time), event);
    }
  };

  const setToToday = (e: React.MouseEvent) => {
    if (interval) {
      onSelect([today, today], e);
    } else {
      onSelect(today, e);
    }
    setViewingDate({ year: getYear(today), month: getMonth(today) });
  };

  return {
    intervalStart,
    intervalEnd,
    time,
    onClickDay,
    setToToday,
    view: new CalendarView(viewingDate, setViewingDate),
  };
}
