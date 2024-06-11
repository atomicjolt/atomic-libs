import { forwardRef } from "react";
import { mergeProps, useButton, useLink } from "react-aria";
import { HasIcon } from "../../../types";
import Spinner from "../../Loaders/Spinner";
import MaterialIcon from "../../Icons/MaterialIcon";
import { StyledIconButton } from "./IconButton.styles";
import useForwardedRef from "../../../hooks/useForwardedRef";
import { useRenderProps } from "@/hooks/useRenderProps";
import { ButtonProps } from "../Button";
import { useFocusRing } from "../../../hooks/useFocusRing";

export type IconButtonProps = Omit<ButtonProps, "children"> & HasIcon;

/** Similar to the Button component, but is intended to display just an icon instead of text.
 * Because of this, you should provide an `aria-label` for accessiblity */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (props, ref) => {
    const {
      icon,
      isLoading,
      loadingComplete,
      loadingLabel,
      variant = "border",
      iconVariant = "default",
      className,
      size = "medium",
      as = "button",
    } = props;
    const innerRef = useForwardedRef<HTMLButtonElement>(ref);
    const { buttonProps, isPressed } = useButton(
      {
        ...props,
        "aria-label": isLoading ? loadingLabel : props["aria-label"],
      },
      innerRef
    );

    const { focusProps } = useFocusRing();

    const { linkProps } = useLink(
      {
        href: props.href,
        rel: props.rel,
        target: props.target,
        elementType: as,
      },
      innerRef
    );

    const renderProps = useRenderProps({
      componentClassName: "aje-btn",
      className: ["aje-btn--icon", className],
      variant,
      selectors: {
        "data-loading": isLoading,
        "data-pressed": isPressed,
      },
    });

    return (
      <StyledIconButton
        type="button"
        as={as}
        ref={innerRef}
        {...mergeProps(buttonProps, focusProps, linkProps, renderProps)}
      >
        {isLoading && <Spinner isLoading={!loadingComplete} isCentered />}
        <MaterialIcon icon={icon} variant={iconVariant} size={size} />
      </StyledIconButton>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
