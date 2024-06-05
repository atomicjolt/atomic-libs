import {
  Item as ReactStatelyItem,
  Section as ReactStatelySection,
} from "react-stately";
import { ItemProps, SectionProps } from "react-stately";
import { cloneComponent } from "../clone";

// We re-define the react-stately Item and Section components
// Because for some reason storybook doesn't like to pickup the
// correct names for the reac-stately components.

/** An Item in a Collection component
 * @example
 * <CustomSelect label="Select a fruit">
 *  <Item key="apple">Apple</Item>
 *  <Item key="orange">Orange</Item>
 *  <Item key="banana">Banana</Item>
 * </CustomSelect>
 */
export const Item = cloneComponent(ReactStatelyItem, "Item");

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
export const Section = cloneComponent(ReactStatelySection, "Section");

export type { ItemProps, SectionProps };
