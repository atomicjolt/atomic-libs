import type { Theme } from "../theme";

const VAR_PATTERN = /var\(--([\w-]+)(?:,\s*([^()]*(?:\([^()]*\))?[^()]*))?\)/;

/**
 * Follows `var(--x)` references in a theme's resolved variables until only
 * literal values remain. Used by tests to compare the effective value of a
 * token regardless of how many aliases sit between it and the palette.
 */
export function resolveToLiteral(theme: Theme, name: string): string {
  const prefix = theme.cssVarPrefix;
  let value = theme.resolvedVariables[`--${prefix}${name}`];

  if (value === undefined) {
    throw new Error(`Token "${name}" is not defined in the theme`);
  }

  for (let depth = 0; VAR_PATTERN.test(value); depth++) {
    if (depth > 50) throw new Error(`Alias cycle while resolving "${name}"`);

    value = value.replace(VAR_PATTERN, (_, ref: string, fallback?: string) => {
      const refName = ref.startsWith(prefix) ? ref.slice(prefix.length) : ref;
      const refValue = theme.resolvedVariables[`--${prefix}${refName}`];
      if (refValue !== undefined) return refValue;
      if (fallback !== undefined) return fallback.trim();
      throw new Error(`Token "${name}" references undefined "${refName}"`);
    });
  }

  return value;
}
