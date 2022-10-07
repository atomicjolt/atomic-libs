import React from "react";
import cn from "classnames";
import {
  HasClassName,
  MaterialIcons,
  MaterialIconVariants,
} from "../../../types";
import { useVariantClass } from "../../../hooks";

export interface MaterialIconProps
  extends Omit<React.HTMLProps<HTMLElement>, "size" | "className">,
    HasClassName {
  icon: MaterialIcons;
  /** The type of material icon to
   * render. Note that the font for that style needs to be in scope for it to render properly*/
  variant?: MaterialIconVariants;
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
