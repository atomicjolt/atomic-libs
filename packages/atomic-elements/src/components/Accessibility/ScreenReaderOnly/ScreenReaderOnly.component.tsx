import React, { forwardRef } from "react";
import { ElementWrapper, RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { ScreenReaderOnlyContext } from "./ScreenReaderOnly.context";
import { ScreenReaderOnlyWrapper } from "./ScreenReaderOnly.styles";

export interface ScreenReaderOnlyProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLSpanElement> {}

/**
 * A component that visually hides its children but keeps them accessible to screen readers.
 */
export const ScreenReaderOnly = forwardRef<
  HTMLSpanElement,
  ScreenReaderOnlyProps
>(function ScreenReaderOnly(props, ref) {
  [props, ref] = useContextProps(ScreenReaderOnlyContext, props, ref);

  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-screenreaderonly",
    className,
    style,
    children,
  });

  return (
    <ScreenReaderOnlyWrapper
      ref={ref}
      role="status"
      aria-live="polite"
      {...renderProps}
      {...rest}
    >
      {renderProps.children}
    </ScreenReaderOnlyWrapper>
  );
});

ScreenReaderOnly.displayName = "ScreenReaderOnly";
