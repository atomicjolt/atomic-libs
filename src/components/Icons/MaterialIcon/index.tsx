import React from "react";
import cn from "classnames";
import {
  HasClassName,
  MaterialIcons,
  MaterialIconVariants,
  Size,
} from "../../../types";
import { useRenderProps } from "../../../hooks";
import { StyledIcon } from "../Icons.styles";

export interface MaterialIconProps
  extends Omit<
      React.HTMLProps<HTMLElement>,
      "size" | "className" | "ref" | "as"
    >,
    HasClassName {
  icon: MaterialIcons;
  /** The type of material icon to
   * render. Note that the font for that
   * style needs to be in scope for it to render properly */
  variant?: MaterialIconVariants;
  size?: Size;

  isDisabled?: boolean;

  /** @deprecated - use isDisabled */
  disabled?: boolean;
}

/** Small Utility component for rendering out
 * material-icons with some sensible defaults */
export const MaterialIcon = React.forwardRef<HTMLElement, MaterialIconProps>(
  function MaterialProps(props, ref) {
    const {
      icon,
      className,
      variant = "default",
      size = "medium",
      disabled = false,
      isDisabled = disabled,
      ...rest
    } = props;

    const materialIconClass =
      variant === "default" ? "material-icons" : `material-icons-${variant}`;

    const renderProps = useRenderProps({
      componentClassName: "aje-icon",
      className: [materialIconClass, className],
      size,
      selectors: {
        "data-disabled": isDisabled,
      },
    });

    return (
      <StyledIcon ref={ref} aria-hidden {...renderProps} {...rest}>
        {icon}
      </StyledIcon>
    );
  }
);

export default MaterialIcon;
