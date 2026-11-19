/** Semantic color tokens: what a color is for, not which shade it is. */
// prettier-ignore
export const semanticColors = {
  "text-clr": "{neutral800}",
  "text-clr-alt": "{neutral600}",
  "text-clr-inverted": "{neutral50}",

  "background-clr": "{neutral50}",
  "background-clr-alt": "{neutral100}",
  "background-clr-inverted": "{neutral800}",

  "accent-clr": "{primary700}",
  "accent-clr-alt": "{primary800}",

  "error-clr": "{error600}",
  "error-clr-alt": "{error700}",
  "success-clr": "{success600}",
  "success-clr-alt": "{success700}",
  "warning-clr": "{warning600}",
  "warning-clr-alt": "{warning700}",
  "info-clr": "{primary100}",
  "info-clr-alt": "{primary200}",

  "border-clr-primary": "{neutral300}",
  "outline-clr-primary": "{neutral600}",
};

export type SemanticColor = keyof typeof semanticColors;
