import { describe, expect, it } from "vitest";
import { keyOf, keysOf, valueOf } from "./enumKeys";

const options = [
  { label: "None", value: null },
  { label: "One", value: 1 },
  { label: "Yes", value: true },
  { label: "Obj", value: { a: 1 } },
];

describe("enum keys", () => {
  it.each([
    [null, "0"],
    [1, "1"],
    [true, "2"],
    [{ a: 1 }, "3"],
    [undefined, null],
    ["missing", null],
  ])("keyOf(%j) → %j", (value, key) => {
    expect(keyOf(options, value)).toBe(key);
  });

  it("maps keys back to values", () => {
    expect(valueOf(options, "0")).toBeNull();
    expect(valueOf(options, "1")).toBe(1);
    expect(valueOf(options, null)).toBeUndefined();
  });

  it("maps arrays of values", () => {
    expect(keysOf(options, [1, true, "missing"])).toEqual(["1", "2"]);
    expect(keysOf(options, undefined)).toEqual([]);
  });
});
