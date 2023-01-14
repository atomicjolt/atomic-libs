import React from "react";
import cn from "classnames";
import { HasChildren, HasClassName } from "../../../types";
import { Label as StyledLabel } from "../../../styles/utils";

export interface LabelProps extends HasChildren, HasClassName {
  message?: string;
  htmlFor: string;
  hidden?: boolean;
  id?: string;
  error?: string;
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
      {message && <p className="aje-label--message">{message}</p>}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </>
  );
}

interface ErrorLabelProps {
  children: React.ReactNode;
  id?: string;
}

export function ErrorLabel({ children, id }: ErrorLabelProps) {
  return (
    <p id={id} className="aje-label--error">
      {children}
    </p>
  );
}
