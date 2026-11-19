import { createContext, useContext } from "react";

export interface ColorSchemeState {
  /** The requested scheme: a name or `"system"`. */
  colorScheme: string;
  /** The scheme actually shown. */
  resolvedColorScheme: string;
  setColorScheme: (scheme: string) => void;
  /** Scheme names available in the theme. */
  colorSchemes: string[];
}

export const ColorSchemeContext = createContext<ColorSchemeState | null>(null);

/** The active color scheme, and a way to change it. */
export function useColorScheme(): ColorSchemeState {
  const context = useContext(ColorSchemeContext);

  if (!context) {
    throw new Error("useColorScheme must be used within an ElementsProvider");
  }

  return context;
}
