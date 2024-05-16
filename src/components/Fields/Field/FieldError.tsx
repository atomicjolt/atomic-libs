import React, { useContext } from "react";
import { FieldErrorContext } from "../contexts";
import classNames from "classnames";
import { ErrorMessage, ErrorMessageProps } from "../Atoms/ErrorMessage";

export interface FieldErrorMessageProps extends ErrorMessageProps {}

/** An Error Message component that should be nested within a field */
export function FieldErrorMessage(props: FieldErrorMessageProps) {
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
