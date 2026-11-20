import { act, render, renderHook } from "@testing-library/react";
import { renderToString } from "react-dom/server";
import { ServerStyleSheet } from "styled-components";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ElementsProvider } from "./ElementsProvider";
import { useColorScheme } from "./ColorScheme";

/** A matchMedia stand-in whose dark-mode preference can be flipped. */
function mockPrefersDark(initial: boolean) {
  let matches = initial;
  const listeners = new Set<(event: { matches: boolean }) => void>();
  vi.stubGlobal(
    "matchMedia",
    vi.fn().mockImplementation((query: string) => ({
      get matches() {
        return query.includes("dark") ? matches : false;
      },
      media: query,
      addEventListener: (_: string, fn: (e: { matches: boolean }) => void) =>
        listeners.add(fn),
      removeEventListener: (_: string, fn: (e: { matches: boolean }) => void) =>
        listeners.delete(fn),
    }))
  );
  return (next: boolean) => {
    matches = next;
    act(() => listeners.forEach((fn) => fn({ matches: next })));
  };
}

const attribute = () => document.documentElement.dataset.colorScheme;

let warn: ReturnType<typeof vi.spyOn>;

beforeEach(() => {
  mockPrefersDark(false);
  warn = vi.spyOn(console, "warn").mockImplementation(() => {});
});

afterEach(() => {
  vi.unstubAllGlobals();
  warn.mockRestore();
});

function cssFor(element: React.ReactElement): string {
  const sheet = new ServerStyleSheet();
  try {
    renderToString(sheet.collectStyles(element));
    return sheet.getStyleTags().replace(/\s+/g, "");
  } finally {
    sheet.seal();
  }
}

describe("ElementsProvider color schemes", () => {
  it("defaults to light and adds no body rule", () => {
    render(<ElementsProvider>content</ElementsProvider>);
    expect(attribute()).toBe("light");

    const css = cssFor(<ElementsProvider applyDefaultStyles>x</ElementsProvider>);
    expect(css).not.toContain('[data-color-scheme="light"]body');
  });

  it("applyDefaultStyles adds a body rule for non-base schemes only", () => {
    const css = cssFor(<ElementsProvider applyDefaultStyles>x</ElementsProvider>);
    expect(css).toContain('[data-color-scheme="dark"]body{');
    expect(cssFor(<ElementsProvider>x</ElementsProvider>)).not.toContain(
      "]body{"
    );
  });

  it("is controlled by colorScheme", () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useColorScheme(), {
      wrapper: ({ children }) => (
        <ElementsProvider colorScheme="dark" onColorSchemeChange={onChange}>
          {children}
        </ElementsProvider>
      ),
    });
    expect(attribute()).toBe("dark");

    act(() => result.current.setColorScheme("light"));
    expect(onChange).toHaveBeenCalledWith("light");
    expect(attribute()).toBe("dark");
    expect(result.current.resolvedColorScheme).toBe("dark");
  });

  it("manages its own state with defaultColorScheme", () => {
    const onChange = vi.fn();
    const { result } = renderHook(() => useColorScheme(), {
      wrapper: ({ children }) => (
        <ElementsProvider
          defaultColorScheme="dark"
          onColorSchemeChange={onChange}
        >
          {children}
        </ElementsProvider>
      ),
    });
    expect(attribute()).toBe("dark");

    act(() => result.current.setColorScheme("light"));
    expect(attribute()).toBe("light");
    expect(onChange).toHaveBeenCalledWith("light");
    expect(result.current.colorSchemes).toEqual(["light", "dark"]);
  });

  it("follows the OS live with system", () => {
    const setPrefersDark = mockPrefersDark(true);
    const { result } = renderHook(() => useColorScheme(), {
      wrapper: ({ children }) => (
        <ElementsProvider colorScheme="system">{children}</ElementsProvider>
      ),
    });
    expect(attribute()).toBe("dark");

    setPrefersDark(false);
    expect(attribute()).toBe("light");
    expect(result.current.colorScheme).toBe("system");
    expect(result.current.resolvedColorScheme).toBe("light");
  });

  it("warns and falls back for unknown schemes", () => {
    render(<ElementsProvider colorScheme="sepia">x</ElementsProvider>);
    expect(attribute()).toBe("light");
    expect(warn).toHaveBeenCalledWith(expect.stringContaining("sepia"));
  });

  it("nested providers don't touch the attribute", () => {
    const { result } = renderHook(() => useColorScheme(), {
      wrapper: ({ children }) => (
        <ElementsProvider colorScheme="dark">
          <ElementsProvider colorScheme="light">{children}</ElementsProvider>
        </ElementsProvider>
      ),
    });
    expect(attribute()).toBe("dark");
    expect(result.current.resolvedColorScheme).toBe("dark");
    expect(warn).toHaveBeenCalledWith(expect.stringContaining("nested"));
  });

  it("warns for a second top-level provider and keeps the attribute until the last unmounts", () => {
    const first = render(<ElementsProvider colorScheme="dark">a</ElementsProvider>);
    const second = render(<ElementsProvider colorScheme="dark">b</ElementsProvider>);
    expect(warn).toHaveBeenCalledWith(
      expect.stringContaining("only one ElementsProvider")
    );

    first.unmount();
    expect(attribute()).toBe("dark");
    second.unmount();
    expect(attribute()).toBeUndefined();
  });

  it("removes the attribute on unmount", () => {
    const { unmount } = render(<ElementsProvider>x</ElementsProvider>);
    unmount();
    expect(attribute()).toBeUndefined();
  });

  it("useColorScheme throws outside a provider", () => {
    expect(() => renderHook(() => useColorScheme())).toThrow(/Provider/);
  });
});
