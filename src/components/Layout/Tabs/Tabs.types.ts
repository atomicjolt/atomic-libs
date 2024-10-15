import { CollectionBase, SingleSelection } from "@react-types/shared";
import { DomProps, HasVariant, Key, RenderStyleProps } from "../../../types";
import { ItemProps } from "../../Collection";

export type TabVariant = "default" | "card" | "toggle";

export interface TabsProps<T>
  extends Omit<SingleSelection, "disallowEmptySelection">,
    RenderStyleProps<never>,
    DomProps,
    HasVariant<TabVariant> {
  children: React.ReactNode;
  /** Disabled tabs */
  disabledKeys?: Iterable<Key>;
}

interface TabRenderProps {
  /** Whether the tab is currently selected */
  isSelected: boolean;
}

export interface TabProps<T> extends ItemProps<T, TabRenderProps> {}

export interface TabListProps<T> extends CollectionBase<T> {}
