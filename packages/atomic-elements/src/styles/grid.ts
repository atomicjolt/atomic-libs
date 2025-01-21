import { SuggestStrings } from "../types";
import { inScale, NumericScaleValue } from "./scale";
import { getSpacing, Spacing } from "./spacing";

export interface GridStyleProps {
  $display?: "grid" | "inline-grid" | "none";
  $columns?: SuggestStrings<NumericScaleValue>;
  $rows?: string;
  $areas?: string;
  $flow?: "row" | "column" | "dense" | "row-dense" | "column-dense";
  $align?: "start" | "end" | "center" | "stretch" | "baseline";
  $justify?:
    | "start"
    | "end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  $gap?: SuggestStrings<Spacing>;
  $gapX?: SuggestStrings<Spacing>;
  $gapY?: SuggestStrings<Spacing>;
}

export function grid(props: GridStyleProps) {
  const {
    $display = "grid",
    $columns,
    $rows,
    $areas,
    $flow,
    $align,
    $justify,
    $gap,
    $gapX,
    $gapY,
  } = props;

  return {
    display: $display,
    gridTemplateColumns: $columns && resolveColumnsOrRows($columns),
    gridTemplateRows: $rows && resolveColumnsOrRows($rows),
    gridTemplateAreas: $areas,
    gridAutoFlow: $flow,
    alignItems: $align,
    justifyContent: $justify,
    gap: getSpacing($gap),
    columnGap: getSpacing($gapX),
    rowGap: getSpacing($gapY),
  };
}

function resolveColumnsOrRows(value: string) {
  if (inScale(value)) {
    return `repeat(${value}, minmax(0, 1fr))`;
  }

  return value;
}
