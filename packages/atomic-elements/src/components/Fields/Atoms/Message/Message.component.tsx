import React from "react";
import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { ElementWrapperProps } from "../../../../types";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks";
import { MessageContext } from "./Message.context";

export const StyledMessage = styled.p`
  ${mixins.Regular}
  font-size: 1.3rem;
  padding-bottom: 5px;
  margin: 2px 0 0;
  color: var(--text-clr-alt);
`;

export interface MessageProps
  extends ElementWrapperProps<React.HTMLAttributes<HTMLParagraphElement>> {
  as?: React.ElementType;
}

/** A message associated with a field. Should be used to describe the purpose of the field */
export const Message = React.forwardRef(function Message(
  props: MessageProps,
  ref: React.Ref<HTMLParagraphElement>
) {
  [props, ref] = useContextProps(MessageContext, props, ref);
  const { as, className, size = "auto", ...rest } = props;

  const renderProps = useRenderProps({
    componentClassName: className,
    size,
  });

  return <StyledMessage as={as} ref={ref} {...renderProps} {...rest} />;
});
