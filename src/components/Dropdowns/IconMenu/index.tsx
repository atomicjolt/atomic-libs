import React from "react";
import { Item, MenuTriggerProps } from "react-stately";
import { AriaMenuProps } from "@react-aria/menu";
import { Placement } from "@react-aria/overlays";
import IconButton from "../../Buttons/IconButton";
import { BaseProps, CanHaveIcon, LoadingProps } from "../../../types";
import { Popover } from "../../Overlays/Popover";
import { MenuTrigger } from "../Menu/MenuTrigger";
import { MenuItemProps, Menu } from "../Menu";
import { ButtonVariants } from "../../Buttons/Buttons.types";
import { cloneComponent } from "../../../utils/clone";

export type IconMenuProps<T extends object> = AriaMenuProps<T> &
  MenuTriggerProps &
  BaseProps &
  CanHaveIcon &
  LoadingProps & {
    isDisabled?: boolean;
    buttonVariant?: ButtonVariants;
    menuPlacement?: Placement;
    children:
      | React.ReactElement<MenuItemProps<T>>[]
      | React.ReactElement<MenuItemProps<T>>
      | ((item: T) => React.ReactElement<MenuItemProps<T>>);
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
        <Menu {...rest}>{props.children}</Menu>
      </Popover>
    </MenuTrigger>
  );
}

const IconMenuItem = cloneComponent(Item, "IconMenu.Item") as <T>(
  props: MenuItemProps<T>
) => JSX.Element;

IconMenu.Item = IconMenuItem;

export default IconMenu;
