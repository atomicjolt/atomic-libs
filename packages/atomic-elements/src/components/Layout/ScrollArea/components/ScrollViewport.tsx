import { useContext } from "react";
import { ScrollAreaContent } from "../ScrollArea.styles";
import { ScrollStateContext } from "../ScrollArea.context";
import { useScrollArea } from "../hooks/useScrollArea";

export interface ScrollViewportProps {
  children: React.ReactNode;
}

export function ScrollViewport(props: ScrollViewportProps) {
  const { children } = props;
  const { viewportRef, state } = useContext(ScrollStateContext)!;

  const { scrollAreaProps } = useScrollArea(
    {
      scrollAreaRef: viewportRef,
      children: children,
    },
    state
  );

  return (
    <ScrollAreaContent
      className="aje-scollarea__viewport"
      ref={viewportRef}
      {...scrollAreaProps}
    >
      {children}
    </ScrollAreaContent>
  );
}
