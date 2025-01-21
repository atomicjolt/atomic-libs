import { useRef } from "react";
import { useLink, AriaLinkOptions } from "@react-aria/link";
import { mergeProps } from "@react-aria/utils";
import { DomProps, RenderBaseProps } from "../../../types";
import { TypographyProps } from "@styles/typography";
import { MarginProps } from "@styles/layout";
import { ColorProps } from "@styles/colors";
import { useRenderProps } from "@hooks/useRenderProps";
import { StyledLink } from "./Link.styles";

export interface LinkProps
  extends Omit<AriaLinkOptions, "elementType">,
    RenderBaseProps<never>,
    TypographyProps,
    MarginProps,
    ColorProps,
    DomProps {
  as?: "a" | "span";
}

/** Link component for both native browser-navigation and client-side navigation */
export function Link(props: LinkProps) {
  const { as, children, className, style, ...rest } = props;
  const ref = useRef(null);
  const { linkProps, isPressed } = useLink(
    {
      ...props,
      elementType: props.as,
    },
    ref
  );

  const renderProps = useRenderProps({
    componentClassName: "aje-link",
    className,
    children,
    style,
    selectors: {
      "data-pressed": isPressed,
    },
  });

  return (
    <StyledLink
      ref={ref}
      as={as}
      {...mergeProps(linkProps, renderProps)}
      {...rest}
    >
      {renderProps.children}
    </StyledLink>
  );
}
