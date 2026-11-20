import type { Theme } from "../theme";
import { toCssValue } from "../theme/theme";

const VAR_PATTERN = /var\(--([\w-]+)(?:,\s*([^()]*(?:\([^()]*\))?[^()]*))?\)/;

/**
 * Follows `var(--x)` references in a theme's resolved variables until only
 * literal values remain. Used by tests to compare the effective value of a
 * token regardless of how many aliases sit between it and the palette.
 * Pass `scheme` to resolve with that color scheme applied.
 */
export function resolveToLiteral(
  theme: Theme,
  name: string,
  scheme?: string
): string {
  // A scheme's block layers its overrides on top of the base block, as in CSS.
  const resolved: Record<string, string> = { ...theme.resolvedVariables };
  if (scheme) {
    for (const [key, raw] of Object.entries(theme.colorSchemes[scheme].variables)) {
      resolved[`--${key}`] = toCssValue(raw);
    }
  }
  let value = resolved[`--${name}`];

  if (value === undefined) {
    throw new Error(`Token "${name}" is not defined in the theme`);
  }

  for (let depth = 0; VAR_PATTERN.test(value); depth++) {
    if (depth > 50) throw new Error(`Alias cycle while resolving "${name}"`);

    value = value.replace(VAR_PATTERN, (_, ref: string, fallback?: string) => {
      const refValue = resolved[`--${ref}`];
      if (refValue !== undefined) return refValue;
      if (fallback !== undefined) return fallback.trim();
      throw new Error(`Token "${name}" references undefined "${ref}"`);
    });
  }

  return value;
}
