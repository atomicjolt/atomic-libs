import { createComponentContext } from "@utils/index";
import { ScrollAreaProps } from ".";
import { createContext } from "react";
import { ScrollState } from "./hooks/useScrollState";

export const ScrollAreaContext = createComponentContext<ScrollAreaProps>();

interface ScrollStateContextValue {
  state: ScrollState;
  viewportRef: React.RefObject<HTMLDivElement | null>;
}

export const ScrollStateContext = createContext<ScrollStateContextValue | null>(
  null
);
