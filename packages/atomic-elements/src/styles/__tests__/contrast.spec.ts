import { describe, expect, it } from "vitest";
import { defaultTheme } from "../theme";
import { CONTRAST_PAIRS, contrastRatio } from "./contrast";
import { resolveToLiteral } from "./tokenResolution";

describe("contrastRatio", () => {
  it("is 21 for white on black", () => {
    expect(contrastRatio("#ffffff", "#000000")).toBeCloseTo(21, 1);
  });

  it("is 1 for identical colors", () => {
    expect(contrastRatio("hsl(0, 0%, 100%)", "hsl(0, 0%, 100%)")).toBe(1);
  });

  it("matches a known pair (white on success600)", () => {
    expect(contrastRatio("hsl(0, 0%, 100%)", "hsl(105, 85%, 35%)")).toBeCloseTo(
      3.21,
      2
    );
  });

  it("rejects translucent colors", () => {
    expect(() => contrastRatio("hsla(0, 0%, 0%, 0.5)", "#fff")).toThrow(
      /translucent/
    );
  });
});

/**
 * Pairs that already fall short of WCAG AA in the light scheme. Documented in
 * docs/superpowers/plans/2026-11-19-color-schemes-visual-changes.md; fixing
 * them changes the light look, so it's out of scope here.
 */
const LIGHT_KNOWN_FAILURES: string[] = [];

const pairKey = (pair: { fg: string; bg: string }) => `${pair.fg}/${pair.bg}`;

function ratio(scheme: string, fg: string, bg: string) {
  return contrastRatio(
    resolveToLiteral(defaultTheme, fg, scheme),
    resolveToLiteral(defaultTheme, bg, scheme)
  );
}

describe("scheme contrast", () => {
  it("light scheme meets AA except known failures", () => {
    for (const pair of CONTRAST_PAIRS) {
      const value = ratio("light", pair.fg, pair.bg);
      if (LIGHT_KNOWN_FAILURES.includes(pairKey(pair))) {
        expect(value, `${pairKey(pair)} is listed but passes`).toBeLessThan(
          pair.min
        );
      } else {
        expect.soft(value, pairKey(pair)).toBeGreaterThanOrEqual(pair.min);
      }
    }
  });

  it("every other scheme meets AA", () => {
    const schemes = Object.keys(defaultTheme.colorSchemes).filter(
      (name) => name !== "light"
    );
    for (const scheme of schemes) {
      for (const pair of CONTRAST_PAIRS) {
        expect
          .soft(ratio(scheme, pair.fg, pair.bg), `${scheme}: ${pairKey(pair)}`)
          .toBeGreaterThanOrEqual(pair.min);
      }
    }
  });
});
