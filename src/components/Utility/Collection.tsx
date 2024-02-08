import {
  Item as ReactStatelyItem,
  Section as ReactStatelySection,
  ItemProps,
  SectionProps,
} from "react-stately";

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
export function Item<T>(props: ItemProps<T>) {
  return null;
}

// React Stately binds some static properties to the Item component that we need to copy over
for (const key in ReactStatelyItem) {
  // @ts-ignore
  Item[key] = ReactStatelyItem[key];
}

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
export function Section<T>(props: SectionProps<T>) {
  return null;
}

for (const key in ReactStatelySection) {
  // @ts-ignore
  Section[key] = ReactStatelySection[key];
}
