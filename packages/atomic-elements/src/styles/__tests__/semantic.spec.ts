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

  it("semantic tokens live in the light scheme", () => {
    expect(defaultTheme.colorSchemes.light.variables["text-clr"]).toBe(
      "{neutral800}"
    );
    expect(defaultTheme.sharedVariables).not.toHaveProperty("text-clr");
    expect(resolveToLiteral(defaultTheme, "text-clr", "light")).toBe(
      resolveToLiteral(defaultTheme, "text-clr")
    );
  });

  it("fill and role tokens keep today's shades", () => {
    const same: [string, string][] = [
      ["accent-clr-fill", "primary700"],
      ["accent-clr-fill-hover", "primary800"],
      ["error-clr-fill", "error700"],
      ["error-clr-fill-hover", "error800"],
      ["success-clr-fill", "success700"],
      ["success-clr-fill-hover", "success800"],
      ["warning-clr-fill", "warning700"],
      ["warning-clr-fill-hover", "warning800"],
      ["text-clr-tertiary", "neutral400"],
      ["background-clr-disabled", "neutral300"],
    ];
    for (const [token, shade] of same) {
      expect(resolve(token), token).toBe(resolve(shade));
    }
  });

  it("dark scheme anchors", () => {
    const dark = (name: string) => resolveToLiteral(defaultTheme, name, "dark");
    expect(defaultTheme.colorSchemes.dark.mode).toBe("dark");
    expect(dark("background-clr")).toBe(resolve("neutral900"));
    expect(dark("background-clr-raised")).toBe(resolve("neutral800"));
    expect(dark("text-clr")).toBe(resolve("neutral100"));
    expect(dark("text-clr-secondary")).toBe(resolve("neutral300"));
    expect(dark("border-clr")).toBe(resolve("neutral700"));
    expect(dark("accent-clr")).toBe(resolve("primary400"));
  });

  it("dark scheme overrides deprecated source names", () => {
    const darkVariables = defaultTheme.colorSchemes.dark.variables;
    for (const [source, replacement] of [
      ["text-clr-alt", "text-clr-secondary"],
      ["background-clr-alt", "background-clr-subtle"],
      ["border-clr-primary", "border-clr"],
      ["accent-clr-alt", "accent-clr-hover"],
      ["info-clr", "info-clr-subtle"],
    ]) {
      expect(darkVariables, source).toHaveProperty(source);
      expect(darkVariables, replacement).not.toHaveProperty(replacement);
    }
  });

  it("consumer override of a deprecated name reaches dark", () => {
    const theme = createTheme({
      base: defaultTheme,
      variables: { "text-clr-alt": "red" },
    });
    expect(resolveToLiteral(theme, "text-clr-secondary", "dark")).toBe("red");
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
