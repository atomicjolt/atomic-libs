import React from "react";
import styled from "styled-components";
import mixins from "../../../../styles/mixins";
import { ElementWrapperProps } from "../../../../types";
import classNames from "classnames";

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

/** A wrapper around an `<p />`  styled as a field message **/
export const Message = React.forwardRef(function Message(
  props: MessageProps,
  ref: React.Ref<HTMLParagraphElement>
) {
  const { as, className, size = "auto", ...rest } = props;

  return (
    <StyledMessage
      as={as}
      ref={ref}
      className={classNames(className, `is-${size}`)}
      {...rest}
    />
  );
});
