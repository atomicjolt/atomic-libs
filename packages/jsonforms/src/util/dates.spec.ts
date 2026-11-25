import { describe, expect, it } from "vitest";
import { CalendarDate, Time } from "@internationalized/date";
import {
  fromDateTimeValue,
  fromDateValue,
  fromTimeValue,
  toDateTimeValue,
  toDateValue,
  toTimeValue,
} from "./dates";

describe("date conversions", () => {
  it("round-trips a date", () => {
    expect(toDateValue("2026-11-25")).toEqual(new CalendarDate(2026, 11, 25));
    expect(fromDateValue(new CalendarDate(2026, 11, 25))).toBe("2026-11-25");
  });

  it("round-trips a time, dropping a timezone suffix", () => {
    expect(toTimeValue("14:30:05Z")).toEqual(new Time(14, 30, 5));
    expect(fromTimeValue(new Time(9, 5))).toBe("09:05:00");
  });

  it("round-trips a date-time instant", () => {
    const value = toDateTimeValue("2026-11-25T21:30:00.000Z");
    expect(fromDateTimeValue(value)).toBe("2026-11-25T21:30:00.000Z");
  });

  it.each([undefined, null, 42, "not a date"])("treats %s as empty", (data) => {
    expect(toDateValue(data)).toBeNull();
    expect(toTimeValue(data)).toBeNull();
    expect(toDateTimeValue(data)).toBeNull();
  });

  it("stores undefined for a cleared value", () => {
    expect(fromDateValue(null)).toBeUndefined();
    expect(fromTimeValue(null)).toBeUndefined();
    expect(fromDateTimeValue(null)).toBeUndefined();
  });
});
