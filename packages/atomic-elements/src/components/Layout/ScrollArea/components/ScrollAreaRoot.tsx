import { forwardRef, useRef } from "react";
import { ElementWrapper, RenderBaseProps } from "../../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { ScrollAreaContext, ScrollStateContext } from "../ScrollArea.context";
import { ScrollAreaWrapper } from "../ScrollArea.styles";
import { useScrollState } from "../hooks/useScrollState";

export interface ScrollAreaRootProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement> {}

/**
 * Component for creating a scrollable area with custom scrollbars.
 */
export const ScrollAreaRoot = forwardRef<HTMLDivElement, ScrollAreaRootProps>(
  function ScrollAreaRoot(props, ref) {
    [props, ref] = useContextProps(ScrollAreaContext, props, ref);

    const { className, style, children, ...rest } = props;

    const viewportRef = useRef<HTMLDivElement>(null);

    const renderProps = useRenderProps({
      componentClassName: "aje-scrollarea",
      style,
      className,
      children,
    });

    const state = useScrollState();

    return (
      <ScrollStateContext.Provider value={{ state, viewportRef }}>
        <ScrollAreaWrapper ref={ref} {...renderProps} {...rest}>
          {renderProps.children}
        </ScrollAreaWrapper>
      </ScrollStateContext.Provider>
    );
  }
);

ScrollAreaRoot.displayName = "ScrollArea";
