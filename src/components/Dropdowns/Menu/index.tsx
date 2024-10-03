import { useContext, useRef } from "react";
import { useTreeState } from "react-stately";
import { LinkDOMProps, Node, SectionProps } from "@react-types/shared";
import classNames from "classnames";
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

import { Key, RenderBaseProps } from "../../../types";
import { Divider } from "@components/Layout/Divider";
import useForwardedRef from "@hooks/useForwardedRef";
import { Provider } from "@components/Internal/Provider";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { useRenderProps } from "@hooks";
import { useFocusRing } from "@hooks/useFocusRing";
import { useContextProps } from "@hooks/useContextProps";

import { MenuContext, MenuStateContext } from "./context";
import {
  MenuList,
  MenuOption,
  MenuSectionTitle,
  MenuSectionList,
} from "./Menu.styles";
import { SectionContext } from "@components/Collection";

export interface MenuProps<T>
  extends AriaMenuProps<T>,
    Omit<RenderBaseProps<never>, "children"> {}

/** A Menu is a collection of items that the user can select.
 * When an item in the menu is selected, an associated action is performed */
export function Menu<T extends {}>(props: MenuProps<T>) {
  const mergedProps = useContextProps(MenuContext, props);
  const ref = useRef<HTMLUListElement | null>(null);

  return (
    <CollectionBuilder content={<Collection {...props} />}>
      {(collection) =>
        collection.size > 0 && (
          <MenuInner
            {...mergedProps}
            collection={collection as any}
            menuRef={ref}
          />
        )
      }
    </CollectionBuilder>
  );
}

interface MenuInnerProps<T> extends MenuProps<T> {
  collection: BaseCollection<Node<object>>;
  menuRef: React.ForwardedRef<HTMLUListElement | null>;
}

function MenuInner(props: MenuInnerProps<object>) {
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
        ]}
      >
        <CollectionRenderer collection={props.collection} />
      </Provider>
    </MenuList>
  );
}

function MenuSection(
  props: SectionProps<object>,
  ref: React.ForwardedRef<HTMLLIElement>,
  section: Node<object>
) {
  const state = useContext(MenuStateContext)!;
  const { CollectionBranchRenderer } = useCollectionRenderer();

  const { itemProps, headingProps, groupProps } = useMenuSection({
    heading: props.title,
    "aria-label": section["aria-label"],
  });

  // If the section is not the first, add a separator element.
  // The heading is rendered inside an <li> element, which contains
  // a <ul> with the child items.
  return (
    <>
      {section.key !== state.collection.getFirstKey() && <Divider as="li" />}
      <li {...itemProps} ref={ref}>
        {props.title && (
          <MenuSectionTitle {...headingProps}>{props.title}</MenuSectionTitle>
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

/** A section in a Menu */
Menu.Section = createBranchComponent("section", MenuSection);

interface MenutItemRenderProps {
  isSelected: boolean;
}

interface MenuItemProps
  extends RenderBaseProps<MenutItemRenderProps>,
    LinkDOMProps {
  id?: Key;
  textValue?: string;
  "aria-label"?: string;
  isDisabled?: boolean;
  onAction?: () => void;
}

const MenuItem = createLeafComponent(
  "item",
  (
    props: MenuItemProps,
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

    const renderProps = useRenderProps({
      componentClassName: "aje-menu__item",
      ...props,
      children: item.rendered,
      values: {
        isSelected,
      },
    });

    const { focusProps } = useFocusRing();

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
  }
);

/** An item in a Menu */
Menu.Item = MenuItem;
