import React from "react";
import { OverlayTriggerState } from "react-stately";
import { PopoverProps } from ".";

export const OverlayTriggerStateContext =
  React.createContext<OverlayTriggerState | null>(null);

export const PopoverContext = React.createContext<PopoverProps>(null as any);
