import React from "react";

export interface FlexBoxProperties {
  /** Direction of the flexbox's primary axis */
  direction?: React.CSSProperties["flexDirection"];
  /** How the flexbox items are aligned on the cross axis */
  alignItems?: React.CSSProperties["alignItems"];
  /** How the flexbox items are aligned on the main axis */
  justifyContent?: React.CSSProperties["justifyContent"];
  /** How the flexbox items are aligned when there is extra space in the cross axis */
  alignContent?: React.CSSProperties["alignContent"];
  /** Whether the flexbox items should wrap */
  wrap?: React.CSSProperties["flexWrap"] | boolean;
  /** The gap between flexbox items */
  gap?: React.CSSProperties["gap"] | number;
  /** The gap between flexbox items on the cross axis */
  rowGap?: React.CSSProperties["rowGap"] | number;
  /** The gap between flexbox items on the main axis */
  columnGap?: React.CSSProperties["columnGap"] | number;
}
