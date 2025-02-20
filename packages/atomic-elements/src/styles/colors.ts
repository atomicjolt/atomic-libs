import { DefaultTheme } from "styled-components";
import { SuggestStrings } from "../types";
import { Color } from "./variables";

export function getColor(
  color: SuggestStrings<Color> | undefined,
  theme: DefaultTheme
) {
  if (theme?.variables && color && color in theme.variables) {
    return theme.getVar(color);
  }

  return color;
}

export interface TextColorProps {
  $color?: SuggestStrings<Color>;
}

export function textColor(props: TextColorProps & { theme: DefaultTheme }) {
  const { $color, theme } = props;

  return {
    color: getColor($color, theme),
  };
}

textColor.defaults =
  (defaults: TextColorProps) =>
  (props: TextColorProps & { theme: DefaultTheme }) =>
    textColor({ ...defaults, ...props });

export interface BackgroundColorProps {
  $bg?: SuggestStrings<Color>;
}

export function backgroundColor(
  props: BackgroundColorProps & { theme: DefaultTheme }
) {
  const { $bg, theme } = props;

  return {
    background: getColor($bg, theme),
  };
}

backgroundColor.defaults =
  (defaults: BackgroundColorProps) =>
  (props: BackgroundColorProps & { theme: DefaultTheme }) =>
    backgroundColor({ ...defaults, ...props });
