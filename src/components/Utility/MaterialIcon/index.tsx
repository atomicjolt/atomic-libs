import React from "react";
import cn from "classnames";
import { MaterialIcons } from "../../../types";

export interface MaterialIconProps
  extends Omit<React.HTMLProps<HTMLElement>, "size"> {
  icon: MaterialIcons;
  className?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

/** Small Utility component for rendering out
 * material-icons with some sensible defaults */
export default function MaterialIcon({
  icon,
  className,
  size = "medium",
  disabled = false,
  ...rest
}: MaterialIconProps) {
  return (
    <i
      className={cn("material-icons", className, `is-${size}`, {
        "is-disabled": disabled,
      })}
      aria-hidden={true}
      {...rest}
    >
      {icon}
    </i>
  );
}
