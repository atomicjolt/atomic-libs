import React, { HTMLAttributes, useContext } from "react";
import styled from "styled-components";
import { FieldComponentProps } from "../../../types";
import { FieldErrorContext } from "./contexts";
import mixins from "../../../styles/mixins";
import classNames from "classnames";

export const ErrorMessage = styled.p`
  ${mixins.Bold}
  font-size: 1.3rem;
  margin: 3px 0 0;
  color: var(--error-clr);
`;

export interface FieldErrorProps
  extends FieldComponentProps<HTMLAttributes<HTMLParagraphElement>> {}

export function FieldErrorMessage(props: FieldErrorProps) {
  const { as, children, className, ...rest } = props;
  const { errorMessageProps, isInvalid } = useContext(FieldErrorContext);
  if (!isInvalid) return null;

  return (
    <ErrorMessage
      as={as}
      className={classNames(className)}
      {...rest}
      {...errorMessageProps}
    >
      {children}
    </ErrorMessage>
  );
}
