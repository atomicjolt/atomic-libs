import { CollectionBase, SingleSelection } from "@react-types/shared";
import { DomProps, HasVariant, Key, RenderStyleProps } from "../../../types";
import { ItemProps } from "../../Collection";

export type TabVariant = "default" | "card" | "toggle";

export interface TabsProps<T>
  extends Omit<SingleSelection, "disallowEmptySelection">,
    RenderStyleProps<never>,
    DomProps,
    HasVariant<TabVariant> {
  /** A `Tabs.List` followed by one `Tabs.Panel` per tab, matched by `id`. */
  children: React.ReactNode;
  /** Keys of the tabs that are disabled and can't be selected. */
  disabledKeys?: Iterable<Key>;
}

export interface TabProps<T> extends ItemProps {}

export interface TabListProps<T> extends CollectionBase<T> {}
