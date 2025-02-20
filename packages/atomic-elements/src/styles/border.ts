import { DefaultTheme } from "styled-components";
import { SuggestStrings } from "../types";
import { getColor } from "./colors";
import { getSizing, Sizing } from "./sizing";
import { Color } from "./variables";

type BorderStyle =
  | "solid"
  | "dashed"
  | "dotted"
  | "double"
  | "groove"
  | "ridge"
  | "inset"
  | "outset";

export interface BorderProps {
  $border?: string;
  $borderColor?: SuggestStrings<Color>;
  $borderWidth?: SuggestStrings<Sizing>;
  $borderStyle?: BorderStyle;

  $borderX?: string;
  $borderY?: string;
  $borderTop?: string;
  $borderRight?: string;
  $borderLeft?: string;
  $borderBottom?: string;

  $radius?: SuggestStrings<Sizing>;
  $radiusTop?: SuggestStrings<Sizing>;
  $radiusBottom?: SuggestStrings<Sizing>;
  $radiusLeft?: SuggestStrings<Sizing>;
  $radiusRight?: SuggestStrings<Sizing>;
}

export function border(props: BorderProps & { theme: DefaultTheme }) {
  const {
    $border,
    $borderTop,
    $borderRight,
    $borderLeft,
    $borderBottom,
    $borderX,
    $borderY,
    $borderColor,
    $borderWidth,
    $borderStyle,
    $radius,
    $radiusBottom,
    $radiusTop,
    $radiusLeft,
    $radiusRight,
    theme,
  } = props;

  return {
    border: $border,
    borderTop: $borderTop || $borderY,
    borderRight: $borderRight || $borderX,
    borderBottom: $borderBottom || $borderY,
    borderLeft: $borderLeft || $borderX,
    borderColor: getColor($borderColor, theme),
    borderWidth: getSizing($borderWidth),
    borderStyle: $borderStyle,
    borderRadius: getSizing($radius),
    borderRadiusTopLeft: getSizing($radiusTop) || getSizing($radiusLeft),
    borderRadiusTopRight: getSizing($radiusTop) || getSizing($radiusRight),
    borderRadiusBottomRight: getSizing($radiusBottom) || getSizing($radiusRight),
    borderRadiusBottomLeft: getSizing($radiusBottom) || getSizing($radiusLeft),
  };
}
