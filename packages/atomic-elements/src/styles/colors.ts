import { DefaultTheme } from "styled-components";
import { SuggestStrings } from "../types";
import { Color } from "./variables";

export interface TextColorProps {
  $color?: SuggestStrings<Color>;
}

export function textColor(props: TextColorProps & { theme: DefaultTheme }) {
  const { $color, theme } = props;

  if (theme?.variables && $color && $color in theme.variables) {
    return {
      color: theme.getVar($color),
    };
  }

  return {
    color: $color,
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

  if (theme?.variables && $bg && $bg in theme.variables) {
    return {
      background: theme.getVar($bg),
    };
  }

  return {
    background: $bg,
  };
}

backgroundColor.defaults =
  (defaults: BackgroundColorProps) =>
  (props: BackgroundColorProps & { theme: DefaultTheme }) =>
    backgroundColor({ ...defaults, ...props });
