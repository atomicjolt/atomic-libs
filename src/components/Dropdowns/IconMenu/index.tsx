import React, { useRef } from "react";
import { Item, MenuTriggerProps, useMenuTriggerState } from "react-stately";
import { AriaMenuProps, Placement, useMenuTrigger } from "react-aria";
import IconButton from "../../Buttons/IconButton";
import { BaseProps, CanHaveIcon, LoadingProps } from "../../../types";
import { Popover } from "../../Internal/Popover";
import { Menu } from "../Menu";
import { ButtonVariants } from "../../Buttons/Buttons.types";
import { cloneComponent } from "../../../clone";

export type IconMenuProps<T> = Omit<AriaMenuProps<T>, "onAction"> &
  MenuTriggerProps &
  BaseProps &
  CanHaveIcon &
  LoadingProps & {
    isDisabled?: boolean;
    buttonVariant?: ButtonVariants;
    menuPlacement?: Placement;
    children:
      | React.ReactElement<IconMenuItemProps<T>>[]
      | React.ReactElement<IconMenuItemProps<T>>;
  };

export function IconMenu<T extends {}>(props: IconMenuProps<T>) {
  const state = useMenuTriggerState(props);
  const ref = useRef<HTMLButtonElement>(null);
  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
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

interface IconMenuItemProps<T> {
  /** Rendered contents of the item or child items. */
  children: React.ReactNode;
  /** Rendered contents of the item if `children` contains child items. */
  title?: React.ReactNode; // label?? contents?
  /** A string representation of the item's contents, used for features like typeahead. */
  textValue?: string;
  /** An accessibility label for this item. */
  "aria-label"?: string;
  /** A list of child item objects. Used for dynamic collections. */
  childItems?: Iterable<T>;
  /** Whether this item has children, even if not loaded yet. */
  hasChildItems?: boolean;
  /** Callback when the item is selected from the menu */
  onAction?: () => void;
}

const IconMenuItem = cloneComponent(Item, "IconMenu.Item") as <T>(
  props: IconMenuItemProps<T>
) => JSX.Element;

IconMenu.Item = IconMenuItem;

export default IconMenu;
