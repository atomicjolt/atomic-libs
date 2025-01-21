import { forwardRef } from "react";
import { ElementWrapper, RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { TypographyProps } from "@styles/typography";
import { MarginProps } from "@styles/layout";
import { HeadingContext } from "./Heading.context";
import { HeadingWrapper } from "./Heading.styles";

export interface HeadingProps extends RenderBaseProps<never> {}

export interface HeadingProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLSpanElement>,
    TypographyProps,
    MarginProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  function Heading(props, ref) {
    [props, ref] = useContextProps(HeadingContext, props, ref);

    const { className, style, children, $size = "6", ...rest } = props;

    const renderProps = useRenderProps({
      componentClassName: "aje-heading",
      className,
      style,
      children,
    });

    return (
      <HeadingWrapper ref={ref} $size={$size} {...renderProps} {...rest}>
        {renderProps.children}
      </HeadingWrapper>
    );
  }
);

Heading.displayName = "Heading";
