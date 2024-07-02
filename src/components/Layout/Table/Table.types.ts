import { AriaTableProps } from "react-aria";
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
import { TableFooterProps } from "./components/public/TableFooter";

export interface PaginationDescriptor {
  page: number;
  pageSize: number;
  totalPages: number;
  totalItems?: number;
}

export interface SearchProps {
  /** Object representing the current search state of the table */
  searchDescriptor?: SearchDescriptor;
  /** Handler called whenever a change is made to the searchDescriptor */
  onSearchChange?: (descriptor: SearchDescriptor) => void;
}

export interface PaginationProps {
  /** Object representing the current pagination state of the table */
  paginationDescriptor?: PaginationDescriptor;
  /** Handler called whenever a change is made to the paginationDescriptor */
  onPaginationChange?: (descriptor: PaginationDescriptor) => void;
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
    PaginationProps,
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
    React.ReactElement<TableFooterProps<T>>?, // Footer is optional
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
