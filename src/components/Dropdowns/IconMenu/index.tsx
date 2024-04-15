import React, { useRef } from "react";
import { Item, MenuTriggerProps, useMenuTriggerState } from "react-stately";
import { AriaMenuProps, Placement, useMenuTrigger } from "react-aria";
import IconButton from "../../Buttons/IconButton";
import { BaseProps, CanHaveIcon, LoadingProps } from "../../../types";
import { Popover } from "../../Internal/Popover";
import { Menu } from "../Menu";
import { ButtonVariants } from "../../Buttons/Buttons.types";
import { cloneComponent } from "../../../clone";

export type IconMenuProps = Omit<AriaMenuProps<IconMenuItemProps>, "onAction"> &
  MenuTriggerProps &
  BaseProps &
  CanHaveIcon &
  LoadingProps & {
    isDisabled?: boolean;
    buttonVariant?: ButtonVariants;
    menuPlacement?: Placement;
  };

export function IconMenu(props: IconMenuProps) {
  const state = useMenuTriggerState(props);
  const ref = useRef<HTMLButtonElement>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<IconMenuItemProps>(
    { trigger: props.trigger },
    state,
    ref
  );

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
  } = props;

  return (
    <>
      <IconButton
        icon={icon}
        iconVariant={iconVariant}
        variant={buttonVariant}
        ref={ref}
        className={className}
        isDisabled={isDisabled}
        isLoading={isLoading}
        loadingComplete={loadingComplete}
        loadingLabel={loadingLabel}
        {...menuTriggerProps}
      />
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement={menuPlacement}>
          <Menu {...props} {...menuProps} />
        </Popover>
      )}
    </>
  );
}

interface IconMenuItemProps {
  /** Rendered contents of the item or child items. */
  children: React.ReactNode;
  /** A string representation of the item's contents, used for features like typeahead. */
  textValue?: string;
  /** An accessibility label for this item. */
  "aria-label"?: string;
  /** Callback when the item is selected from the menu */
  onAction?: () => void;
}

const IconMenuItem = cloneComponent(Item, "IconMenu.Item") as <T>(
  props: IconMenuItemProps
) => JSX.Element;

IconMenu.Item = IconMenuItem;

export default IconMenu;
