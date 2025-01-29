import { forwardRef } from "react";
import { ElementWrapper, RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { MarginProps } from "@styles/layout";
import { EmContext } from "./Em.context";
import { EmWrapper } from "./Em.styles";
import { TextColorProps } from "@styles/colors";

export interface EmProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLSpanElement>,
    MarginProps,
    TextColorProps {}

export const Em = forwardRef<HTMLElement, EmProps>(function Em(props, ref) {
  [props, ref] = useContextProps(EmContext, props, ref);

  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-strong",
    className,
    style,
    children,
  });

  return (
    <EmWrapper ref={ref} {...renderProps} {...rest}>
      {renderProps.children}
    </EmWrapper>
  );
});

Em.displayName = "Em";
