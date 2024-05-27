import { useRef } from "react";
import { useLink, AriaLinkOptions } from "react-aria";
import { StyledLink } from "./Link.styles";

interface LinkProps extends Omit<AriaLinkOptions, "elementType"> {
  as?: "a" | "span";
  children: React.ReactNode;
}

export function Link(props: LinkProps) {
  const ref = useRef(null);
  const { linkProps, isPressed } = useLink(
    {
      ...props,
      elementType: props.as,
    },
    ref
  );

  const { as, children } = props;

  return (
    <StyledLink {...linkProps} data-pressed={isPressed} ref={ref} as={as}>
      {children}
    </StyledLink>
  );
}
