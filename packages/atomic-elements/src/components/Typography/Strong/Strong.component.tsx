import { forwardRef } from "react";
import { ElementWrapper, RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { StrongContext } from "./Strong.context";
import { StrongWrapper } from "./Strong.styles";
import { MarginProps } from "@styles/layout";
import { TextColorProps } from "@styles/colors";

export interface StrongProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLSpanElement>,
    MarginProps,
    TextColorProps {}

export const Strong = forwardRef<HTMLElement, StrongProps>(function Strong(
  props,
  ref
) {
  [props, ref] = useContextProps(StrongContext, props, ref);

  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-strong",
    className,
    style,
    children,
  });

  return (
    <StrongWrapper ref={ref} {...renderProps} {...rest}>
      {renderProps.children}
    </StrongWrapper>
  );
});

Strong.displayName = "Strong";
