import React, { useRef } from "react";
import { TreeState, useTreeState } from "react-stately";
import cn from "classnames";
import { Node } from "@react-types/shared";
import {
  AriaMenuProps,
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
import { HasClassName } from "../../../types";

export type MenuProps<T> = AriaMenuProps<T> & HasClassName;

export function Menu<T extends {}>(props: MenuProps<T>) {
  const state = useTreeState(props);
  const ref = useRef<HTMLUListElement>(null);
  const { menuProps } = useMenu(props, state, ref);

  const { className } = props;

  return (
    <MenuList {...menuProps} ref={ref} className={cn("aje-menu", className)}>
      {[...state.collection].map((item) =>
        item.type === "section" ? (
          <MenuSection key={item.key} section={item} state={state} />
        ) : (
          <MenuItem key={item.key} item={item} state={state} />
        )
      )}
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
            <MenuItem key={node.key} item={node} state={state} />
          ))}
        </SubMenuList>
      </li>
    </>
  );
}

interface MenuItemProps {
  item: any;
  state: any;
}

function MenuItem(props: MenuItemProps) {
  const { item, state } = props;
  let ref = useRef<HTMLLIElement>(null);

  let { menuItemProps, isSelected } = useMenuItem(
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
