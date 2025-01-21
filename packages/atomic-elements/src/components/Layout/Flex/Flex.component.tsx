import { forwardRef } from "react";
import { ElementWrapper, RenderBaseProps } from "../../../types";
import { LayoutProps } from "@styles/layout";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { FlexStyleProps } from "@styles/flex";
import { FlexContext } from "./Flex.context";
import { FlexWrapper } from "./Flex.styles";

export interface FlexProps
  extends RenderBaseProps<never>,
    FlexStyleProps,
    LayoutProps,
    ElementWrapper<HTMLDivElement> {
  as?: "div" | "span";
}

/** Component to create flex layouts */
export const Flex = forwardRef<HTMLDivElement, FlexProps>(function Flex(
  props,
  ref
) {
  [props, ref] = useContextProps(FlexContext, props, ref);

  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-flex",
    className,
    style,
    children,
  });

  return (
    <FlexWrapper ref={ref} {...renderProps} {...rest}>
      {renderProps.children}
    </FlexWrapper>
  );
});

Flex.displayName = "Flex";
