import { Side } from "../../../hooks/useRelativePosition";
import { PopoverPosition } from "./Popover.types";

const PositionNegotiationLookup: Record<
  Side,
  Record<Partial<PopoverPosition>, Partial<PopoverPosition>>
> = {
  [Side.Top]: {
    "bottom-right": "bottom-right",
    "bottom-left": "bottom-left",
    "top-right": "bottom-right",
    "top-left": "bottom-left",
    top: "bottom",
    bottom: "bottom",
    left: "bottom-left",
    right: "bottom-right",
  },
  [Side.Bottom]: {
    "bottom-right": "top-right",
    "bottom-left": "top-left",
    "top-right": "top-right",
    "top-left": "top-left",
    top: "top",
    bottom: "top",
    left: "top-left",
    right: "top-right",
  },
  [Side.Left]: {
    "bottom-right": "right",
    "bottom-left": "bottom-right",
    "top-right": "right",
    "top-left": "top-right",
    top: "right",
    bottom: "right",
    left: "right",
    right: "right",
  },
  [Side.Right]: {
    "bottom-right": "bottom-left",
    "bottom-left": "left",
    "top-right": "top-left",
    "top-left": "bottom-left",
    top: "left",
    bottom: "left",
    left: "left",
    right: "left",
  },
};

export function defaultPositionNegotiator(
  side: Side,
  position: PopoverPosition
) {
  return PositionNegotiationLookup[side][position];
}
