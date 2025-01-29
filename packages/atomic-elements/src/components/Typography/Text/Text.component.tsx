import { forwardRef } from "react";
import { ElementWrapper, RenderBaseProps } from "../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { TypographyProps } from "../../../styles/typography";
import { TextContext } from "./Text.context";
import { TextWrapper } from "./Text.styles";
import { MarginProps } from "@styles/layout";
import { TextColorProps } from "@styles/colors";

export interface TextProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLSpanElement>,
    TypographyProps,
    MarginProps,
    TextColorProps {
  as?: "div" | "span" | "p" | "label";
}

export const Text = forwardRef<
  HTMLDivElement | HTMLSpanElement | HTMLParagraphElement | HTMLLabelElement,
  TextProps
>(function Text(props, ref) {
  [props, ref] = useContextProps(TextContext, props, ref);

  const { className, style, children, ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-text",
    className,
    style,
    children,
  });

  return (
    <TextWrapper ref={ref} {...renderProps} {...rest}>
      {renderProps.children}
    </TextWrapper>
  );
});

Text.displayName = "Text";
