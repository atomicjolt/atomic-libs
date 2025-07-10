import { createGlobalStyle, css } from "styled-components";
import { SuggestStrings } from "../types";
import { variables } from "./variables";

type VariableName = SuggestStrings<keyof typeof variables>;

interface CreateThemeProps {
  cssVarPrefix?: string;
  cssVarsSelector?: string;
  base?: Theme;
  variables: Partial<Record<VariableName, string>>;
}

export interface Theme {
  variables: Record<string, string>;
  resolvedVariables: Record<string, string>;
  cssVarPrefix: string;
  getVar: (name: string) => string;
  getVarName: (name: string) => string;
  getVarValue: (name: string) => string;
  _Component: React.ComponentType;
}

export function createTheme(props: CreateThemeProps): Theme {
  const {
    variables,
    cssVarPrefix = "",
    cssVarsSelector = ":root",
    base = {
      variables: {},
      resolvedVariables: {},
      cssVarPrefix: "",
      _Component: () => null,
    },
  } = props;

  const allVariables = {
    ...base.variables,
    ...variables,
  };

  const resolved: Record<string, string> = {};

  Object.entries(allVariables).forEach(([key, value]) => {
    const resolvedValue = value.replace(
      /{([^}:]+)(?::([^}]+))?}/g,
      (_, name: string, defaultValue: string) => {
        if (name in allVariables || defaultValue) {
          if (defaultValue) {
            return `var(--${cssVarPrefix}${name}, ${defaultValue})`;
          } else {
            return `var(--${cssVarPrefix}${name})`;
          }
        } else {
          debugger;
          throw new Error(
            `Variable ${name} not found in theme, make sure you have defined it, or provide a default value ({variable-name:default-valu})`
          );
        }
      }
    );

    const fullKey = `--${cssVarPrefix}${key}`;
    resolved[fullKey] = resolvedValue;
  });

  const rules = css(resolved);

  const component = createGlobalStyle`
    ${cssVarsSelector} {
      ${rules}
    }
  `;

  return {
    variables: allVariables,
    resolvedVariables: resolved,
    cssVarPrefix,
    getVar: (name) => `var(--${cssVarPrefix}${name})`,
    getVarName: (name) => `--${cssVarPrefix}${name}`,
    getVarValue: (name) => resolved[`--${cssVarPrefix}${name}`],
    _Component: component,
  };
}

export function variableAlias(name: VariableName, defaultValue?: string) {
  if (defaultValue) {
    return `{${name}:${defaultValue}}`;
  }

  return `{${name}}`;
}

export const defaultTheme = createTheme({ variables });
