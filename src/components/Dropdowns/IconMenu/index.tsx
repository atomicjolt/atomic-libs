import React from "react";
import { Item, MenuTriggerProps } from "react-stately";
import { AriaMenuProps, Placement } from "react-aria";
import IconButton from "../../Buttons/IconButton";
import { BaseProps, CanHaveIcon, LoadingProps } from "../../../types";
import { Popover } from "../../Overlays/Popover";
import { MenuItemProps, Menu } from "../Menu";
import { ButtonVariants } from "../../Buttons/Buttons.types";
import { cloneComponent } from "../../../clone";
import { MenuTrigger } from "../Menu/MenuTrigger";

export type IconMenuProps<T extends object> = Omit<
  AriaMenuProps<T>,
  "onAction"
> &
  MenuTriggerProps &
  BaseProps &
  CanHaveIcon &
  LoadingProps & {
    isDisabled?: boolean;
    buttonVariant?: ButtonVariants;
    menuPlacement?: Placement;
    children:
      | React.ReactElement<MenuItemProps<T>>[]
      | React.ReactElement<MenuItemProps<T>>;
  };
export function IconMenu<T extends {}>(props: IconMenuProps<T>) {
  const {
    icon = "more_vert",
    className,
    iconVariant,
    buttonVariant,
    menuPlacement = "bottom right",
    isDisabled,
    isLoading,
    loadingComplete,
    loadingLabel,
    ...rest
  } = props;

  return (
    <MenuTrigger {...rest}>
      <IconButton
        icon={icon}
        iconVariant={iconVariant}
        variant={buttonVariant}
        className={className}
        isDisabled={isDisabled}
        isLoading={isLoading}
        loadingComplete={loadingComplete}
        loadingLabel={loadingLabel}
      />
      <Popover placement={menuPlacement}>
        <Menu {...props}>{props.children}</Menu>
      </Popover>
    </MenuTrigger>
  );
}

const IconMenuItem = cloneComponent(Item, "IconMenu.Item") as <T>(
  props: MenuItemProps<T>
) => JSX.Element;

IconMenu.Item = IconMenuItem;

export default IconMenu;
