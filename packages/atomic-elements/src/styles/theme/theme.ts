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

export interface ResolvedColorScheme {
  mode: ColorSchemeMode;
  /** This scheme's own (merged) override values, unresolved. */
  variables: Record<string, string>;
}

interface CreateThemeProps {
  base?: Theme;
  /** Values shared by every color scheme. */
  variables?: Partial<Record<VariableName, string>>;
  /** Named color schemes. `light` (or the first scheme) is the base scheme,
   * applied when no scheme is selected. */
  colorSchemes?: Record<string, ColorSchemeConfig>;
}

export interface Theme {
  /** Every token name, with base-scheme values. */
  variables: Record<string, string>;
  /** Resolved CSS variables for the base scheme. */
  resolvedVariables: Record<string, string>;
  getVar: (name: string) => string;
  getVarValue: (name: string) => string;
  /** The scheme applied when none is selected. */
  baseColorScheme: string;
  colorSchemes: Record<string, ResolvedColorScheme>;
  /** @internal Values shared by all schemes, used when extending a theme. */
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

function withoutKeys(
  values: Record<string, string>,
  keys: Record<string, unknown>
): Record<string, string> {
  return Object.fromEntries(
    Object.entries(values).filter(([key]) => !(key in keys))
  );
}

/** Turns `{name}` / `{name:fallback}` aliases into `var(--name)` references. */
export function toCssValue(value: string): string {
  return value.replace(
    /{([^}:]+)(?::([^}]+))?}/g,
    (_, name: string, fallback?: string) =>
      fallback ? `var(--${name}, ${fallback})` : `var(--${name})`
  );
}

export function createTheme(props: CreateThemeProps): Theme {
  const {
    variables = {},
    colorSchemes = {},
    base,
  } = props;

  const baseSchemes = base?.colorSchemes ?? {};

  const shared: Record<string, string> = {
    ...(base?.sharedVariables ?? {}),
    ...(variables as Record<string, string>),
  };

  // Merge schemes per name. The child's shared values win over the base
  // theme's scheme values, so themes that only set `variables` still apply
  // in every scheme.
  const schemeNames = [
    ...Object.keys(baseSchemes),
    ...Object.keys(colorSchemes).filter((name) => !(name in baseSchemes)),
  ];

  const schemes: Record<
    string,
    { mode: ColorSchemeMode; variables: Record<string, string> }
  > = {};

  for (const name of schemeNames) {
    const inherited = baseSchemes[name];
    const own = colorSchemes[name];
    schemes[name] = {
      mode: schemeMode(name, { mode: own?.mode ?? inherited?.mode }),
      variables: {
        ...withoutKeys(inherited?.variables ?? {}, variables),
        ...((own?.variables ?? {}) as Record<string, string>),
      },
    };
  }

  if (schemeNames.length === 0) {
    schemes.light = { mode: "light", variables: {} };
  }

  const baseColorScheme = "light" in schemes ? "light" : Object.keys(schemes)[0];

  const allKeys = new Set([
    ...Object.keys(shared),
    ...Object.values(schemes).flatMap((scheme) => Object.keys(scheme.variables)),
  ]);

  // Every alias must point at a token defined somewhere in the theme.
  const checkAliases = (value: string) => {
    for (const [, name, fallback] of value.matchAll(/{([^}:]+)(?::([^}]+))?}/g)) {
      if (!allKeys.has(name) && !fallback) {
        throw new Error(
          `Variable ${name} not found in theme, make sure you have defined it, or provide a default value ({variable-name:default-valu})`
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

  const baseValues = { ...shared, ...schemes[baseColorScheme].variables };
  const resolved = resolveAll(baseValues);

  const schemeBlocks = Object.entries(schemes)
    .filter(([name]) => name !== baseColorScheme)
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
      color-scheme: ${schemes[baseColorScheme].mode};
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
    baseColorScheme,
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
