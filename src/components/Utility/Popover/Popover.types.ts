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

export interface PopoverProps extends HasClassName {
  children: React.ReactNode;
  size?: Sizes;
  show?: boolean;
  position?: PopoverPosition;
  negotioatePosition?: PositionNegotiationArgument<PopoverPosition>;
}
