import { SuggestStrings } from "../types";
import { getSpacing, Spacing } from "./spacing";
import { makeDefault } from "./utils";

export interface FlexStyleProps {
  /** CSS display. @default "flex" */
  $display?: "flex" | "inline-flex" | "none";
  /** Main axis direction (flex-direction). */
  $direction?: "row" | "row-reverse" | "column" | "column-reverse";
  /** Alignment of children on the cross axis (align-items). */
  $align?: "start" | "end" | "center" | "baseline" | "stretch";
  /** Distribution of children along the main axis (justify-content). */
  $justify?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "left"
    | "right";
  /** Whether children wrap onto new lines (flex-wrap). */
  $wrap?: "nowrap" | "wrap" | "wrap-reverse";
  /** Space between children: a spacing step (0–9) or any CSS length. */
  $gap?: SuggestStrings<Spacing>;
  /** Space between columns (column-gap): a spacing step or CSS length. */
  $gapX?: SuggestStrings<Spacing>;
  /** Space between rows (row-gap): a spacing step or CSS length. */
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

flex.defaults = makeDefault(flex);

// For increased browser compatibility
export const flexAlignMap: Record<string, string | undefined> = {
  end: "flex-end",
  start: "flex-start",
};
