import { SuggestStrings } from "../types";
import { getSpacing, Spacing } from "./spacing";

export interface FlexStyleProps {
  $display?: "flex" | "inline-flex" | "none";
  $direction?: "row" | "row-reverse" | "column" | "column-reverse";
  $align?: "start" | "end" | "center" | "baseline" | "stretch";
  $justify?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  $wrap?: "nowrap" | "wrap" | "wrap-reverse";
  $gap?: SuggestStrings<Spacing>;
  $gapX?: SuggestStrings<Spacing>;
  $gapY?: SuggestStrings<Spacing>;
}

export function flex(props: FlexStyleProps) {
  const {
    $display = "flex",
    $direction,
    $align,
    $justify,
    $wrap,
    $gap,
    $gapX,
    $gapY,
  } = props;

  console.log($direction);

  return {
    display: $display,
    flexDirection: $direction,
    alignItems: ($align && flexAlignMap[$align]) || $align,
    justifyContent: $justify,
    flexWrap: $wrap,
    gap: getSpacing($gap),
    columnGap: getSpacing($gapX),
    rowGap: getSpacing($gapY),
  };
}

// For increased browser compatibility
export const flexAlignMap: Record<string, string | undefined> = {
  end: "flex-end",
  start: "flex-start",
};
