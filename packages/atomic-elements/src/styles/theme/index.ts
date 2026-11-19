import { createTheme } from "./theme";
import { palette, PaletteColor } from "./palette";
import * as foundations from "./foundations";
import { semanticColors, deprecatedColors, effects } from "./semantic";
import type { SemanticColor } from "./semantic";
import * as component from "./component";

export { createTheme, variableAlias } from "./theme";
export type { Theme } from "./theme";
export type { PaletteColor } from "./palette";
export type { SemanticColor } from "./semantic";

/** Any color token name: a palette shade or a semantic color. */
export type Color = PaletteColor | SemanticColor;

export const variables = {
  ...foundations.border,
  ...foundations.font,
  ...foundations.fontSize,
  ...foundations.letterSpacing,
  ...foundations.lineHeight,
  ...palette,
  ...semanticColors,
  ...deprecatedColors,
  ...effects,
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

export const defaultTheme = createTheme({ variables });
