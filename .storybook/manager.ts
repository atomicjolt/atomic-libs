import { addons } from "storybook/manager-api";
import { atomicDarkTheme, atomicLightTheme } from "./atomicTheme";

/*
 * Storybook's own UI follows the operating system's light/dark setting.
 * The toolbar's "Color scheme" only affects the components being
 * previewed, so checking a component in dark mode doesn't repaint the
 * whole workspace.
 */
const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");
const uiTheme = () =>
  prefersDark.matches ? atomicDarkTheme : atomicLightTheme;

addons.setConfig({
  theme: uiTheme(),
});

// Keep up when the OS setting changes while Storybook is open.
addons.register("atomic/ui-theme", (api) => {
  prefersDark.addEventListener("change", () => {
    api.setOptions({ theme: uiTheme() });
  });
});
