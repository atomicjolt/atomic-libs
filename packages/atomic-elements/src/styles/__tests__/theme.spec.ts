import { createElement } from "react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { describe, expect, it } from "vitest";
import { createTheme, Theme } from "../theme";

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
    expect(theme.resolvedVariables["--a"]).toBe("red");
    expect(theme.baseColorScheme).toBe("light");
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

  it("base scheme is the first scheme when there is no light scheme", () => {
    const theme = createTheme({
      colorSchemes: {
        dark: { variables: { bg: "black" } },
        dim: { mode: "dark", variables: { bg: "gray" } },
      },
    });
    expect(theme.baseColorScheme).toBe("dark");
    expect(theme.resolvedVariables["--bg"]).toBe("black");
  });

  it("custom selector scopes scheme blocks", () => {
    const theme = createTheme({
      cssVarsSelector: ".app",
      colorSchemes: {
        light: { variables: { bg: "white" } },
        dark: { variables: { bg: "black" } },
      },
    });
    const css = cssOf(theme);
    expect(
      block(css, '[data-color-scheme="dark"].app,.app[data-color-scheme="dark"]')
    ).toContain("--bg:black");
  });

  it("child shared variables beat base scheme values", () => {
    const base = createTheme({
      variables: { "accent-clr": "teal" },
      colorSchemes: { dark: { variables: { "accent-clr": "aqua" } } },
    });
    const child = createTheme({ base, variables: { "accent-clr": "red" } });

    expect(child.colorSchemes.dark.resolvedVariables["--accent-clr"]).toBe(
      "red"
    );
    expect(child.colorSchemes.dark.variables).not.toHaveProperty("accent-clr");
    expect(block(cssOf(child), '[data-color-scheme="dark"]')).not.toContain(
      "--accent-clr"
    );
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
    expect(child.sharedVariables).toEqual({ gap: "4px" });
    expect(child.variables).toHaveProperty("bg", "white");
  });

  it("resolves aliases across layers", () => {
    const theme = createTheme({
      variables: { y: "blue" },
      colorSchemes: { dark: { variables: { x: "{y}" } } },
    });
    expect(theme.colorSchemes.dark.resolvedVariables["--x"]).toBe("var(--y)");
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

  it("getVarValue uses the base scheme", () => {
    const theme = createTheme({
      colorSchemes: {
        light: { variables: { bg: "white" } },
        dark: { variables: { bg: "black" } },
      },
    });
    expect(theme.getVarValue("bg")).toBe("white");
  });
});
