import {
  startOfMonth,
  endOfMonth,
  previousSunday,
  nextSaturday,
  eachDayOfInterval,
  getDay,
  getYear,
  isWithinInterval,
  isBefore,
  set,
} from "date-fns";
import { DateLike, Time } from "./Date.types";

export enum DaysNumbered {
  Sunday = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
}

export enum Era {
  BC = "BC",
  AD = "AD",
}

export function getEra(date: DateLike): Era {
  if (getYear(date) < 0) {
    return Era.BC;
  }
  return Era.AD;
}

export function range(begin: number, end: number) {
  return Array.from({ length: end - begin }, (_x, i) => i + begin);
}

export function inChuncks<T>(array: T[], chunkSize: number) {
  const chunks = [];
  for (let i = 0; i < array.length; i += chunkSize) {
    chunks.push(array.slice(i, i + chunkSize));
  }

  return chunks;
}

export function monthInterval(date: DateLike) {
  const monthStart = startOfMonth(date);
  const calendarStart =
    getDay(monthStart) === DaysNumbered.Sunday
      ? monthStart
      : previousSunday(monthStart);
  const monthEnd = endOfMonth(date);
  const calendarEnd =
    getDay(monthEnd) === DaysNumbered.Saturday
      ? monthEnd
      : nextSaturday(monthEnd);

  return eachDayOfInterval({ start: calendarStart, end: calendarEnd });
}

interface NullableInterval {
  start: Date | number | null;
  end: Date | number | null;
}

export function withinInterval(date: DateLike, interval: NullableInterval) {
  if (!interval.end || !interval.start) return false;

  if (isBefore(interval.end, interval.start)) {
    return isWithinInterval(date, { start: interval.end, end: interval.start });
  }

  return isWithinInterval(date, interval as Interval);
}

export const Months = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const MonthsShort = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

export function getMonthName(month: number, short: boolean = false) {
  if (short) {
    return MonthsShort[month];
  }
  return Months[month];
}

export function updateTime(date: DateLike, time: Time): DateLike {
  return set(date, time);
}
