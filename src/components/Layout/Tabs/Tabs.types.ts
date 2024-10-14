import { TabListProps } from "react-stately";
import { DomProps, HasVariant, RenderStyleProps } from "../../../types";
import { ItemProps } from "../../Collection";

export type TabVariant = "default" | "card" | "toggle";

export interface TabsProps<T>
  extends TabListProps<T>,
    RenderStyleProps<never>,
    DomProps,
    HasVariant<TabVariant> {
  /** Display information to the right of the tab list */
  info?: React.ReactNode;
}

interface TabRenderProps {
  /** Whether the tab is currently selected */
  isSelected: boolean;
}

export interface TabProps<T> extends ItemProps<T, TabRenderProps> {
  title?: React.ReactNode;
}
