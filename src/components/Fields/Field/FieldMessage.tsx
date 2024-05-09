import React, { useContext } from "react";
import { FieldMessageContext } from "../contexts";
import classNames from "classnames";
import { Message, MessageProps } from "../Atoms/Message";

export interface FieldMessageProps extends MessageProps {}

/** A Message that should be nested within a field */
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
