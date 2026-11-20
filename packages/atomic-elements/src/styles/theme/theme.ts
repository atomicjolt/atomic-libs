import { createGlobalStyle, css } from "styled-components";
import { SuggestStrings } from "../../types";
import type { variables } from "./index";

type VariableName = SuggestStrings<keyof typeof variables>;

export type ColorSchemeMode = "light" | "dark";

export interface ColorSchemeConfig {
  /** Light or dark. Defaults to the scheme's name for `light` and `dark`;
   * required for any other name. Sets the CSS `color-scheme` property. */
  mode?: ColorSchemeMode;
  /** Overrides applied when this scheme is active. */
  variables: Partial<Record<VariableName, string>>;
}

/** A scheme as stored on a theme: its mode and its (merged) token values. */
export interface ColorScheme {
  mode: ColorSchemeMode;
  /** This scheme's values, including any inherited from a base theme.
   * Unresolved: may contain `{name}` aliases. */
  variables: Record<string, string>;
}

interface CreateThemeProps {
  base?: Theme;
  /** Values shared by every color scheme. */
  variables?: Partial<Record<VariableName, string>>;
  /** Named color schemes. `light` always exists and applies when no scheme
   * is selected; other schemes layer their values on top of it. Scheme values
   * win over shared `variables` (including a base theme's schemes), so to
   * change a token a scheme sets, set it under that scheme. */
  colorSchemes?: Record<string, ColorSchemeConfig>;
}

export interface Theme {
  /** Every token name in the theme (shared and from every scheme), with its
   * `light` value where it has one. Used to tell token names apart from raw
   * CSS values, e.g. for the `$color` / `$bg` props. Unresolved. */
  variables: Record<string, string>;
  /** The `:root` block as CSS: `--name` to its value with aliases turned into
   * `var(--…)`, for shared tokens plus the `light` scheme. */
  resolvedVariables: Record<string, string>;
  /** `var(--name)` for a token. */
  getVar: (name: string) => string;
  /** A token's value in the `:root` block (see `resolvedVariables`). */
  getVarValue: (name: string) => string;
  /** Every scheme, `light` included. */
  colorSchemes: Record<string, ColorScheme>;
  /** @internal Only the shared tokens (no scheme values). Used when another
   * theme extends this one via `base`. */
  sharedVariables: Record<string, string>;
  _Component: React.ComponentType;
}

function schemeMode(name: string, config: { mode?: ColorSchemeMode }) {
  if (config.mode) return config.mode;
  if (name === "light" || name === "dark") return name;
  throw new Error(
    `Color scheme "${name}" needs a mode ("light" or "dark") because its name isn't "light" or "dark"`
  );
}

/** Matches `{name}` and `{name:fallback}` token aliases. */
const ALIAS_PATTERN = /{([^}:]+)(?::([^}]+))?}/g;

/** @internal Turns `{name}` / `{name:fallback}` aliases into `var(--name)`
 * references. Exported for tests; not part of the public API. */
export function toCssValue(value: string): string {
  return value.replace(ALIAS_PATTERN, (_, name: string, fallback?: string) =>
    fallback ? `var(--${name}, ${fallback})` : `var(--${name})`
  );
}

export function createTheme(props: CreateThemeProps): Theme {
  const { variables = {}, colorSchemes = {}, base } = props;

  const baseSchemes = base?.colorSchemes ?? {};

  const shared: Record<string, string> = {
    ...(base?.sharedVariables ?? {}),
    ...(variables as Record<string, string>),
  };

  // Merge schemes per name; `light` always exists and is the base.
  const schemeNames = [
    ...new Set([
      "light",
      ...Object.keys(baseSchemes),
      ...Object.keys(colorSchemes),
    ]),
  ];

  const schemes: Record<string, ColorScheme> = {};

  for (const name of schemeNames) {
    const inherited = baseSchemes[name];
    const own = colorSchemes[name];
    schemes[name] = {
      mode: schemeMode(name, { mode: own?.mode ?? inherited?.mode }),
      variables: {
        ...(inherited?.variables ?? {}),
        ...((own?.variables ?? {}) as Record<string, string>),
      },
    };
  }

  const allKeys = new Set([
    ...Object.keys(shared),
    ...Object.values(schemes).flatMap((scheme) =>
      Object.keys(scheme.variables)
    ),
  ]);

  // Every alias must point at a token defined somewhere in the theme.
  const checkAliases = (value: string) => {
    for (const [, name, fallback] of value.matchAll(ALIAS_PATTERN)) {
      if (!allKeys.has(name) && !fallback) {
        throw new Error(
          `Variable ${name} not found in theme, make sure you have defined it, or provide a default value ({variable-name:default-value})`
        );
      }
    }
    return toCssValue(value);
  };

  const resolveAll = (values: Record<string, string>) =>
    Object.fromEntries(
      Object.entries(values).map(([key, value]) => [
        `--${key}`,
        checkAliases(value),
      ])
    );

  const baseValues = { ...shared, ...schemes.light.variables };
  const resolved = resolveAll(baseValues);

  const schemeBlocks = Object.entries(schemes)
    .filter(([name]) => name !== "light")
    .map(
      ([name, scheme]) => css`
        [data-color-scheme="${name}"] {
          ${css(resolveAll(scheme.variables))}
          color-scheme: ${scheme.mode};
        }
      `
    );

  const component = createGlobalStyle`
    :root {
      ${css(resolved)}
      color-scheme: light;
    }

    ${schemeBlocks}
  `;

  const allVariables: Record<string, string> = {};
  for (const scheme of Object.values(schemes)) {
    Object.assign(allVariables, scheme.variables);
  }
  Object.assign(allVariables, baseValues);

  return {
    variables: allVariables,
    resolvedVariables: resolved,
    getVar: (name) => `var(--${name})`,
    getVarValue: (name) => resolved[`--${name}`],
    colorSchemes: schemes,
    sharedVariables: shared,
    _Component: component,
  };
}

export function variableAlias(name: VariableName, defaultValue?: string) {
  if (defaultValue) {
    return `{${name}:${defaultValue}}`;
  }

  return `{${name}}`;
}

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
