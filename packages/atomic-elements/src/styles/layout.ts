import { Spacing, getSpacing } from "@styles/spacing";
import { SuggestStrings } from "../types/common";
import { flexAlignMap } from "./flex";
import { makeDefault } from "./utils";

export interface DisplayProps {
  $display?: "block" | "inline" | "inline-block" | "none";
}

export interface PaddingProps {
  $p?: SuggestStrings<Spacing>;
  $px?: SuggestStrings<Spacing>;
  $py?: SuggestStrings<Spacing>;
  $pt?: SuggestStrings<Spacing>;
  $pr?: SuggestStrings<Spacing>;
  $pb?: SuggestStrings<Spacing>;
  $pl?: SuggestStrings<Spacing>;
}

export interface MarginProps {
  $m?: SuggestStrings<Spacing>;
  $mx?: SuggestStrings<Spacing>;
  $my?: SuggestStrings<Spacing>;
  $mt?: SuggestStrings<Spacing>;
  $mr?: SuggestStrings<Spacing>;
  $mb?: SuggestStrings<Spacing>;
  $ml?: SuggestStrings<Spacing>;
}

export interface SpacingProps extends PaddingProps, MarginProps {}

export interface WidthProps {
  $width?: string;
  $minWidth?: string;
  $maxWidth?: string;
}

export interface HeightProps {
  $height?: string;
  $minHeight?: string;
  $maxHeight?: string;
}

export interface DimensionsProps extends WidthProps, HeightProps {}

export interface PositionProps {
  $position?: "static" | "relative" | "absolute" | "fixed" | "sticky";
  $top?: string;
  $right?: string;
  $bottom?: string;
  $left?: string;
}

export interface OverflowProps {
  $overflow?: "visible" | "hidden" | "scroll" | "clip" | "auto";
  $overflowX?: "visible" | "hidden" | "scroll" | "clip" | "auto";
  $overflowY?: "visible" | "hidden" | "scroll" | "clip" | "auto";
}

export interface FlexItemProps {
  /** How the flexbox item is aligned on the cross axis */
  $flexAlign?: "start" | "end" | "center" | "baseline" | "stretch" | "auto";
  /** The order of the flexbox item */
  $flexOrder?: string;
  /** How much the flexbox item can grow */
  $flexGrow?: SuggestStrings<"0" | "1">;
  /** How much the flexbox item can shrink */
  $flexShrink?: SuggestStrings<"0" | "1">;
  /** The size of the flexbox item */
  $flexBasis?: string;
}

export interface GridItemProps {
  /** The grid area */
  $gridArea?: string;
  /** The row position */
  $gridRow?: string;
  /** The row start position */
  $gridRowStart?: string;
  /** The row end position */
  $gridRowEnd?: string;
  /** The column position */
  $gridColumn?: string;
  /** The column start position */
  $gridColumnStart?: string;
  /** The column end position */
  $gridColumnEnd?: string;
}

export interface LayoutProps
  extends SpacingProps,
    DimensionsProps,
    PositionProps,
    OverflowProps,
    FlexItemProps,
    GridItemProps {}

export function display(props: DisplayProps) {
  const { $display } = props;

  return {
    display: $display,
  };
}

export function margins(props: MarginProps) {
  const { $m, $mx, $my, $mt, $mr, $mb, $ml } = props;

  const margin = {
    margin: getSpacing($m),
    marginTop: getSpacing($mt) || getSpacing($my),
    marginRight: getSpacing($mr) || getSpacing($mx),
    marginBottom: getSpacing($mb) || getSpacing($my),
    marginLeft: getSpacing($ml) || getSpacing($mx),
  };

  return margin;
}

margins.defaults = makeDefault(margins);

export function padding(props: PaddingProps) {
  const { $p, $px, $py, $pt, $pr, $pb, $pl } = props;

  const padding = {
    padding: getSpacing($p),
    paddingTop: getSpacing($pt) || getSpacing($py),
    paddingRight: getSpacing($pr) || getSpacing($px),
    paddingBottom: getSpacing($pb) || getSpacing($py),
    paddingLeft: getSpacing($pl) || getSpacing($px),
  };

  return padding;
}

padding.defaults = makeDefault(padding);

export function spacing(props: SpacingProps) {
  return {
    ...margins(props),
    ...padding(props),
  };
}

export function width(props: WidthProps) {
  const { $width, $minWidth, $maxWidth } = props;

  return {
    width: $width,
    minWidth: $minWidth,
    maxWidth: $maxWidth,
  };
}

export function height(props: HeightProps) {
  const { $height, $minHeight, $maxHeight } = props;

  return {
    height: $height,
    minHeight: $minHeight,
    maxHeight: $maxHeight,
  };
}

export function dimensions(props: DimensionsProps) {
  return {
    ...width(props),
    ...height(props),
  };
}

export function position(props: PositionProps) {
  const { $position, $top, $right, $bottom, $left } = props;

  return {
    position: $position,
    top: $top,
    right: $right,
    bottom: $bottom,
    left: $left,
  };
}

export function overflow(props: OverflowProps) {
  const { $overflow, $overflowX, $overflowY } = props;

  return {
    overflow: $overflow,
    overflowX: $overflowX,
    overflowY: $overflowY,
  };
}

export function flexItem(props: FlexItemProps) {
  const { $flexAlign, $flexOrder, $flexGrow, $flexShrink, $flexBasis } = props;

  return {
    alignSelf: ($flexAlign && flexAlignMap[$flexAlign]) || $flexAlign,
    order: $flexOrder,
    flexGrow: $flexGrow,
    flexShrink: $flexShrink,
    flexBasis: $flexBasis,
  };
}

export function gridItem(props: GridItemProps) {
  const {
    $gridArea,
    $gridRow,
    $gridRowStart,
    $gridRowEnd,
    $gridColumn,
    $gridColumnStart,
    $gridColumnEnd,
  } = props;

  return {
    gridArea: $gridArea,
    gridRow: $gridRow,
    gridRowStart: $gridRowStart,
    gridRowEnd: $gridRowEnd,
    gridColumn: $gridColumn,
    gridColumnStart: $gridColumnStart,
    gridColumnEnd: $gridColumnEnd,
  };
}

export function layout(props: LayoutProps) {
  return {
    ...spacing(props),
    ...dimensions(props),
    ...position(props),
    ...overflow(props),
    ...flexItem(props),
    ...gridItem(props),
  };
}
