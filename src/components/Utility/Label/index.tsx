import React from "react";
import { DOMAttributes } from "@react-types/shared";
import cn from "classnames";
import { HasChildren, HasClassName } from "../../../types";
import {
  FieldError,
  Label as StyledLabel,
  FieldMessage,
  FloatingLabelWrapper,
} from "../../../styles/utils";

export interface LabelProps extends HasChildren, HasClassName {
  message?: React.ReactNode;
  htmlFor?: string;
  hidden?: boolean;
  id?: string;
  error?: React.ReactNode;
  messageProps?: DOMAttributes;
  errorProps?: DOMAttributes;
}

export default function Label(props: LabelProps) {
  const {
    children,
    message,
    htmlFor,
    hidden,
    id,
    className = "aje-label",
    error,
    messageProps = {},
    errorProps = {},
  } = props;
  const classes = cn(className, { "aje-hidden": hidden });

  return (
    <>
      <StyledLabel className={classes} htmlFor={htmlFor} id={id}>
        {children}
      </StyledLabel>
      {message && <FieldMessage {...messageProps}>{message}</FieldMessage>}
      {error && <FieldError {...errorProps}>{error}</FieldError>}
    </>
  );
}
