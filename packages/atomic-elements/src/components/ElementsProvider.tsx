import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  useSyncExternalStore,
} from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { CssGlobalDefaults } from "@styles/globals";
import { defaultTheme, Theme } from "@styles/theme";
import { layerPlugin } from "@styles/plugins";
import { useIsomorphicLayoutEffect } from "../hooks/useIsomorphicLayoutEffect";
import {
  acquireDocumentColorScheme,
  isKnownColorScheme,
  resolveColorScheme,
  setDocumentColorScheme,
  SYSTEM_COLOR_SCHEME,
} from "./colorScheme";

export interface ElementsConfig {
  /** The theme to be used by the application. */
  theme?: Theme;
  /** Flag to determine if default styles should be applied.
   * NOTE: this will apply some styles globally to your page,
   * so only use this if you are not using a global style reset already.
   */
  applyDefaultStyles?: boolean;

  /** The name of the CSS layer to use for the components' styles.
   * @default "elements"
   */
  layerName?: string | null;

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

export interface ColorSchemeState {
  /** The requested scheme: a name or `"system"`. */
  colorScheme: string;
  /** The scheme actually shown. */
  resolvedColorScheme: string;
  setColorScheme: (scheme: string) => void;
  /** Scheme names available in the theme. */
  colorSchemes: string[];
}

export interface ElementsProviderProps extends ElementsConfig {
  children?: React.ReactNode;
}

interface ElementsContextValue extends ElementsConfig {
  colorSchemeState: ColorSchemeState;
}

const ElementsProviderContext = createContext<ElementsContextValue | null>(
  null
);

export function useElementsConfig(): ElementsConfig {
  const context = useContext(ElementsProviderContext);

  if (!context) {
    throw new Error("useProvider must be used within a Provider");
  }

  return context;
}

/** The active color scheme, and a way to change it. */
export function useColorScheme(): ColorSchemeState {
  const context = useContext(ElementsProviderContext);

  if (!context) {
    throw new Error("useColorScheme must be used within an ElementsProvider");
  }

  return context.colorSchemeState;
}

const DARK_QUERY = "(prefers-color-scheme: dark)";

/** Whether the OS prefers dark, tracked live. Always false when `enabled` is false. */
function usePrefersDark(enabled: boolean): boolean {
  const supported =
    enabled &&
    typeof window !== "undefined" &&
    typeof window.matchMedia === "function";

  const subscribe = useCallback(
    (onChange: () => void) => {
      if (!supported) return () => {};
      const query = window.matchMedia(DARK_QUERY);
      query.addEventListener("change", onChange);
      return () => query.removeEventListener("change", onChange);
    },
    [supported]
  );

  return useSyncExternalStore(
    subscribe,
    () => supported && window.matchMedia(DARK_QUERY).matches,
    () => false
  );
}

/** The provider for an Elements Application. It is intended to
 * wrap the root of the application and provides the theme and global styles
 */
export function ElementsProvider(props: ElementsProviderProps) {
  const {
    children,
    theme = defaultTheme,
    applyDefaultStyles = false,
    layerName = "elements",
    colorScheme,
    defaultColorScheme,
    onColorSchemeChange,
  } = props;

  const parent = useContext(ElementsProviderContext);
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

  const colorSchemeState = nested ? parent.colorSchemeState : ownState;

  useIsomorphicLayoutEffect(() => {
    if (nested && (colorScheme !== undefined || defaultColorScheme !== undefined)) {
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

  const CssVariables = theme._Component;

  const plugins = useMemo(() => {
    const plugins = [];

    if (layerName) {
      plugins.push(layerPlugin({ name: layerName }));
    }

    return plugins;
  }, [layerName]);

  return (
    <StyleSheetManager stylisPlugins={plugins}>
      <ElementsProviderContext.Provider
        value={{ theme, applyDefaultStyles, layerName, colorSchemeState }}
      >
        <ThemeProvider theme={theme}>
          <CssVariables />
          {applyDefaultStyles && <CssGlobalDefaults />}
          {children}
        </ThemeProvider>
      </ElementsProviderContext.Provider>
    </StyleSheetManager>
  );
}
