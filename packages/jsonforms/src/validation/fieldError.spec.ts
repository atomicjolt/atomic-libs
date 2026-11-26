import { describe, expect, it } from "vitest";
import { fieldError, toInstancePath } from "./fieldError";

describe("toInstancePath", () => {
  it.each([
    ["name", "/name"],
    ["settings.url", "/settings/url"],
    ["/settings/url", "/settings/url"],
    ["", ""],
  ])("%s → %s", (input, expected) => {
    expect(toInstancePath(input)).toBe(expected);
  });
});

describe("fieldError", () => {
  it("builds an AJV-shaped error", () => {
    expect(fieldError("settings.url", "Bad")).toMatchObject({
      instancePath: "/settings/url",
      message: "Bad",
    });
  });
});
