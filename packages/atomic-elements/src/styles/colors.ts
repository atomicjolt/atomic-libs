import { DefaultTheme } from "styled-components";
import { SuggestStrings } from "../types";
import { Color } from "./variables";

export interface ColorProps {
  $color?: SuggestStrings<Color>;
}

export function colors(props: ColorProps & { theme: DefaultTheme }) {
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

colors.defaults =
  (defaults: ColorProps) => (props: ColorProps & { theme: DefaultTheme }) =>
    colors({ ...defaults, ...props });
