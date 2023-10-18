export interface Time {
  hours: number;
  minutes: number;
}

export type DateLike = Date | number;
export type DateInterval = [start: DateLike | null, end: DateLike | null];

export enum Period {
  AM,
  PM,
}

export enum CalendarView {
  Date,
  Month,
  Year,
}
