import React from "react";
import { MenuTriggerProps } from "react-stately";
import { AriaMenuProps } from "@react-aria/menu";
import { Placement } from "@react-aria/overlays";
import { BaseProps, CanHaveIcon, LoadingProps } from "../../../types";
import { Popover } from "../../Overlays/Popover";
import { MenuTrigger } from "../Menu/MenuTrigger";
import { MenuItemProps, Menu, MenuSectionProps } from "../Menu";
import { IconButton } from "../../Buttons/IconButton";
import { ButtonVariants } from "../../Buttons/Buttons.types";

export type IconMenuProps<T extends object> = AriaMenuProps<T> &
  MenuTriggerProps &
  BaseProps &
  CanHaveIcon &
  LoadingProps & {
    isDisabled?: boolean;
    buttonVariant?: ButtonVariants;
    menuPlacement?: Placement;
    children:
      | React.ReactElement<MenuItemProps>[]
      | React.ReactElement<MenuItemProps>
      | ((item: T) => React.ReactElement<MenuItemProps>);
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

const IconMenuItem = (props: MenuItemProps) => <Menu.Item {...props} />;
IconMenuItem.displayName = "IconMenu.Item";
IconMenu.Item = IconMenuItem;

const IconMenuSection = <T extends object>(props: MenuSectionProps<T>) => (
  <Menu.Section {...props} />
);
IconMenuSection.displayName = "IconMenu.Section";
IconMenu.Section = IconMenuSection;

export default IconMenu;
