import {
  CalendarDate,
  getLocalTimeZone,
  parseAbsoluteToLocal,
  parseDate,
  parseTime,
  Time,
  toZoned,
  ZonedDateTime,
  type CalendarDateTime,
  type DateValue,
} from "@internationalized/date";

/** The value types TimeInput accepts (react-aria's TimeValue). */
export type TimeValue = Time | CalendarDateTime | ZonedDateTime;

// JSON Schema formats store ISO strings: `date` = 2026-11-25, `time` =
// 14:30:00, `date-time` = 2026-11-25T21:30:00.000Z. Unparseable strings show
// as empty rather than throwing; AJV reports them as invalid.

function safely<T>(parse: () => T): T | null {
  try {
    return parse();
  } catch {
    return null;
  }
}

export function toDateValue(data: unknown): CalendarDate | null {
  return typeof data === "string" ? safely(() => parseDate(data)) : null;
}

export function fromDateValue(value: DateValue | null): string | undefined {
  return value ? value.toString().slice(0, 10) : undefined;
}

export function toTimeValue(data: unknown): Time | null {
  return typeof data === "string" ? safely(() => parseTime(data.replace(/(Z|[+-]\d\d:?\d\d)$/i, ""))) : null;
}

export function fromTimeValue(value: TimeValue | null): string | undefined {
  if (!value) return undefined;
  const time = value as Time;
  const pad = (n: number) => String(n).padStart(2, "0");
  return `${pad(time.hour)}:${pad(time.minute)}:${pad(time.second)}`;
}

export function toDateTimeValue(data: unknown): ZonedDateTime | null {
  return typeof data === "string" ? safely(() => parseAbsoluteToLocal(data)) : null;
}

export function fromDateTimeValue(value: DateValue | null): string | undefined {
  if (!value) return undefined;
  const zoned = "timeZone" in value ? (value as ZonedDateTime) : toZoned(value, getLocalTimeZone());
  return zoned.toAbsoluteString();
}
