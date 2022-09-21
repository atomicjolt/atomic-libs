import React from "react";
import cn from "classnames";
import { HasChildren } from "../../../types";

export interface LabelProps extends HasChildren {
  message?: string;
  htmlFor: string;
  hidden?: boolean;
  id?: string;
  error?: string;
  className?: string;
}

export default function Label({
  children,
  message,
  htmlFor,
  hidden,
  id,
  className = "aje-label",
  error,
}: LabelProps) {
  const classes = cn(className, { "aje-hidden": hidden });

  return (
    <>
      <label className={classes} htmlFor={htmlFor} id={id}>
        {children}
      </label>
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