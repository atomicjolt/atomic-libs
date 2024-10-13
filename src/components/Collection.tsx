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

export interface ElementItemProps<T, R extends object = object>
  extends Omit<RSItemProps<T>, "children">,
    RenderBaseProps<R> {
  id?: Key;
}

interface ItemContextValue {
  render: (
    props: ElementItemProps<any>,
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
    props: ElementItemProps<any>,
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
