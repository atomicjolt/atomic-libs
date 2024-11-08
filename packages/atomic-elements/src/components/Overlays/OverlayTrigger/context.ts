import React from "react";
import { OverlayTriggerState } from "react-stately";

export const OverlayTriggerStateContext =
  React.createContext<OverlayTriggerState | null>(null);
