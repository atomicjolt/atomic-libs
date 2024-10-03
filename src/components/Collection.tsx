import { Node } from "react-stately";
import {
  ItemProps,
  SectionProps,
  Item as RSItem,
  Section as RSSection,
} from "react-stately";
import {
  createBranchComponent,
  createLeafComponent,
} from "@react-aria/collections";
import { createContext, useContext } from "react";
import { copyStaticProperties } from "@utils/clone";

interface ItemContextValue {
  render: (
    props: ItemProps<any>,
    ref: React.ForwardedRef<HTMLElement>,
    item: Node<any>
  ) => React.ReactElement;
}

export const ItemContext = createContext<ItemContextValue | null>(null);

/** An Item in a Collection component
 * @example
 * <CustomSelect label="Select a fruit">
 *  <Item key="apple">Apple</Item>
 *  <Item key="orange">Orange</Item>
 *  <Item key="banana">Banana</Item>
 * </CustomSelect>
 */
export const Item = createLeafComponent(
  "item",
  (
    props: ItemProps<any>,
    ref: React.ForwardedRef<HTMLElement>,
    item: Node<object>
  ) => {
    const { render } = useContext(ItemContext)!;
    return render(props, ref, item);
  }
);

copyStaticProperties(RSItem, Item);

interface SectionContextValue {
  render: (
    props: SectionProps<any>,
    ref: React.ForwardedRef<HTMLElement>,
    section: Node<any>
  ) => React.ReactElement;
}

export const SectionContext = createContext<SectionContextValue | null>(null);

/** A Section / grouping of items in a collection component
 * @example
 * <ListBox>
 *  <Section title="Fruits">
 *    <Item key="apple">Apple</Item>
 *    <Item key="orange">Orange</Item>
 *    <Item key="banana">Banana</Item>
 *  </Section>
 *  <Section title="Vegetables">
 *    <Item key="carrot">Carrot</Item>
 *    <Item key="potato">Potato</Item>
 *    <Item key="onion">Onion</Item>
 *  </Section>
 * </ListBox>
 */
export const Section = createBranchComponent(
  "section",
  (
    props: SectionProps<any>,
    ref: React.ForwardedRef<HTMLElement>,
    section: Node<object>
  ) => {
    const { render } = useContext(SectionContext)!;
    return render(props, ref, section);
  }
);

copyStaticProperties(RSSection, Section);

export type { ItemProps, SectionProps };
