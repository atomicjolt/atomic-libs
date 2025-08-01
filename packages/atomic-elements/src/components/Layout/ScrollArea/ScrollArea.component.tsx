import { ScrollAreaRoot } from "./components/ScrollAreaRoot";
import { ScrollAreaViewport } from "./components/ScrollAreaViewPort";
import { Scrollbar } from "./components/Scrollbar";

export const ScrollArea = ScrollAreaRoot as typeof ScrollAreaRoot & {
  Viewport: typeof ScrollAreaViewport;
  Bar: typeof Scrollbar;
};

ScrollArea.Viewport = ScrollAreaViewport;
ScrollArea.Bar = Scrollbar;

export type { ScrollAreaRootProps as ScrollAreaProps } from "./components/ScrollAreaRoot";
export type { ScrollAreaViewportProps } from "./components/ScrollAreaViewPort";
export type { ScrollbarProps } from "./components/Scrollbar";
