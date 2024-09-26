import { forwardRef } from "react";
import { mergeProps } from "@react-aria/utils";
import { HasIcon } from "../../../types";
import { SpinnerLoader } from "../../Loaders/SpinnerLoader";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { StyledIconButton } from "./IconButton.styles";
import { useForwardedRef } from "../../../hooks/useForwardedRef";
import { useRenderProps } from "@hooks/useRenderProps";
import { ButtonProps } from "../Button";
import { useFocusRing } from "../../../hooks/useFocusRing";
import { useButtonLink } from "@hooks/useButtonLink";
import { useContextProps } from "@hooks/useContextProps";
import { ButtonContext } from "../Button/Button.context";

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
      as = props.href ? "a" : "button",
    } = useContextProps(ButtonContext, props as any);
    const innerRef = useForwardedRef<HTMLButtonElement>(ref);
    const { buttonProps, isPressed } = useButtonLink(
      {
        ...props,
        elementType: as,
        "aria-label": isLoading ? loadingLabel : props["aria-label"],
      },
      innerRef
    );

    const { focusProps } = useFocusRing();

    const renderProps = useRenderProps({
      componentClassName: "aje-btn",
      className: ["aje-btn--icon", className],
      size,
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
        {...mergeProps(buttonProps, focusProps, renderProps)}
      >
        {isLoading && (
          <SpinnerLoader
            isLoading={!loadingComplete}
            placement="absolute center"
          />
        )}
        <MaterialIcon icon={icon} variant={iconVariant} size={size} />
      </StyledIconButton>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
