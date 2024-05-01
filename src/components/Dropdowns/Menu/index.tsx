import React, { useRef } from "react";
import { Item, TreeState, useTreeState } from "react-stately";
import cn from "classnames";
import { Node } from "@react-types/shared";
import {
  AriaMenuProps,
  mergeProps,
  useMenu,
  useMenuItem,
  useMenuSection,
  useSeparator,
} from "react-aria";
import {
  MenuList,
  MenuOption,
  MenuSectionSeperator,
  MenuSectionTitle,
  SubMenuList,
} from "./Menu.styles";
import { BaseProps } from "../../../types";
import { useContextProps } from "../../../hooks/useContextProps";
import { cloneComponent } from "../../../clone";
import { MenuContext } from "./context";

export type MenuProps<T> = Omit<AriaMenuProps<T>, "onAction"> &
  Omit<BaseProps, "size">;

/** A Menu is a collection of items that the user can select.
 * When an item in the menu is selected, an associated action is performed */
export function Menu<T extends {}>(props: MenuProps<T>) {
  const mergedProps = useContextProps(MenuContext, props);
  const state = useTreeState(props);
  const ref = useRef<HTMLUListElement>(null);
  const { menuProps } = useMenu(
    {
      ...mergedProps,
      onAction: (key) => {
        const item = state.collection.getItem(key);
        if (item && item.props.onAction) {
          item.props.onAction();
        }
      },
    },
    state,
    ref
  );

  const { className } = mergedProps;

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

  let { separatorProps } = useSeparator({
    elementType: "li",
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && (
        <MenuSectionSeperator {...separatorProps} />
      )}
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

interface MenuItemImplProps {
  item: any;
  state: any;
}

function MenuItemImpl(props: MenuItemImplProps) {
  const { item, state } = props;
  const ref = useRef<HTMLLIElement>(null);

  const { menuItemProps, isSelected } = useMenuItem(
    { key: item.key },
    state,
    ref
  );

  return (
    <MenuOption {...menuItemProps} ref={ref}>
      {item.rendered}
      {isSelected && <span aria-hidden="true">✅</span>}
    </MenuOption>
  );
}

export interface MenuItemProps<T> {
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

const MenuItem = cloneComponent(Item, "Menu.Item") as <T>(
  props: MenuItemProps<T>
) => JSX.Element;

Menu.Item = MenuItem;
