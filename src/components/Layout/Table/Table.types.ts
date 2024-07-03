import { AriaTableProps } from "@react-aria/table";
import {
  TableBodyProps,
  TableHeaderProps,
  TableState as StatelyTableState,
  TreeGridState as StatelyTreeGridState,
} from "@react-stately/table";
import { Expandable } from "@react-types/shared";
import {
  SelectionBehavior,
  Sortable,
  MultipleSelection,
} from "@react-types/shared";

import {
  BaseProps,
  Key,
  SearchDescriptor,
  SuggestStrings,
} from "../../../types";

export interface SearchProps {
  /** Object representing the current search state of the table */
  searchDescriptor?: SearchDescriptor;
  /** Handler called whenever a change is made to the searchDescriptor */
  onSearchChange?: (descriptor: SearchDescriptor) => void;
}

export interface SearchState {
  column: Key | null;
  text: string;
  clear: () => void;
  set: (column: Key | null, text: string) => void;
}

export interface ColumnReorderProps {
  /** Handler called whenever a column is reordered */
  onColumnReorder?: (newOrder: Key[]) => void;
}

export type TableVariants = SuggestStrings<"default" | "grid" | "full-borders">;

export interface TableProps<T>
  extends Omit<AriaTableProps<T>, "id">,
    MultipleSelection,
    Sortable,
    SearchProps,
    ColumnReorderProps,
    BaseProps,
    Expandable {
  /** Whether the table allows expandable rows.
   * When it's `false`, rows cannot have nested rows.
   */
  allowsExpandableRows?: boolean;

  variant?: TableVariants;

  /** The selection behavior for the table. */
  selectionBehavior?: SelectionBehavior;

  children?: [
    React.ReactElement<TableHeaderProps<T>>,
    React.ReactElement<TableBodyProps<T>>,
  ];

  isSticky?: boolean;
}

export interface TableStateExtensions {
  search: SearchState;
  reorderColumns: (droppedKey: Key, nextKey: Key) => void;
}

export interface TableState<T>
  extends StatelyTableState<T>,
    TableStateExtensions {}

export interface TreeGridState<T>
  extends StatelyTreeGridState<T>,
    TableStateExtensions {}
