import { useCallback, useContext, useMemo, useState } from "react";
import type { Theme } from "@styles/theme";
import { useIsomorphicLayoutEffect } from "../../hooks/useIsomorphicLayoutEffect";
import {
  acquireDocumentColorScheme,
  isKnownColorScheme,
  resolveColorScheme,
  setDocumentColorScheme,
  SYSTEM_COLOR_SCHEME,
} from "./colorScheme";
import {
  ColorSchemeContext,
  ColorSchemeState,
} from "./ColorScheme.context";
import { usePrefersDark } from "./usePrefersDark";

export interface ColorSchemeOptions {
  /** The color scheme to show: a scheme name from the theme (e.g. `"light"`,
   * `"dark"`) or `"system"` to follow the OS setting. When set, the app owns
   * the value; `setColorScheme` from `useColorScheme` only calls
   * `onColorSchemeChange`. Only one (top-level) provider per page sets this.
   */
  colorScheme?: string;
  /** Starting color scheme when `colorScheme` isn't set; the provider then
   * keeps track of changes itself. Defaults to the theme's base scheme. */
  defaultColorScheme?: string;
  /** Called when `setColorScheme` is used. Store the choice here. */
  onColorSchemeChange?: (scheme: string) => void;
}

export interface ColorSchemeProviderProps extends ColorSchemeOptions {
  theme: Theme;
  children?: React.ReactNode;
}

/**
 * Owns the page's color scheme: resolves the requested scheme (including
 * `"system"`), keeps `data-color-scheme` on `<html>` in sync, and provides
 * `useColorScheme`. Rendered by `ElementsProvider`; nested providers follow
 * the outermost one.
 */
export function ColorSchemeProvider(props: ColorSchemeProviderProps) {
  const {
    theme,
    colorScheme,
    defaultColorScheme,
    onColorSchemeChange,
    children,
  } = props;

  const parent = useContext(ColorSchemeContext);
  const nested = parent !== null;

  const [uncontrolledScheme, setUncontrolledScheme] = useState(
    defaultColorScheme ?? theme.baseColorScheme
  );
  const requested = colorScheme ?? uncontrolledScheme;
  const prefersDark = usePrefersDark(
    !nested && requested === SYSTEM_COLOR_SCHEME
  );
  const resolved = resolveColorScheme(theme, requested, prefersDark);

  const setColorScheme = useCallback(
    (next: string) => {
      if (colorScheme === undefined) setUncontrolledScheme(next);
      onColorSchemeChange?.(next);
    },
    [colorScheme, onColorSchemeChange]
  );

  const ownState = useMemo<ColorSchemeState>(
    () => ({
      colorScheme: requested,
      resolvedColorScheme: resolved,
      setColorScheme,
      colorSchemes: Object.keys(theme.colorSchemes),
    }),
    [requested, resolved, setColorScheme, theme]
  );

  const state = nested ? parent : ownState;

  useIsomorphicLayoutEffect(() => {
    if (
      nested &&
      (colorScheme !== undefined || defaultColorScheme !== undefined)
    ) {
      console.warn(
        "ElementsProvider: color scheme props are ignored on nested providers; the outer provider decides the page's color scheme"
      );
    }
  }, [nested, colorScheme, defaultColorScheme]);

  useIsomorphicLayoutEffect(() => {
    if (!nested && !isKnownColorScheme(theme, requested)) {
      console.warn(
        `ElementsProvider: unknown color scheme "${requested}"; using "${resolved}"`
      );
    }
  }, [nested, theme, requested, resolved]);

  useIsomorphicLayoutEffect(() => {
    if (nested) return;
    const { release, alreadyMounted } = acquireDocumentColorScheme();
    if (alreadyMounted) {
      console.warn(
        "ElementsProvider: only one ElementsProvider should be mounted per page; they share the page's color scheme"
      );
    }
    return release;
  }, [nested]);

  useIsomorphicLayoutEffect(() => {
    if (!nested) setDocumentColorScheme(resolved);
  }, [nested, resolved]);

  return (
    <ColorSchemeContext.Provider value={state}>
      {children}
    </ColorSchemeContext.Provider>
  );
}
