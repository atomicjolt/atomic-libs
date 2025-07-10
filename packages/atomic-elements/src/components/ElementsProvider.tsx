import { createContext, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { CssGlobalDefaults } from "@styles/globals";
import { defaultTheme, Theme } from "@styles/theme";

export interface ElementsConfig {
  /** The theme to be used by the application. */
  theme?: Theme;
  /**Flag to determine if default styles should be applied.
   * NOTE: this will apply some styles globally to your page,
   * so only use this if you are not using a global style reset already.
   */
  applyDefaultStyles?: boolean;
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
 * wrap the root of the application and provides the theme and global styles
 */
export function ElementsProvider(props: ElementsProviderProps) {
  const { children, theme = defaultTheme, applyDefaultStyles = false } = props;
  const CssVariables = theme._Component;

  return (
    <ElementsProviderContext.Provider value={{ theme, applyDefaultStyles }}>
      <ThemeProvider theme={theme}>
        <CssVariables />
        {applyDefaultStyles && <CssGlobalDefaults />}
        {children}
      </ThemeProvider>
    </ElementsProviderContext.Provider>
  );
}
