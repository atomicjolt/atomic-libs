import React from "react";
import cn from "classnames";
import { MaterialIcons } from "../../../types";
import { useVariantClass } from "../../../hooks";

export interface MaterialIconProps
  extends Omit<React.HTMLProps<HTMLElement>, "size"> {
  icon: MaterialIcons;
  variant?: "default" | "outlined" | "round" | "sharp" | "two-tone";
  className?: string;
  size?: "small" | "medium" | "large";
  disabled?: boolean;
}

/** Small Utility component for rendering out
 * material-icons with some sensible defaults */
export default function MaterialIcon(props: MaterialIconProps) {
  const {
    icon,
    className,
    variant = "default",
    size = "medium",
    disabled = false,
    ...rest
  } = props;

  const variantClass = useVariantClass("material-icons", variant, "-");

  return (
    <i
      className={cn(variantClass, className, `is-${size}`, {
        "is-disabled": disabled,
      })}
      aria-hidden={true}
      {...rest}
    >
      {icon}
    </i>
  );
}
