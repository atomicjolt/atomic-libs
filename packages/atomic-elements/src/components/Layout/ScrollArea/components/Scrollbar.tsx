import { useContext, useRef, forwardRef } from "react";
import { filterDOMProps } from "@react-aria/utils";
import {
  ScrollAreaScrollbarThumb,
  ScrollAreaScrollbarTrack,
} from "../ScrollArea.styles";
import {
  ElementWrapper,
  RenderStyleProps,
  SuggestStrings,
} from "../../../../types";
import { useScrollBar } from "../hooks/useScrollbar";
import { ScrollStateContext } from "../ScrollArea.context";
import { Flex } from "@components/Layout/Flex";
import { IconButton } from "@components/Buttons/IconButton";
import { useRenderProps } from "@hooks/useRenderProps";

export interface ScrollbarProps
  extends RenderStyleProps<never>,
    ElementWrapper<HTMLDivElement> {
  orientation: "horizontal" | "vertical";
  size?: SuggestStrings<"viewport" | "auto">;
  show?: "always" | "auto";
  reserveSpace?: boolean;
}

export const Scrollbar = forwardRef<HTMLDivElement, ScrollbarProps>(
  function Scrollbar(props, ref) {
    const {
      orientation,
      size = "viewport",
      show = "auto",
      reserveSpace = false,
    } = props;

    const { viewportRef, state } = useContext(ScrollStateContext)!;
    const thumbRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    const {
      isScrollable,
      thumbProps,
      trackProps,
      advanceButtonProps,
      retreatButtonProps,
    } = useScrollBar(
      {
        viewportRef: viewportRef,
        trackRef: trackRef,
        orientation,
        size,
      },
      state
    );

    const isHorizontal = orientation === "horizontal";
    let containerStyles = {};

    if (size === "viewport") {
      containerStyles = isHorizontal
        ? { width: `${state.clientWidth}px` }
        : { height: `${state.clientHeight}px` };
    } else if (size && size !== "auto") {
      containerStyles = isHorizontal ? { width: size } : { height: size };
    }

    const renderProps = useRenderProps({
      componentClassName: `aje-scrollarea__scrollbar`,
      ...props,
      size: undefined,
    });

    if (!isScrollable && show === "auto" && !reserveSpace) {
      return null;
    }

    const visibilityStyle =
      !isScrollable && reserveSpace ? { visibility: "hidden" as const } : {};

    return (
      <Flex
        ref={ref}
        $height="100%"
        $align="center"
        $direction={orientation === "horizontal" ? "row" : "column"}
        $gap="1"
        {...filterDOMProps(props)}
        {...renderProps}
        style={{
          ...containerStyles,
          ...visibilityStyle,
          ...renderProps.style,
        }}
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
          icon={
            orientation === "horizontal" ? "arrow_right" : "arrow_drop_down"
          }
          variant="scrollbar"
        />
      </Flex>
    );
  }
);

Scrollbar.displayName = "ScrollArea.Bar";
