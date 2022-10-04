import React from "react";
import cn from "classnames";
import { MaterialIcons } from "../../../types";
import { useVariantClass } from "../../../hooks";

export type MaterialIconVariants =
  | "default"
  | "outlined"
  | "round"
  | "sharp"
  | "two-tone";
export interface MaterialIconProps
  extends Omit<React.HTMLProps<HTMLElement>, "size"> {
  icon: MaterialIcons;
  /** The type of material icon to
   * render. Note that the font for that style needs to be in scope for it to render properly*/
  variant?: MaterialIconVariants;
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
