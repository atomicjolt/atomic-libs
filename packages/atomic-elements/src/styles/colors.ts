import { DefaultTheme } from "styled-components";
import { SuggestStrings } from "../types";
import { Color } from "./variables";

function colorProperty<T extends object>(cssProperty: string, prop: string) {
  const func = (props: T & { theme: DefaultTheme }) => {
    const { [prop as keyof T]: $color, theme } = props;

    if (theme?.variables && $color && ($color as string) in theme.variables) {
      return {
        [cssProperty]: theme.getVar($color),
      };
    }

    return {
      [cssProperty]: $color,
    };
  };

  func.defaults = (defaults: T) => {
    return (props: T & { theme: DefaultTheme }) =>
      func({ ...defaults, ...props });
  };

  return func;
}

export interface TextColorProps {
  $color?: SuggestStrings<Color>;
}

export const textColor = colorProperty<TextColorProps>("color", "$color");

export interface BackgroundColorProps {
  $bg?: SuggestStrings<Color>;
}

export const backgroundColor = colorProperty<BackgroundColorProps>(
  "background",
  "$bg"
);

export interface StrokeColorProps {
  $stroke?: SuggestStrings<Color>;
}

export const strokeColor = colorProperty<StrokeColorProps>("stroke", "$stroke");

export interface FillColorProps {
  $fill?: SuggestStrings<Color>;
}

export const fillColor = colorProperty<FillColorProps>("fill", "$fill");
