import { forwardRef } from "react";
import { HasIcon } from "../../../types";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { StyledIconButton } from "./IconButton.styles";
import { ButtonProps } from "../Button";
import { useContextPropsV2 } from "@hooks/useContextProps";
import { ButtonContext } from "../Button/Button.context";

export interface IconButtonProps
  extends Omit<ButtonProps, "children">,
    HasIcon {}

/** A button designed for displaying a single icon. The button has no text content,
 * so you should provide an aria-label for accessiblity
 *
 * @example <IconButton icon="add" aria-label="Add" onPress={() => alert("Hello, world!")} />
 * */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, forwardedRef) {
    [props, forwardedRef] = useContextPropsV2(
      ButtonContext,
      props,
      forwardedRef
    );

    const {
      icon,
      iconVariant,
      size = "medium",
      variant = "border",
      as,
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
        <MaterialIcon icon={icon} variant={iconVariant} size={size} />
      </StyledIconButton>
    );
  }
);
