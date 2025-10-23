import { MenuTriggerProps } from "react-stately";
import { AriaMenuProps } from "@react-aria/menu";
import { Placement } from "@react-aria/overlays";
import { BaseProps, CanHaveIcon, LoadingProps } from "../../../types";
import { Popover } from "../../Overlays/Popover";
import { MenuTrigger } from "../Menu/MenuTrigger";
import { Menu, MenuSectionProps } from "../Menu";
import { IconButton } from "@components/Buttons/IconButton";
import { ButtonVariants } from "@components/Buttons/Button";
import { ItemProps } from "@components/Collection";
import { CollectionChildren } from "@react-types/shared";

export type IconMenuProps<T extends object> = AriaMenuProps<T> &
  MenuTriggerProps &
  BaseProps &
  CanHaveIcon &
  LoadingProps & {
    isDisabled?: boolean;
    buttonVariant?: ButtonVariants;
    menuPlacement?: Placement;
    children: CollectionChildren<ItemProps>;
  };

export function IconMenu<T extends {}>(props: IconMenuProps<T>) {
  const {
    trigger,
    isOpen,
    defaultOpen,
    onOpenChange,
    selectedKeys,
    defaultSelectedKeys,
    onSelectionChange,
    disabledKeys,
    onAction,
    onClose,
    autoFocus,
    disallowEmptySelection,
    "aria-describedby": ariaDescribedby,
    "aria-label": ariaLabel,
    "aria-describedby": ariaDescribedBy,
    "aria-labelledby": ariaLabelledby,
    items,
    id,
    selectionMode,
    shouldFocusWrap,
    children,
    menuPlacement = "bottom right",
    icon = "more_vert",
    ...buttonProps
  } = props;

  return (
    <MenuTrigger
      trigger={trigger}
      isOpen={isOpen}
      defaultOpen={defaultOpen}
      onOpenChange={onOpenChange}
    >
      <IconButton {...buttonProps} icon={icon} aria-label={ariaLabel} id={id} />
      <Popover placement={menuPlacement}>
        <Menu
          defaultSelectedKeys={defaultSelectedKeys}
          selectedKeys={selectedKeys}
          disabledKeys={disabledKeys}
          selectionMode={selectionMode}
          onSelectionChange={onSelectionChange}
          onClose={onClose}
          onAction={onAction}
          items={items}
          autoFocus={autoFocus}
          disallowEmptySelection={disallowEmptySelection}
          aria-describedby={ariaDescribedby}
          aria-label={ariaLabel}
          aria-labelledby={ariaLabelledby}
          shouldFocusWrap={shouldFocusWrap}
        >
          {props.children}
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}

IconMenu.displayName = "IconMenu";

const IconMenuItem = (props: ItemProps) => <Menu.Item {...props} />;
IconMenuItem.displayName = "IconMenu.Item";
/**
 * @deprecated use `Item` instead
 */
IconMenu.Item = IconMenuItem;

const IconMenuSection = <T extends object>(props: MenuSectionProps<T>) => (
  <Menu.Section {...props} />
);
IconMenuSection.displayName = "IconMenu.Section";
/**
 * @deprecated use `Section` instead
 */
IconMenu.Section = IconMenuSection;

export default IconMenu;
