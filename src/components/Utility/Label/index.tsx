import React from "react";
import cn from "classnames";
import { HasChildren, HasClassName } from "../../../types";
import {
  ErrorLabel,
  Label as StyledLabel,
  MessageLabel,
} from "../../../styles/utils";

export interface LabelProps extends HasChildren, HasClassName {
  message?: React.ReactNode;
  htmlFor?: string;
  hidden?: boolean;
  id?: string;
  error?: React.ReactNode;
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
  } = props;
  const classes = cn(className, { "aje-hidden": hidden });

  return (
    <>
      <StyledLabel className={classes} htmlFor={htmlFor} id={id}>
        {children}
      </StyledLabel>
      {message && <MessageLabel>{message}</MessageLabel>}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
}
