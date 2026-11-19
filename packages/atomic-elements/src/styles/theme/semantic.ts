/**
 * Semantic color tokens: what a color is for, not which shade it is.
 * Components reference these (never palette shades), so color schemes can
 * remap them without touching components.
 *
 * Tokens that replace a deprecated name reference that name, so consumer
 * themes that override the old name keep reaching components.
 */
// prettier-ignore
export const semanticColors = {
  // Surfaces
  "background-clr": "{neutral50}",
  "background-clr-subtle": "{background-clr-alt}",
  "background-clr-hover": "{neutral100}",
  "background-clr-subtle-hover": "{neutral200}",
  "background-clr-active": "{neutral300}",
  "background-clr-strong": "{neutral400}",
  "background-clr-disabled": "{neutral300}",
  "background-clr-raised": "{background-clr}",
  "background-clr-inverted": "{neutral800}",
  "backdrop-clr": "hsla(0, 0%, 100%, 0.75)",

  // Text & icons
  "text-clr": "{neutral800}",
  "text-clr-secondary": "{text-clr-alt}",
  "text-clr-tertiary": "{neutral400}",
  "text-clr-disabled": "{neutral400}",
  "text-clr-inverted": "{neutral50}",
  "text-clr-on-accent": "{text-clr-inverted}",
  "icon-clr-secondary": "{neutral600}",
  "indicator-clr": "{neutral500}",

  // Borders & outlines
  "border-clr": "{border-clr-primary}",
  "border-clr-strong": "{neutral600}",
  "border-clr-focus": "{outline-clr}",
  "outline-clr": "{outline-clr-primary}",

  // Accent
  "accent-clr": "{primary700}",
  "accent-clr-hover": "{accent-clr-alt}",
  // Solid fills behind `text-clr-on-accent` (buttons, selected items, checked controls)
  "accent-clr-fill": "{accent-clr}",
  "accent-clr-fill-hover": "{accent-clr-hover}",
  "accent-clr-subtle": "{primary100}",
  "accent-clr-subtle-hover": "{primary200}",

  // Status: solid
  "error-clr": "{error600}",
  "error-clr-hover": "{error-clr-alt}",
  "error-clr-active": "{error800}",
  "error-clr-fill": "{error-clr-hover}",
  "error-clr-fill-hover": "{error-clr-active}",
  "warning-clr": "{warning600}",
  "warning-clr-hover": "{warning-clr-alt}",
  "warning-clr-active": "{warning800}",
  "warning-clr-fill": "{warning-clr-hover}",
  "warning-clr-fill-hover": "{warning-clr-active}",
  "success-clr": "{success600}",
  "success-clr-hover": "{success-clr-alt}",
  "success-clr-active": "{success800}",
  "success-clr-fill": "{success-clr-hover}",
  "success-clr-fill-hover": "{success-clr-active}",
  "info-clr-icon": "{primary700}",
  "info-clr-fill": "{primary600}",
  "info-clr-fill-hover": "{primary700}",
  "info-clr-fill-active": "{primary800}",

  // Status: subtle
  "error-clr-subtle": "{error100}",
  "error-clr-subtle-hover": "{error200}",
  "error-clr-subtle-active": "{error300}",
  "error-clr-subtle-border": "{error300}",
  "error-clr-subtle-text": "{error800}",
  "warning-clr-subtle": "{warning100}",
  "warning-clr-subtle-hover": "{warning200}",
  "warning-clr-subtle-active": "{warning300}",
  "warning-clr-subtle-border": "{warning300}",
  "warning-clr-subtle-text": "{warning800}",
  "success-clr-subtle": "{success100}",
  "success-clr-subtle-hover": "{success200}",
  "success-clr-subtle-active": "{success300}",
  "success-clr-subtle-border": "{success300}",
  "success-clr-subtle-text": "{success800}",
  "info-clr-subtle": "{info-clr}",
  "info-clr-subtle-hover": "{info-clr-alt}",
  "info-clr-subtle-active": "{primary300}",
  "info-clr-subtle-border": "{primary300}",
  "info-clr-subtle-text": "{primary800}",
};

/**
 * Deprecated names, kept until the next major. Each still holds its original
 * value; its replacement (noted below) references it.
 */
// prettier-ignore
export const deprecatedColors = {
  /** @deprecated use `background-clr-subtle` */
  "background-clr-alt": "{neutral100}",
  /** @deprecated use `text-clr-secondary` */
  "text-clr-alt": "{neutral600}",
  /** @deprecated use `border-clr` */
  "border-clr-primary": "{neutral300}",
  /** @deprecated use `outline-clr` */
  "outline-clr-primary": "{neutral600}",
  /** @deprecated use `accent-clr-hover` */
  "accent-clr-alt": "{primary800}",
  /** @deprecated use `error-clr-hover` */
  "error-clr-alt": "{error700}",
  /** @deprecated use `warning-clr-hover` */
  "warning-clr-alt": "{warning700}",
  /** @deprecated use `success-clr-hover` */
  "success-clr-alt": "{success700}",
  /** @deprecated use `info-clr-subtle` (or `info-clr-fill` for a solid fill) */
  "info-clr": "{primary100}",
  /** @deprecated use `info-clr-subtle-hover` */
  "info-clr-alt": "{primary200}",
};

/** Shadows. Defined per color scheme because dark surfaces need heavier ones. */
// prettier-ignore
export const effects = {
  "shadow-sm": "0 1px 3px hsla(0, 0%, 0%, 0.5)",
  "shadow-md": "0 2px 4px 0 hsla(0, 0%, 0%, 0.1)",
  "shadow-lg": "0 10px 40px hsla(0, 0%, 0%, 0.25)",
};

export type SemanticColor = keyof typeof semanticColors;

export const DEPRECATED_TOKEN_NAMES: string[] = Object.keys(deprecatedColors);

/**
 * Dark scheme overrides. Where a renamed token still reads a deprecated name
 * (e.g. `text-clr-secondary` → `text-clr-alt`), the deprecated name is
 * overridden here, so consumer overrides of either name keep working in dark.
 */
// prettier-ignore
export const darkColors = {
  // Surfaces
  "background-clr": "{neutral900}",
  "background-clr-alt": "{neutral800}",
  "background-clr-hover": "{neutral800}",
  "background-clr-subtle-hover": "{neutral700}",
  "background-clr-active": "{neutral600}",
  "background-clr-strong": "{neutral500}",
  "background-clr-disabled": "{neutral700}",
  "background-clr-raised": "{neutral800}",
  "background-clr-inverted": "{neutral100}",
  "backdrop-clr": "hsla(221, 39%, 11%, 0.75)",

  // Text & icons
  "text-clr": "{neutral100}",
  "text-clr-alt": "{neutral300}",
  "text-clr-tertiary": "{neutral500}",
  "text-clr-disabled": "{neutral500}",
  "text-clr-inverted": "{neutral900}",
  "text-clr-on-accent": "{neutral50}",
  "icon-clr-secondary": "{neutral400}",
  "indicator-clr": "{neutral400}",

  // Borders & outlines
  "border-clr-primary": "{neutral700}",
  "border-clr-strong": "{neutral400}",
  "outline-clr-primary": "{neutral400}",

  // Accent: light teal for text, links and icons; fills stay dark enough for white text
  "accent-clr": "{primary400}",
  "accent-clr-alt": "{primary300}",
  "accent-clr-subtle": "{primary900}",
  "accent-clr-subtle-hover": "{primary800}",
  "accent-clr-fill": "{primary700}",
  "accent-clr-fill-hover": "{primary800}",

  // Status: solid (text/icons are light; fills stay dark for white text)
  "error-clr": "{error400}",
  "error-clr-alt": "{error300}",
  "error-clr-active": "{error200}",
  "error-clr-fill": "{error700}",
  "error-clr-fill-hover": "{error800}",
  "warning-clr": "{warning400}",
  "warning-clr-alt": "{warning300}",
  "warning-clr-active": "{warning200}",
  "warning-clr-fill": "{warning700}",
  "warning-clr-fill-hover": "{warning800}",
  "success-clr": "{success400}",
  "success-clr-alt": "{success300}",
  "success-clr-active": "{success200}",
  "success-clr-fill": "{success700}",
  "success-clr-fill-hover": "{success800}",
  "info-clr-icon": "{primary400}",
  "info-clr-fill": "{primary700}",
  "info-clr-fill-hover": "{primary800}",
  "info-clr-fill-active": "{primary900}",

  // Status: subtle
  "error-clr-subtle": "{error900}",
  "error-clr-subtle-hover": "{error800}",
  "error-clr-subtle-active": "{error700}",
  "error-clr-subtle-border": "{error700}",
  "error-clr-subtle-text": "{error200}",
  "warning-clr-subtle": "{warning900}",
  "warning-clr-subtle-hover": "{warning800}",
  "warning-clr-subtle-active": "{warning700}",
  "warning-clr-subtle-border": "{warning700}",
  "warning-clr-subtle-text": "{warning200}",
  "success-clr-subtle": "{success900}",
  "success-clr-subtle-hover": "{success800}",
  "success-clr-subtle-active": "{success700}",
  "success-clr-subtle-border": "{success700}",
  "success-clr-subtle-text": "{success200}",
  "info-clr": "{primary900}",
  "info-clr-alt": "{primary800}",
  "info-clr-subtle-active": "{primary700}",
  "info-clr-subtle-border": "{primary700}",
  "info-clr-subtle-text": "{primary200}",
};

/** Dark surfaces need heavier shadows to read. */
// prettier-ignore
export const darkEffects = {
  "shadow-sm": "0 1px 3px hsla(0, 0%, 0%, 0.8)",
  "shadow-md": "0 2px 6px 0 hsla(0, 0%, 0%, 0.5)",
  "shadow-lg": "0 10px 40px hsla(0, 0%, 0%, 0.7)",
};
