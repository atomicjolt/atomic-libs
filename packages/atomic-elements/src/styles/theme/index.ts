import { createTheme } from "./theme";
import { palette, PaletteColor } from "./palette";
import * as foundations from "./foundations";
import {
  semanticColors,
  deprecatedColors,
  effects,
  darkColors,
  darkEffects,
} from "./semantic";
import type { SemanticColor } from "./semantic";
import * as component from "./component";

export { createTheme, variableAlias } from "./theme";
export type {
  ColorSchemeConfig,
  ColorSchemeMode,
  ResolvedColorScheme,
} from "./theme";
export type { Theme } from "./theme";
export type { PaletteColor } from "./palette";
export type { SemanticColor } from "./semantic";

/** Any color token name: a palette shade or a semantic color. */
export type Color = PaletteColor | SemanticColor;

/** Tokens shared by every color scheme. */
const sharedVariables = {
  ...foundations.border,
  ...foundations.font,
  ...foundations.fontSize,
  ...foundations.letterSpacing,
  ...foundations.lineHeight,
  ...palette,
  ...foundations.sizes,
  ...foundations.spacing,
  ...foundations.iconSizes,
  ...component.input,
  ...component.button,
  ...component.banner,
  ...component.dropdown,
  ...component.menu,
  ...component.listbox,
  ...component.textarea,
  ...component.toggle,
  ...component.loader,
  ...component.skeleton,
  ...component.table,
  ...component.tab,
  ...component.popover,
  ...component.checkbox,
  ...component.radio,
  ...component.time,
  ...component.calendar,
  ...component.card,
  ...component.tooltip,
  ...component.chip,
  ...component.divider,
  ...component.link,
  ...component.animation,
  ...component.list,
  ...component.progressCircle,
  ...component.scrollArea,
} as const;

/** The light scheme: semantic colors and effects as they've always been. */
const lightScheme = {
  ...semanticColors,
  ...deprecatedColors,
  ...effects,
};

/** Every token name in the default theme. */
export const variables = { ...sharedVariables, ...lightScheme } as const;

export const defaultTheme = createTheme({
  variables: sharedVariables,
  colorSchemes: {
    light: { mode: "light", variables: lightScheme },
    dark: { mode: "dark", variables: { ...darkColors, ...darkEffects } },
  },
});
