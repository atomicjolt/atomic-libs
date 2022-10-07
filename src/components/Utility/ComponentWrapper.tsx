import React from "react";
import cn, { Argument } from "classnames";
import { Sizes } from "../../types";

interface ComponentWrapperProps {
  className: Argument | Argument[];
  size?: Sizes;
  disabled?: boolean;
  required?: boolean;
  error?: any;
  children: React.ReactNode;
}

export default React.forwardRef(
  (props: ComponentWrapperProps, ref: React.ForwardedRef<HTMLDivElement>) => {
    const { className, size, disabled, required, children, error } = props;
    return (
      <div
        className={cn(className, {
          [`is-${size}`]: size,
          "has-error": error,
          "is-disabled": disabled,
          "is-required": required,
        })}
        ref={ref}
      >
        {children}
      </div>
    );
  }
);
