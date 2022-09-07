import React from "react";
import cn from "classnames";
import { Sizes } from "../../types";

interface ComponentWrapperProps {
  className: string;
  size?: Sizes;
  disabled?: boolean;
  required?: boolean;
  error?: any;
  children: React.ReactNode;
}

export default function ComponentWrapper({
  className,
  size,
  disabled,
  required,
  children,
  error,
}: ComponentWrapperProps) {
  return (
    <div
      className={cn(className, {
        [`is-${size}`]: size,
        "has-error": error,
        "is-disabled": disabled,
        "is-required": required,
      })}
    >
      {children}
    </div>
  );
}
