import { CollectionBuilderContext } from "@react-stately/table";
import { Key, SearchDescriptor, SuggestStrings } from "../../../types";

export interface SearchState {
  column: Key | null;
  text: string;
  clear: () => void;
  set: (column: Key | null, text: string) => void;
}

export interface Searchable {
  /** Object representing the current search state of the table */
  searchDescriptor?: SearchDescriptor;
  /** Handler called whenever a change is made to the searchDescriptor */
  onSearchChange?: (descriptor: SearchDescriptor) => void;
}

export interface ColumnReorder {
  /** Handler called whenever a column is reordered */
  onColumnReorder?: (newOrder: Key[]) => void;
}

export type TableVariants = SuggestStrings<"default" | "grid" | "full-borders">;

export type ChildRowBehavior = "hide" | "nest" | "show";

export interface TableCollectionBuilderContext<T>
  extends CollectionBuilderContext<T> {
  showExpandButtons: boolean;
}
