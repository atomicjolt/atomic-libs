import React from "react";
import cn from "classnames";

export interface Props {
  children: React.ReactNode;
  message?: string;
  htmlFor: string;
  hidden?: boolean;
  id?: string;
}

export default function InputLabel({
  children,
  message,
  htmlFor,
  hidden,
  id,
}: Props) {
  const classes = cn("aj-label", { "aj-hidden": hidden });

  return (
    <label className={classes} htmlFor={htmlFor} id={id}>
      {children}
      {message && <p className="aj-label--message">{message}</p>}
    </label>
  );
}
