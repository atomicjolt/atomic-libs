import React from "react";
// Import from source, the same copy index.tsx uses for ElementsProvider,
// so useColorScheme finds the provider's context.
import {
  ToggleSwitch,
  useColorScheme,
} from "../../packages/atomic-elements/src";

/** Flips the playground between the light and dark color schemes. */
export function ColorSchemeToggle() {
  const { resolvedColorScheme, setColorScheme } = useColorScheme();

  return (
    <ToggleSwitch
      isSelected={resolvedColorScheme === "dark"}
      onChange={(isDark) => setColorScheme(isDark ? "dark" : "light")}
    >
      Dark mode
    </ToggleSwitch>
  );
}
