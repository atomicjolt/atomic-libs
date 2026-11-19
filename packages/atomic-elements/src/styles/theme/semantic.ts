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
  "background-clr-raised": "{neutral50}",
  "background-clr-inverted": "{neutral800}",
  "backdrop-clr": "hsla(0, 0%, 100%, 0.75)",

  // Text & icons
  "text-clr": "{neutral800}",
  "text-clr-secondary": "{text-clr-alt}",
  "text-clr-disabled": "{neutral400}",
  "text-clr-inverted": "{neutral50}",
  "text-clr-on-accent": "{text-clr-inverted}",
  "icon-clr": "{neutral600}",

  // Borders & outlines
  "border-clr": "{border-clr-primary}",
  "border-clr-strong": "{neutral600}",
  "border-clr-focus": "{neutral600}",
  "outline-clr": "{outline-clr-primary}",

  // Accent
  "accent-clr": "{primary700}",
  "accent-clr-hover": "{accent-clr-alt}",
  "accent-clr-subtle": "{primary100}",
  "accent-clr-subtle-hover": "{primary200}",

  // Status: solid
  "error-clr": "{error600}",
  "error-clr-hover": "{error-clr-alt}",
  "warning-clr": "{warning600}",
  "warning-clr-hover": "{warning-clr-alt}",
  "success-clr": "{success600}",
  "success-clr-hover": "{success-clr-alt}",
  "info-clr-solid": "{primary600}",
  "info-clr-solid-hover": "{primary700}",

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
  /** @deprecated use `info-clr-subtle` (or `info-clr-solid` for a solid fill) */
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
