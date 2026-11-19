import fs from "fs";
import path from "path";
import { describe, expect, it } from "vitest";
import { defaultTheme } from "../theme";
import { resolveToLiteral } from "./tokenResolution";
import { EXPECTED_CHANGES } from "./expectedChanges";

const BASELINE_PATH = path.join(
  __dirname,
  "__fixtures__/resolved-tokens.baseline.json"
);

function readBaseline(): Record<string, string> {
  return JSON.parse(fs.readFileSync(BASELINE_PATH, "utf8"));
}

describe("theme token regression", () => {
  it("matches baseline resolved values", () => {
    for (const [name, literal] of Object.entries(readBaseline())) {
      const expected = EXPECTED_CHANGES[name] ?? literal;
      expect.soft(resolveToLiteral(defaultTheme, name), name).toBe(expected);
    }
  });

  it("baseline keys still exist", () => {
    const missing = Object.keys(readBaseline()).filter(
      (name) => !(name in defaultTheme.variables)
    );
    expect(missing).toEqual([]);
  });
});
