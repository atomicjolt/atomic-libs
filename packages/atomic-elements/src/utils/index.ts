import { SlottedContextValue } from "@hooks/useSlottedContext";
import React from "react";

export function createComponentContext<T>() {
  return React.createContext<SlottedContextValue<T>>(null as any);
}


