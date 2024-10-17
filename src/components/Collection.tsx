import { Node } from "react-stately";
import {
  ItemProps as RSItemProps,
  SectionProps as RSSectionProps,
  Item as RSItem,
  Section as RSSection,
} from "react-stately";
import {
  createBranchComponent,
  createLeafComponent,
} from "@react-aria/collections";
import { createContext, useContext } from "react";
import { copyStaticProperties } from "@utils/clone";
import { Key, RenderBaseProps, RenderStyleProps } from "../types";
import { LinkDOMProps } from "@react-types/shared";

export interface ItemRenderProps {
  isSelected: boolean;
  isFocused: boolean;
  isFocusVisible: boolean;
}

export interface ElementItemProps<R extends ItemRenderProps = ItemRenderProps>
  extends RenderBaseProps<R>,
    LinkDOMProps {
  /** Id for this item */
  id?: Key;
  /** Associated callback when an action is performed on this item*/
  onAction?: () => void;
  /** A string representation of the item's contents, used for features like typeahead. */
  textValue?: string;
  /** An accessibility label for this item. */
  "aria-label"?: string;

  // /** A list of child item objects. Used for dynamic collections. */
  // childItems?: Iterable<T>;
  // /** Whether this item has children, even if not loaded yet. */
  // hasChildItems?: boolean;
}

interface ItemContextValue {
  render: (
    props: ElementItemProps<ItemRenderProps>,
    ref: React.ForwardedRef<HTMLElement>,
    item: Node<any>
  ) => React.ReactElement;
}

export const ItemContext = createContext<ItemContextValue | null>(null);

/** An Item in a Collection component
 * @example
 * <CustomSelect label="Select a fruit">
 *  <Item id="apple">Apple</Item>
 *  <Item id="orange">Orange</Item>
 *  <Item id="banana">Banana</Item>
 * </CustomSelect>
 */
export const Item = createLeafComponent(
  "item",
  (
    props: ElementItemProps<ItemRenderProps>,
    ref: React.ForwardedRef<HTMLElement>,
    item: Node<object>
  ) => {
    const { render } = useContext(ItemContext)!;
    return render(props, ref, item);
  }
);

copyStaticProperties(RSItem, Item);

export interface ElementSectionProps<T, R extends object = object>
  extends RSSectionProps<T>,
    RenderStyleProps<R> {
  id?: Key;
}

interface SectionContextValue {
  render: (
    props: ElementSectionProps<any>,
    ref: React.ForwardedRef<HTMLElement>,
    section: Node<any>
  ) => React.ReactElement;
}

export const SectionContext = createContext<SectionContextValue | null>(null);

/** A Section / grouping of items in a collection component
 * @example
 * <ListBox>
 *  <Section title="Fruits">
 *    <Item id="apple">Apple</Item>
 *    <Item id="orange">Orange</Item>
 *    <Item id="banana">Banana</Item>
 *  </Section>
 *  <Section title="Vegetables">
 *    <Item id="carrot">Carrot</Item>
 *    <Item id="potato">Potato</Item>
 *    <Item id="onion">Onion</Item>
 *  </Section>
 * </ListBox>
 */
export const Section = createBranchComponent(
  "section",
  (
    props: ElementSectionProps<any>,
    ref: React.ForwardedRef<HTMLElement>,
    section: Node<object>
  ) => {
    const { render } = useContext(SectionContext)!;
    return render(props, ref, section);
  }
);

copyStaticProperties(RSSection, Section);

export type {
  ElementItemProps as ItemProps,
  ElementSectionProps as SectionProps,
};
