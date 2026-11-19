import { describe, expect, expectTypeOf, it } from "vitest";
import { createTheme, defaultTheme } from "../theme";
import type { Color, SemanticColor } from "../theme";
import { textColor } from "../colors";
import { resolveToLiteral } from "./tokenResolution";

const resolve = (name: string) => resolveToLiteral(defaultTheme, name);

describe("semantic tokens", () => {
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

  it("background-clr overrides still reach dropdown surfaces", () => {
    const theme = createTheme({
      base: defaultTheme,
      variables: { "background-clr": "beige" },
    });
    for (const name of ["dropdown-bg-clr", "menu-bg-clr", "listbox-bg-clr"]) {
      expect(resolveToLiteral(theme, name), name).toBe("beige");
    }
  });

  it("outline color overrides still reach focused input borders", () => {
    for (const name of ["outline-clr-primary", "outline-clr"]) {
      const theme = createTheme({
        base: defaultTheme,
        variables: { [name]: "purple" },
      });
      expect(resolveToLiteral(theme, "border-clr-focus"), name).toBe("purple");
    }
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
