import React from "react";
import {
  IconComponentBase,
  MaterialIcons,
  MaterialIconVariants,
} from "../../../types";
import { useRenderProps } from "../../../hooks";
import { StyledIcon } from "../Icons.styles";
import { filterDOMProps, mergeProps, useObjectRef } from "@react-aria/utils";
import { useFocusable } from "@react-aria/focus";

export interface MaterialIconProps extends IconComponentBase<never> {
  icon: MaterialIcons;
  /** The type of material icon to
   * render. Note that the font for that
   * style needs to be in scope for it to render properly */
  variant?: MaterialIconVariants;

  /** @deprecated - use isDisabled */
  disabled?: boolean;
}

/** Small Utility component for rendering out
 * material-icons with some sensible defaults */
export const MaterialIcon = React.forwardRef<HTMLElement, MaterialIconProps>(
  function MaterialProps(props, forwardedRef) {
    const {
      icon,
      className,
      variant = "default",
      size = "medium",
      disabled = false,
      isDisabled = disabled,
      style,
      ...rest
    } = props;

    const ref = useObjectRef(forwardedRef);

    const materialIconClass =
      variant === "default" ? "material-icons" : `material-icons-${variant}`;

    const renderProps = useRenderProps({
      componentClassName: "aje-icon",
      className: [materialIconClass, className],
      size,
      style,
      selectors: {
        "data-disabled": isDisabled,
      },
    });

    // We use the focusable hook so that the icon supports tooltips
    // when the icon itself isn't actually focusable
    const { focusableProps } = useFocusable({}, ref);

    const componentProps = mergeProps(
      filterDOMProps(rest),
      renderProps,
      focusableProps
    );

    return (
      <StyledIcon ref={ref} aria-hidden {...componentProps}>
        {icon}
      </StyledIcon>
    );
  }
);

export default MaterialIcon;
