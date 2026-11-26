import { describe, expect, it } from "vitest";
import { createAtomicAjv, LARGE_ONEOF_THRESHOLD } from "./createAtomicAjv";

const options = (count: number) =>
  Array.from({ length: count }, (_, i) => ({ const: `v${i}`, title: `V${i}` }));

describe("createAtomicAjv", () => {
  it("validates a small oneOf", () => {
    const validate = createAtomicAjv().compile({ oneOf: options(3) });
    expect(validate("v1")).toBe(true);
    expect(validate("nope")).toBe(false);
  });

  it("accepts a null option in oneOf", () => {
    const validate = createAtomicAjv().compile({
      oneOf: [{ const: null, title: "None" }, { const: "a" }],
    });
    expect(validate(null)).toBe(true);
  });

  it("skips validation for a oneOf above the threshold", () => {
    const validate = createAtomicAjv().compile({
      oneOf: options(LARGE_ONEOF_THRESHOLD + 1),
    });
    expect(validate("anything")).toBe(true);
  });

  it("treats an empty enum as no constraint", () => {
    const validate = createAtomicAjv().compile({ enum: [] });
    expect(validate("anything")).toBe(true);
  });

  it("validates a non-empty enum", () => {
    const validate = createAtomicAjv().compile({ enum: ["a", { b: 1 }] });
    expect(validate({ b: 1 })).toBe(true);
    expect(validate("c")).toBe(false);
  });

  it("registers custom formats", () => {
    const ajv = createAtomicAjv({ formats: { shout: (s: string) => s === s.toUpperCase() } });
    const validate = ajv.compile({ type: "string", format: "shout" });
    expect(validate("HI")).toBe(true);
    expect(validate("hi")).toBe(false);
  });

  it("applies schema defaults", () => {
    const data: Record<string, unknown> = {};
    createAtomicAjv().compile({
      type: "object",
      properties: { name: { type: "string", default: "x" } },
    })(data);
    expect(data.name).toBe("x");
  });
});
