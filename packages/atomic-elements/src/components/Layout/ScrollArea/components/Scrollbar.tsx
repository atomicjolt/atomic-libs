import { useContext, useRef } from "react";
import {
  ScrollAreaScrollbarThumb,
  ScrollAreaScrollbarTrack,
} from "../ScrollArea.styles";
import { useScrollBar } from "../hooks/useScrollbar";
import { ScrollStateContext } from "../ScrollArea.context";

export interface ScrollbarProps {
  orientation: "horizontal" | "vertical";
}

export function Scrollbar(props: ScrollbarProps) {
  const { orientation } = props;

  const { viewportRef, state } = useContext(ScrollStateContext)!;
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { thumbProps, trackProps } = useScrollBar(
    {
      scrollAreaRef: viewportRef,
      trackRef: trackRef,
      orientation,
    },
    state
  );

  return (
    <ScrollAreaScrollbarTrack
      ref={trackRef}
      $orientation={orientation}
      {...trackProps}
    >
      <ScrollAreaScrollbarThumb
        ref={thumbRef}
        $orientation={orientation}
        {...thumbProps}
      />
    </ScrollAreaScrollbarTrack>
  );
}
