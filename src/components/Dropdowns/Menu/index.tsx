import { useRef } from "react";
import { Item, ItemProps, TreeState, useTreeState } from "react-stately";
import cn from "classnames";
import { Node } from "@react-types/shared";
import {
  AriaMenuProps,
  useMenu,
  useMenuItem,
  useMenuSection,
} from "@react-aria/menu";
import {
  MenuList,
  MenuOption,
  MenuSectionTitle,
  SubMenuList,
} from "./Menu.styles";
import { BaseProps, DropdownProps } from "../../../types";
import { useContextProps } from "../../../hooks/useContextProps";
import { cloneComponent } from "../../../utils/clone";
import { Divider } from "@components/Layout/Divider";
import { MenuContext } from "./context";

export type MenuProps<T> = AriaMenuProps<T> & Omit<BaseProps, "size">;

/** A Menu is a collection of items that the user can select.
 * When an item in the menu is selected, an associated action is performed */
export function Menu<T extends {}>(props: MenuProps<T>) {
  const mergedProps = useContextProps(MenuContext, props);
  const state = useTreeState(props);
  const ref = useRef<HTMLUListElement>(null);
  const { className, onAction } = mergedProps;

  const { menuProps } = useMenu(
    {
      ...mergedProps,
      onAction: (key) => {
        const item = state.collection.getItem(key);
        item?.props?.onAction?.();
        onAction?.(key);
      },
    },
    state,
    ref
  );

  return (
    <MenuList {...menuProps} ref={ref} className={cn("aje-menu", className)}>
      {[...state.collection].map((item) => {
        switch (item.type) {
          case "section":
            return <MenuSection key={item.key} section={item} state={state} />;
          case "item":
            return <MenuItemImpl key={item.key} item={item} state={state} />;
          default:
            throw new Error(`Invalid menu item: '${item.type}'`);
        }
      })}
    </MenuList>
  );
}
interface MenuSectionProps<T> {
  section: Node<T>;
  state: TreeState<T>;
}

function MenuSection<T>(props: MenuSectionProps<T>) {
  const { section, state } = props;
  let { itemProps, headingProps, groupProps } = useMenuSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && <Divider as="li" />}
      <li {...itemProps}>
        {section.rendered && (
          <MenuSectionTitle {...headingProps}>
            {section.rendered}
          </MenuSectionTitle>
        )}
        <SubMenuList {...groupProps}>
          {/* FIXME: remove use of deprecated property */}
          {[...section.childNodes].map((node) => (
            <MenuItemImpl key={node.key} item={node} state={state} />
          ))}
        </SubMenuList>
      </li>
    </>
  );
}

interface MenuItemImplProps<T> {
  item: Node<T>;
  state: TreeState<T>;
}

function MenuItemImpl<T>(props: MenuItemImplProps<T>) {
  const { item, state } = props;
  const ref = useRef<HTMLLIElement>(null);

  const { menuItemProps, isSelected } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <MenuOption {...menuItemProps} ref={ref} as={item.props.href ? "a" : "li"}>
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </MenuOption>
  );
}

export interface MenuItemProps<T> extends ItemProps<T> {
  onAction?: () => void;
}

const MenuItem = cloneComponent(Item, "Menu.Item") as <T>(
  props: MenuItemProps<T>
) => JSX.Element;

Menu.Item = MenuItem;
