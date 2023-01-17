import React from "react";
import cn from "classnames";
import styled from "styled-components";
import {
  HasClassName,
  MaterialIcons,
  MaterialIconVariants,
} from "../../../types";
import { useVariantClass } from "../../../hooks";

const StyledIcon = styled.i`
  &.is-small {
    font-size: 18px;
  }
  &.is-medium {
    font-size: 24px;
  }
  &.is-large {
    font-size: 36px;
  }

  &.is-disabled {
    color: rgba(0, 0, 0, 0.3);
  }
`;

export interface MaterialIconProps
  extends Omit<
      React.HTMLProps<HTMLElement>,
      "size" | "className" | "ref" | "as"
    >,
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
    <StyledIcon
      className={cn(variantClass, className, `is-${size}`, {
        "is-disabled": disabled,
      })}
      aria-hidden={true}
      {...rest}
    >
      {icon}
    </StyledIcon>
  );
}
