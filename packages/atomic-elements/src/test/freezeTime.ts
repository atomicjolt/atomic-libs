import { afterAll, beforeAll, vi } from "vitest";

/** Fixed instant used by every test that renders "today". */
export const FROZEN_NOW = new Date("2024-03-15T12:00:00.000Z");

/**
 * Freezes the clock for the surrounding `describe` block.
 *
 * React Aria's date components render the current date into their placeholder
 * segments (`aria-valuenow`, `aria-valuemax`, ...), so without this their
 * snapshots go stale as soon as the day, month, or month length changes.
 *
 * Only `Date` is faked — `setTimeout` and friends stay real so testing-library
 * and user-event keep working.
 */
export function freezeTime(date: Date = FROZEN_NOW) {
  beforeAll(() => {
    vi.useFakeTimers({ toFake: ["Date"], now: date });
  });

  afterAll(() => {
    vi.useRealTimers();
  });
}
