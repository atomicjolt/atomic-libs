import { forwardRef } from "react";
import { CanHaveIcon } from "../../../types";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { StyledIconButton } from "./IconButton.styles";
import { ButtonProps } from "../Button";
import { useContextProps } from "@hooks/useContextProps";
import { ButtonContext } from "../Button/Button.context";

export interface IconButtonProps extends ButtonProps, CanHaveIcon {}

/** A button designed for displaying a single icon. The button has no text content,
 * so you should provide an aria-label for accessiblity
 *
 * @example
 * <IconButton aria-label="Add" onPress={() => alert("Hello, world!")}>
 *  <MaterialSybmol symbol="add" />
 * </IconButton>
 * */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, forwardedRef) {
    [props, forwardedRef] = useContextProps(
      ButtonContext as any,
      props,
      forwardedRef
    );

    if (!props["aria-label"] && !props["aria-labelledby"]) {
      console.warn(
        "IconButton should have an aria-label or aria-labelledby prop for accessibility"
      );
    }

    const {
      icon,
      iconVariant,
      size = "medium",
      variant = "border",
      as,
      children,
      ...rest
    } = props;

    return (
      // @ts-expect-error - forwardedAs isn't being typed correctly
      <StyledIconButton
        {...rest}
        size={size}
        variant={variant}
        ref={forwardedRef}
        forwardedAs={as}
      >
        {icon ? (
          <MaterialIcon icon={icon} variant={iconVariant} size={size} />
        ) : (
          children
        )}
      </StyledIconButton>
    );
  }
);
