import { afterEach, describe, expect, it } from "vitest";
import { createTheme, defaultTheme } from "@styles/theme";
import {
  acquireDocumentColorScheme,
  resolveColorScheme,
  setDocumentColorScheme,
} from "./colorScheme";

describe("resolveColorScheme", () => {
  it("returns a named scheme as-is", () => {
    expect(resolveColorScheme(defaultTheme, "dark", false)).toBe("dark");
  });

  it("maps system to the OS preference", () => {
    expect(resolveColorScheme(defaultTheme, "system", true)).toBe("dark");
    expect(resolveColorScheme(defaultTheme, "system", false)).toBe("light");
  });

  it("falls back to the base scheme for unknown names", () => {
    expect(resolveColorScheme(defaultTheme, "sepia", false)).toBe("light");
  });

  it("maps system to a custom scheme by mode when no dark scheme exists", () => {
    const theme = createTheme({
      colorSchemes: {
        light: { variables: { bg: "white" } },
        dim: { mode: "dark", variables: { bg: "gray" } },
      },
    });
    expect(resolveColorScheme(theme, "system", true)).toBe("dim");
  });

  it("falls back to the base scheme when no scheme matches the OS mode", () => {
    const theme = createTheme({ variables: { a: "1" } });
    expect(resolveColorScheme(theme, "system", true)).toBe("light");
  });
});

describe("document color scheme", () => {
  afterEach(() => {
    delete document.documentElement.dataset.colorScheme;
  });

  it("removes the attribute only after the last provider releases", () => {
    const first = acquireDocumentColorScheme();
    const second = acquireDocumentColorScheme();
    expect(first.alreadyMounted).toBe(false);
    expect(second.alreadyMounted).toBe(true);

    setDocumentColorScheme("dark");
    first.release();
    expect(document.documentElement.dataset.colorScheme).toBe("dark");
    second.release();
    expect(document.documentElement.dataset.colorScheme).toBeUndefined();
  });
});
