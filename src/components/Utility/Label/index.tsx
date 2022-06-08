import React from "react";
import cn from "classnames";
import "./styles.scss";
import { HasChildren } from "../../../types";

export interface Props {
  children: React.ReactNode;
  message?: string;
  htmlFor: string;
  hidden?: boolean;
  id?: string;
  error?: string;
}

export default function Label({
  children,
  message,
  htmlFor,
  hidden,
  id,
  error,
}: Props) {
  const classes = cn("aj-label", { "aj-hidden": hidden });

  return (
    <label className={classes} htmlFor={htmlFor} id={id}>
      {children}
      {message && <p className="aj-label--message">{message}</p>}
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
    <p id={id} className="aj-label--error">
      {children}
    </p>
  );
}
