import { forwardRef } from "react";
import { HasIcon } from "../../../types";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { StyledIconButton } from "./IconButton.styles";
import { useContextProps } from "@hooks/useContextProps";
import { ButtonContext } from "../Button/Button.context";
import classNames from "classnames";
import { BaseButton, ButtonProps } from "@components/Internal/BaseButton";

export interface IconButtonProps
  extends Omit<ButtonProps, "children">,
    HasIcon {}

/** A button designed for displaying a single icon. The button has no text content,
 * so you should provide an aria-label for accessiblity
 *
 * @example <IconButton icon="add" aria-label="Add" onPress={() => alert("Hello, world!")} />
 * */
export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  function IconButton(props, ref) {
    [props, ref] = useContextProps(ButtonContext as any, props, ref);

    const {
      icon,
      iconVariant,
      size = "medium",
      variant = "border",
      className,
      ...rest
    } = props;

    return (
      <BaseButton
        {...rest}
        Component={StyledIconButton}
        size={size}
        variant={variant}
        ref={ref}
        data-icon-button
        className={classNames("aje-icon-btn", className)}
      >
        <MaterialIcon icon={icon} variant={iconVariant} size={size} />
      </BaseButton>
    );
  }
);
