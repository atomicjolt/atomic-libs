import React, { forwardRef, RefAttributes, useContext } from "react";
import classNames from "classnames";
import { useTreeState } from "react-stately";
import { Node, SectionProps } from "@react-types/shared";
import {
  AriaMenuProps,
  useMenu,
  useMenuItem,
  useMenuSection,
} from "@react-aria/menu";
import { filterDOMProps, mergeProps } from "@react-aria/utils";
import {
  BaseCollection,
  Collection,
  CollectionBuilder,
  createBranchComponent,
  createLeafComponent,
} from "@react-aria/collections";

import { RenderBaseProps, RenderStyleProps } from "../../../types";
import { Divider } from "@components/Layout/Divider";
import { useForwardedRef } from "@hooks/useForwardedRef";
import { Provider } from "@components/Internal/Provider";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { useRenderProps } from "@hooks";
import { useFocusRing } from "@hooks/useFocusRing";
import { useContextPropsV2 } from "@hooks/useContextProps";
import { ItemContext, ItemProps, SectionContext } from "@components/Collection";

import { MenuContext, MenuStateContext } from "./Menu.context";
import {
  MenuList,
  MenuOption,
  MenuSectionTitle,
  MenuSectionList,
} from "./Menu.styles";

export interface MenuProps<T>
  extends AriaMenuProps<T>,
    Omit<RenderBaseProps<never>, "children"> {}

type ForwardedMenu = {
  <T>(props: MenuProps<T> & RefAttributes<HTMLUListElement>): JSX.Element;
  displayName: string;
  /** A section in a Menu
   * @deprecated Use `Section` instead
   */
  Section: typeof MenuSectionWrapper;
  /** An item in a Menu
   * @deprecated Use `Item` instead
   */
  Item: typeof MenuItemWrapper;
};

/** A Menu is a collection of items that the user can select.
 * When an item in the menu is selected, an associated action is performed */
export const Menu = forwardRef(function Menu<T extends object>(
  props: MenuProps<T>,
  ref: React.Ref<HTMLUListElement>
) {
  [props, ref] = useContextPropsV2(MenuContext, props, ref);

  return (
    <CollectionBuilder content={<Collection {...props} />}>
      {(collection: BaseCollection<T>) =>
        collection.size > 0 && (
          <MenuInner<T> {...props} collection={collection} menuRef={ref} />
        )
      }
    </CollectionBuilder>
  );
}) as unknown as ForwardedMenu;

Menu.displayName = "Menu";

interface MenuInnerProps<T> extends MenuProps<T> {
  collection: BaseCollection<T>;
  menuRef: React.ForwardedRef<HTMLUListElement | null>;
}

function MenuInner<T extends object>(props: MenuInnerProps<T>) {
  const { menuRef, className } = props;
  const state = useTreeState(props);
  const ref = useForwardedRef<HTMLUListElement>(menuRef);
  const { menuProps } = useMenu(props, state, ref);

  const { CollectionRenderer } = useCollectionRenderer();

  return (
    <MenuList
      ref={ref}
      className={classNames("aje-menu", className)}
      {...menuProps}
      {...filterDOMProps(props)}
    >
      <Provider
        values={[
          [MenuStateContext.Provider, state],
          [SectionContext.Provider, { render: MenuSection }],
          [ItemContext.Provider, { render: MenuItem }],
        ]}
      >
        <CollectionRenderer collection={props.collection} />
      </Provider>
    </MenuList>
  );
}

export interface MenuSectionProps<T extends object>
  extends SectionProps<T>,
    RenderStyleProps<never> {}

function MenuSection<T extends object>(
  props: MenuSectionProps<T>,
  ref: React.ForwardedRef<HTMLLIElement>,
  section: Node<T>
) {
  const state = useContext(MenuStateContext)!;
  const { CollectionBranchRenderer } = useCollectionRenderer();

  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: props.title,
    "aria-label": section["aria-label"],
  });

  const renderProps = useRenderProps({
    componentClassName: "aje-menu__section",
    ...props,
    children: props.title,
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && <Divider as="li" />}
      <li {...itemProps} {...renderProps} ref={ref}>
        {renderProps.children && (
          <MenuSectionTitle {...headingProps}>
            {renderProps.children}
          </MenuSectionTitle>
        )}
        <MenuSectionList {...groupProps}>
          <CollectionBranchRenderer
            // @ts-expect-error - why is this not working?
            collection={state.collection}
            parent={section}
          />
        </MenuSectionList>
      </li>
    </>
  );
}

const MenuSectionWrapper = createBranchComponent("section", MenuSection);
// @ts-expect-error
MenuSectionWrapper.displayName = "Menu.Section";
Menu.Section = MenuSectionWrapper;

const MenuItem = (
  props: ItemProps,
  ref: React.ForwardedRef<HTMLLIElement>,
  item: Node<object>
) => {
  const state = useContext(MenuStateContext)!;
  const internalRef = useForwardedRef<HTMLLIElement>(ref);

  const { menuItemProps, isSelected } = useMenuItem(
    { key: item.key, "aria-label": props["aria-label"] },
    state,
    internalRef
  );

  const { focusProps, isFocused, isFocusVisible } = useFocusRing();

  const renderProps = useRenderProps({
    componentClassName: "aje-menu__item",
    ...props,
    children: item.rendered,
    values: {
      isSelected,
      isFocused,
      isFocusVisible,
    },
  });

  return (
    <MenuOption
      {...mergeProps(menuItemProps, focusProps)}
      {...renderProps}
      as={props.href ? "a" : "li"}
      ref={internalRef}
    >
      {renderProps.children}
    </MenuOption>
  );
};

const MenuItemWrapper = createLeafComponent("item", MenuItem);
// @ts-expect-error
MenuItemWrapper.displayName = "Menu.Item";
Menu.Item = MenuItemWrapper;
