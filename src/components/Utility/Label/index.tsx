import React from "react";
import cn from "classnames";
import { HasChildren } from "../../../types";

export interface LabelProps {
  children: React.ReactNode;
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
  error,
  className = "aje-label",
}: LabelProps) {
  const classes = cn(className, { "aje-hidden": hidden });

  return (
    <label className={classes} htmlFor={htmlFor} id={id}>
      {children}
      {message && <p className="aje-label--message">{message}</p>}
      {error && <ErrorLabel>{error}</ErrorLabel>}
    </label>
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
