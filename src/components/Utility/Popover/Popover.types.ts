import { PositionNegotiationArgument } from "../../../hooks/useRelativePosition";
import { HasClassName, Sizes } from "../../../types";

export type PopoverPosition =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "bottom-right"
  | "bottom-left"
  | "top-right"
  | "top-left";

export interface BasePopoverProps {
  children: React.ReactNode;
  /** Where to position the popover relative to it's relatively positioned parent */
  position?: PopoverPosition;
  /** An callback you can use to determine where to place the popover when it overflows
   * Receives the side that it overflowed on (top, bottom, left, right) and what the current `position` is.
   * You should return a new `position` value for where to place the popover. If you want to disable this
   * functionality, set this prop to `false`
   */
  negotiatePosition?: PositionNegotiationArgument<PopoverPosition>;
  show?: boolean;
}

export interface PopoverProps extends HasClassName, BasePopoverProps {
  size?: Sizes;
}
