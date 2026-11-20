import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { describe, expect, it } from "vitest";
import { createTheme, Theme } from "../theme";
import { resolveToLiteral } from "./tokenResolution";

/** Renders a theme's global style and returns the CSS text, whitespace-stripped. */
function cssOf(theme: Theme): string {
  const sheet = new ServerStyleSheet();
  try {
    renderToString(sheet.collectStyles(createElement(theme._Component)));
    return sheet
      .getStyleTags()
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, "");
  } finally {
    sheet.seal();
  }
}

/** The declarations inside the block whose selector is exactly `selector`. */
function block(css: string, selector: string): string {
  const start = css.indexOf(`${selector}{`);
  if (start === -1) return "";
  const open = start + selector.length + 1;
  return css.slice(open, css.indexOf("}", open));
}

describe("createTheme color schemes", () => {
  it("theme without schemes is unchanged", () => {
    const theme = createTheme({ variables: { a: "red" } });
    expect(theme.variables).toEqual({ a: "red" });
    expect(Object.keys(theme.colorSchemes)).toEqual(["light"]);

    const css = cssOf(theme);
    expect(block(css, ":root")).toContain("--a:red");
    expect(css).not.toContain("data-color-scheme");
  });

  it("base block holds shared + light; dark block holds only overrides", () => {
    const theme = createTheme({
      variables: { gap: "4px" },
      colorSchemes: {
        light: { variables: { bg: "white" } },
        dark: { variables: { bg: "black" } },
      },
    });
    const css = cssOf(theme);

    const base = block(css, ":root");
    expect(base).toContain("--gap:4px");
    expect(base).toContain("--bg:white");
    expect(base).toContain("color-scheme:light");

    const dark = block(css, '[data-color-scheme="dark"]');
    expect(dark).toContain("--bg:black");
    expect(dark).toContain("color-scheme:dark");
    expect(dark).not.toContain("--gap");
    expect(css.indexOf(":root{")).toBeLessThan(
      css.indexOf('[data-color-scheme="dark"]{')
    );
  });

  it("light always exists and is the base scheme", () => {
    const theme = createTheme({
      variables: { bg: "white" },
      colorSchemes: { dark: { variables: { bg: "black" } } },
    });
    expect(Object.keys(theme.colorSchemes)).toContain("light");
    expect(resolveToLiteral(theme, "bg")).toBe("white");
    expect(block(cssOf(theme), ":root")).toContain("color-scheme:light");
  });

  it("scheme values win over shared variables, including a base theme's", () => {
    const base = createTheme({
      colorSchemes: { light: { variables: { "accent-clr": "teal" } } },
    });
    const sharedOnly = createTheme({
      base,
      variables: { "accent-clr": "red" },
    });
    expect(resolveToLiteral(sharedOnly, "accent-clr")).toBe("teal");

    const perScheme = createTheme({
      base,
      colorSchemes: { light: { variables: { "accent-clr": "red" } } },
    });
    expect(resolveToLiteral(perScheme, "accent-clr")).toBe("red");
  });

  it("child scheme values merge per scheme", () => {
    const base = createTheme({
      colorSchemes: { dark: { variables: { a: "1", b: "2" } } },
    });
    const child = createTheme({
      base,
      colorSchemes: { dark: { variables: { b: "3" } } },
    });
    expect(child.colorSchemes.dark.variables).toEqual({ a: "1", b: "3" });
  });

  it("keeps the shared layer separate from scheme values", () => {
    const base = createTheme({
      variables: { gap: "4px" },
      colorSchemes: { light: { variables: { bg: "white" } } },
    });
    const child = createTheme({ base });
    expect(child.variables).toEqual({ gap: "4px" });
    expect(child.colorSchemes.light.variables).toEqual({ bg: "white" });
  });

  it("non-base schemes resolve on top of the base scheme", () => {
    const theme = createTheme({
      colorSchemes: {
        light: { variables: { bg: "white", fg: "black" } },
        dark: { variables: { bg: "black" } },
      },
    });
    expect(resolveToLiteral(theme, "bg", "dark")).toBe("black");
    expect(resolveToLiteral(theme, "fg", "dark")).toBe("black");
  });

  it("resolves aliases across layers", () => {
    const theme = createTheme({
      variables: { y: "blue" },
      colorSchemes: { dark: { variables: { x: "{y}" } } },
    });
    expect(theme.colorSchemes.dark.variables.x).toBe("{y}");
    expect(resolveToLiteral(theme, "x", "dark")).toBe("blue");
  });

  it("requires a mode for schemes not named light or dark", () => {
    expect(() =>
      createTheme({ colorSchemes: { dim: { variables: { bg: "gray" } } } })
    ).toThrow(/mode/);
  });

  it("throws for aliases to undefined tokens", () => {
    expect(() =>
      createTheme({ colorSchemes: { dark: { variables: { x: "{nope}" } } } })
    ).toThrow(/nope/);
  });

  it("isToken recognizes shared and scheme tokens", () => {
    const base = createTheme({
      variables: { gap: "4px" },
      colorSchemes: {
        light: { variables: { bg: "white" } },
        dark: { variables: { "dark-only": "black" } },
      },
    });
    const theme = createTheme({ base, variables: { extra: "1" } });

    expect(theme.isToken("gap")).toBe(true);
    expect(theme.isToken("bg")).toBe(true);
    expect(theme.isToken("dark-only")).toBe(true);
    expect(theme.isToken("extra")).toBe(true);
    expect(theme.isToken("#ff0000")).toBe(false);
    expect(theme.isToken("red")).toBe(false);
  });
});
