import { forwardRef } from "react";
import { ElementWrapper, RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { DisplayProps, LayoutProps } from "@styles/layout";
import { BackgroundColorProps } from "@styles/colors";
import { ViewContext } from "./View.context";
import { ViewWrapper } from "./View.styles";
import { BorderProps } from "@styles/border";

export interface ViewProps
  extends RenderBaseProps<never>,
    LayoutProps,
    DisplayProps,
    BackgroundColorProps,
    BorderProps,
    ElementWrapper<HTMLDivElement> {
  as?: "div" | "span";
}

/** View is the fundemental layout building block.  */
export const View = forwardRef<HTMLDivElement, ViewProps>(function View(
  props,
  ref
) {
  [props, ref] = useContextProps(ViewContext, props, ref);
  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-view",
    className,
    style,
    children,
  });

  return <ViewWrapper ref={ref} {...renderProps} {...rest} />;
});
