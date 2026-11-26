import React from "react";
import { ToggleSwitch, useColorScheme } from "@atomicjolt/atomic-elements";

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
