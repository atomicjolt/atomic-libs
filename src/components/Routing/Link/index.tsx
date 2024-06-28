import { useRef } from "react";
import { useLink, AriaLinkOptions, mergeProps } from "react-aria";
import { StyledLink } from "./Link.styles";
import { BaseProps } from "../../../types";
import { useRenderProps } from "@hooks/useRenderProps";

export interface LinkProps
  extends Omit<AriaLinkOptions, "elementType">,
    BaseProps {
  as?: "a" | "span";
  children: React.ReactNode;
}

/** Link component for both native browser-navigation and client-side navigation */
export function Link(props: LinkProps) {
  const { as, children, className, id } = props;
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
    selectors: {
      "data-pressed": isPressed,
    },
  });

  return (
    <StyledLink
      {...mergeProps(linkProps, renderProps)}
      id={id}
      ref={ref}
      as={as}
    >
      {children}
    </StyledLink>
  );
}
