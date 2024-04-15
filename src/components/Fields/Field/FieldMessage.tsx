import React, { HTMLAttributes, HtmlHTMLAttributes, useContext } from "react";
import styled from "styled-components";
import { FieldComponentProps } from "../../../types";
import { FieldMessageContext } from "../contexts";
import mixins from "../../../styles/mixins";
import classNames from "classnames";

/** A styled field message */
export const Message = styled.p`
  ${mixins.Regular}
  font-size: 1.3rem;
  padding-bottom: 5px;
  margin: 2px 0 0;
  color: var(--text-clr-alt);
`;

export interface FieldMessageProps
  extends FieldComponentProps<HTMLAttributes<HTMLParagraphElement>> {}

export function FieldMessage(props: FieldMessageProps) {
  const { as, children, className, ...rest } = props;
  const messageProps = useContext(FieldMessageContext);

  return (
    <Message
      as={as}
      className={classNames(className)}
      {...rest}
      {...messageProps}
    >
      {children}
    </Message>
  );
}
