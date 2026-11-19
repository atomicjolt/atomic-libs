import { describe, expect, expectTypeOf, it } from "vitest";
import { createTheme, defaultTheme } from "../theme";
import type { Color, SemanticColor } from "../theme";
import { textColor } from "../colors";
import { resolveToLiteral } from "./tokenResolution";

const resolve = (name: string) => resolveToLiteral(defaultTheme, name);

describe("semantic tokens", () => {
  it("new tokens resolve to today's shades", () => {
    expect(resolve("text-clr-secondary")).toBe(resolve("neutral600"));
    expect(resolve("background-clr-raised")).toBe(resolve("neutral50"));
    expect(resolve("border-clr-focus")).toBe(resolve("neutral600"));
    expect(resolve("info-clr-solid")).toBe(resolve("primary600"));
    expect(resolve("info-clr-subtle")).toBe(resolve("primary100"));
    expect(resolve("error-clr-subtle-text")).toBe(resolve("error800"));
    expect(resolve("warning-clr-subtle-border")).toBe(resolve("warning300"));
    expect(resolve("text-clr-on-accent")).toBe(resolve("neutral50"));
    expect(resolve("accent-clr-hover")).toBe(resolve("primary800"));
    expect(resolve("shadow-lg")).toBe("0 10px 40px hsla(0, 0%, 0%, 0.25)");
  });

  it("palette overrides flow through semantic tokens", () => {
    const theme = createTheme({
      base: defaultTheme,
      variables: { primary700: "red" },
    });
    expect(resolveToLiteral(theme, "accent-clr")).toBe("red");
  });

  it("overriding a deprecated name reaches its replacement", () => {
    const theme = createTheme({
      base: defaultTheme,
      variables: {
        "accent-clr-alt": "red",
        "text-clr-inverted": "white",
        "info-clr": "pink",
      },
    });
    expect(resolveToLiteral(theme, "accent-clr-hover")).toBe("red");
    expect(resolveToLiteral(theme, "text-clr-on-accent")).toBe("white");
    expect(resolveToLiteral(theme, "info-clr-subtle")).toBe("pink");
  });

  it("color props accept palette, semantic and deprecated names", () => {
    for (const name of ["neutral100", "text-clr-secondary", "text-clr-alt"]) {
      expect(textColor({ $color: name, theme: defaultTheme })).toEqual({
        color: `var(--${name})`,
      });
    }
  });

  it("types separate semantic names from deprecated ones", () => {
    expectTypeOf<"text-clr-secondary">().toMatchTypeOf<SemanticColor>();
    expectTypeOf<"text-clr-alt">().not.toMatchTypeOf<SemanticColor>();
    expectTypeOf<"neutral100">().toMatchTypeOf<Color>();
  });
});
