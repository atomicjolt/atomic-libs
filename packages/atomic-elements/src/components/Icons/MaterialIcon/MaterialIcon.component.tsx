import React from "react";
import {
  ExtendedSize,
  MaterialIcons,
  MaterialIconVariants,
  RenderBaseProps,
} from "../../../types";
import { useRenderProps } from "../../../hooks";
import { StyledIcon } from "../Icons.styles";
import { filterDOMProps, mergeProps } from "@react-aria/utils";
import { useFocusable } from "@react-aria/focus";
import useForwardedRef from "@hooks/useForwardedRef";

export interface MaterialIconProps
  extends Omit<React.ComponentProps<"i">, "className" | "style" | "children">,
    RenderBaseProps<never> {
  icon: MaterialIcons;
  /** The type of material icon to
   * render. Note that the font for that
   * style needs to be in scope for it to render properly */
  variant?: MaterialIconVariants;
  size?: ExtendedSize;

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
      style,
      ...rest
    } = props;

    const internalRef = useForwardedRef(ref);

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
    const { focusableProps } = useFocusable({}, internalRef);

    const componentProps = mergeProps(
      filterDOMProps(rest),
      renderProps,
      focusableProps
    );

    return (
      <StyledIcon ref={internalRef} aria-hidden {...componentProps}>
        {icon}
      </StyledIcon>
    );
  }
);

export default MaterialIcon;
