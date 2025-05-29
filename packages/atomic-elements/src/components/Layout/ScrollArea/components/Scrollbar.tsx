import { useContext, useRef } from "react";
import {
  ScrollAreaScrollbarThumb,
  ScrollAreaScrollbarTrack,
} from "../ScrollArea.styles";
import { useScrollBar } from "../hooks/useScrollbar";
import { ScrollStateContext } from "../ScrollArea.context";
import { Flex } from "@components/Layout/Flex";
import { Button } from "@components/Buttons/Button";
import { useScrollBarButton } from "../hooks/useScrollButton";
import { IconButton } from "@components/Buttons/IconButton";

export interface ScrollbarProps {
  orientation: "horizontal" | "vertical";
}

export function Scrollbar(props: ScrollbarProps) {
  const { orientation } = props;

  const { viewportRef, state } = useContext(ScrollStateContext)!;
  const thumbRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { thumbProps, trackProps, advanceButtonProps, retreatButtonProps } =
    useScrollBar(
      {
        scrollAreaRef: viewportRef,
        trackRef: trackRef,
        orientation,
      },
      state
    );

  return (
    <Flex
      $height="100%"
      $align="center"
      $direction={orientation === "horizontal" ? "row" : "column"}
      $gap="1"
    >
      <IconButton
        {...retreatButtonProps}
        icon={orientation === "horizontal" ? "arrow_left" : "arrow_drop_up"}
        variant="scrollbar"
      />
      <ScrollAreaScrollbarTrack ref={trackRef} {...trackProps}>
        <ScrollAreaScrollbarThumb ref={thumbRef} {...thumbProps} />
      </ScrollAreaScrollbarTrack>
      <IconButton
        {...advanceButtonProps}
        icon={orientation === "horizontal" ? "arrow_right" : "arrow_drop_down"}
        variant="scrollbar"
      />
    </Flex>
  );
}
