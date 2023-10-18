import { Period, Time } from "../Date.types";

export function convertTo12Hour(time: Time): [Time, Period] {
  const { hours, minutes } = time;
  const convertedHours = [0, 12].includes(hours) ? 12 : hours % 12;

  return [
    { hours: convertedHours, minutes },
    hours >= 12 ? Period.PM : Period.AM,
  ];
}

export function convertTo24Hour(hour: number, period: Period): number {
  if (period === Period.AM) {
    if (hour === 12) {
      return 0;
    } else {
      return hour;
    }
  } else {
    if (hour === 12) {
      return hour;
    } else {
      return hour + 12;
    }
  }
}
