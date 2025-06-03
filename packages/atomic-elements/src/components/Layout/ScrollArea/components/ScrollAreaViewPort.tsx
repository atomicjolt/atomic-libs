import { useContext, forwardRef } from "react";
import { filterDOMProps, mergeRefs } from "@react-aria/utils";
import { ElementWrapper, RenderBaseProps } from "../../../../types";
import { useRenderProps } from "@hooks/useRenderProps";
import { ScrollAreaContent } from "../ScrollArea.styles";
import { ScrollStateContext } from "../ScrollArea.context";
import { useScrollArea } from "../hooks/useScrollArea";

export interface ScrollViewportProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement> {}

export const ScrollAreaViewport = forwardRef<
  HTMLDivElement,
  ScrollViewportProps
>(function ScrollViewport(props, forwardedRef) {
  const { viewportRef, state } = useContext(ScrollStateContext)!;

  const ref = mergeRefs(viewportRef, forwardedRef);

  const renderProps = useRenderProps({
    componentClassName: "aje-scrollarea__viewport",
    ...props,
  });

  const { scrollAreaProps } = useScrollArea(
    {
      viewportRef,
      children: renderProps.children,
    },
    state
  );

  return (
    <ScrollAreaContent
      ref={ref}
      {...filterDOMProps(props)}
      {...renderProps}
      {...scrollAreaProps}
    >
      {renderProps.children}
    </ScrollAreaContent>
  );
});

ScrollAreaViewport.displayName = "ScrollArea.Viewport";
