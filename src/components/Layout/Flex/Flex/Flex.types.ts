import type { Property } from "csstype";

export interface FlexBoxProperties {
  /** Direction of the flexbox's primary axix */
  direction?: Property.FlexDirection;
  /** How the flexbox items are aligned on the cross axis */
  alignItems?: Property.AlignItems;
  /** How the flexbox items are aligned on the main axis */
  justifyContent?: Property.JustifyContent;
  /** How the flexbox items are aligned when there is extra space in the cross axis */
  alignContent?: Property.AlignContent;
  /** Whether the flexbox items should wrap */
  wrap?: Property.FlexWrap | boolean;
  /** The gap between flexbox items */
  gap?: Property.Gap | number;
  /** The gap between flexbox items on the cross axis */
  rowGap?: Property.RowGap | number;
  /** The gap between flexbox items on the main axis */
  columnGap?: Property.ColumnGap | number;
}
