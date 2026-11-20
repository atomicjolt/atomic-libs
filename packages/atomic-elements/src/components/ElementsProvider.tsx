import { createContext, useContext, useMemo } from "react";
import { StyleSheetManager, ThemeProvider } from "styled-components";
import { CssGlobalDefaults } from "@styles/globals";
import { defaultTheme, Theme } from "@styles/theme";
import { layerPlugin } from "@styles/plugins";
import { ColorSchemeOptions, ColorSchemeProvider } from "./ColorScheme";

export interface ElementsConfig extends ColorSchemeOptions {
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
}

export interface ElementsProviderProps extends ElementsConfig {
  children?: React.ReactNode;
}

const ElementsProviderContext = createContext<ElementsConfig | null>(null);

export function useElementsConfig(): ElementsConfig {
  const context = useContext(ElementsProviderContext);

  if (!context) {
    throw new Error("useProvider must be used within a Provider");
  }

  return context;
}

/** The provider for an Elements Application. It is intended to
 * wrap the root of the application and provides the theme, global styles
 * and color scheme.
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
        value={{ theme, applyDefaultStyles, layerName }}
      >
        <ThemeProvider theme={theme}>
          <ColorSchemeProvider
            theme={theme}
            colorScheme={colorScheme}
            defaultColorScheme={defaultColorScheme}
            onColorSchemeChange={onColorSchemeChange}
          >
            <CssVariables />
            {applyDefaultStyles && <CssGlobalDefaults />}
            {children}
          </ColorSchemeProvider>
        </ThemeProvider>
      </ElementsProviderContext.Provider>
    </StyleSheetManager>
  );
}
