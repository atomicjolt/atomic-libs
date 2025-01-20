import { forwardRef } from "react";
import { RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { DisplayProps, LayoutProps } from "@styles/layout";
import { ViewContext } from "./View.context";
import { ViewWrapper } from "./View.styles";

export interface ViewProps
  extends RenderBaseProps<never>,
    LayoutProps,
    DisplayProps {
  as?: "div" | "span";
  children?: React.ReactNode;
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
