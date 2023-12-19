import React, { ReactNode } from "react";
import cn from "classnames";
import { ButtonProps } from "../Button";
import Spinner from "../../Loaders/Spinner";
import IconMenu, { IconMenuProps } from "../../Dropdowns/IconMenu";
import { BaseStyledButton } from "../Buttons.styles";
import { StyledIconMenuButton } from "./IconMenuButton.styles";
import { MaterialIconVariants, MaterialIcons } from "../../../types";
import { PopoverPosition } from "../../Utility/Popover/Popover.types";

export type IconMenuButtonProps = Omit<ButtonProps, "variant"> & { 
  menuIcon: MaterialIcons;
  menuLabel: string;
  menuIconVariant?: MaterialIconVariants;
  menuPosition?: PopoverPosition;
  menuDisabled?: boolean;
  menuClassName?: string;
  menuChildren?: ReactNode;
};

export default function IconMenuButton(props: IconMenuButtonProps) {
  const {
    children,
    type = "button",
    disabled = false,
    loading = false,
    loadingLabel = "loading",
    loadingComplete = false,
    onClick,
    className,
    menuIcon,
    menuLabel,
    menuIconVariant,
    menuPosition,
    menuDisabled,
    menuClassName,
    menuChildren,
    ...rest
  } = props;

  const loadingText = loading ? loadingLabel : "";

  return (
    <StyledIconMenuButton>
      <BaseStyledButton
        aria-label={loadingText || undefined}
        type={type}
        className={cn("aje-btn", className, {
          "is-loading": loading,
        })}
        onClick={onClick}
        disabled={disabled}
        {...rest}
      >
        {loading && <Spinner loading={!loadingComplete} />}
        {children}
      </BaseStyledButton>
      <IconMenu label={menuLabel} icon={menuIcon} iconVariant={menuIconVariant} position={menuPosition} disabled={menuDisabled} className={menuClassName} children={menuChildren} />
    </StyledIconMenuButton>
  );
}