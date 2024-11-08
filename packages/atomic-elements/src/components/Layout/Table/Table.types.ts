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
  ExtendedSize,
  Key,
  PaginationDescriptor,
  RenderBaseProps,
  SearchDescriptor,
  SuggestStrings,
} from "../../../types";
import { TableFooterProps } from "./components/public/TableFooter";
import { ElementsTableCollection } from "./TableCollection";

export interface PaginationProps {
  /** Object representing the current pagination state of the table */
  paginationDescriptor?: PaginationDescriptor;
  /** Handler called whenever a change is made to the paginationDescriptor */
  onPaginationChange?: (descriptor: PaginationDescriptor) => void;
}

export interface LoadingProps {
  /** Whether the table is in a loading state
   * @selector [data-loading]
   */
  isLoading?: boolean;
  /** The number of rows to render when loading
   * @default paginationDescriptor.pageSize ?? 10
   */
  loadingRows?: number;
}

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

export type TableChildren<T> =
  | [
      React.ReactElement<TableHeaderProps<T>>,
      React.ReactElement<TableBodyProps<T>>,
    ]
  | [
      React.ReactElement<TableHeaderProps<T>>,
      React.ReactElement<TableBodyProps<T>>,
      React.ReactElement<TableFooterProps<T>>, // Footer is optional
    ]
  | [
      React.ReactElement<TableHeaderProps<T>>,
      React.ReactElement<TableFooterProps<T>>, // Footer is optional
      React.ReactElement<TableBodyProps<T>>,
    ];

export interface RenderEmptyProps {
  /** The content to render when the table has no rows
   * The content provided is rendered within a Table row that
   * spans all the columns in the table.
   */
  renderEmpty?: React.ReactNode | (() => React.ReactNode);
}

export interface TableProps<T>
  extends Omit<AriaTableProps, "id">,
    MultipleSelection,
    Sortable,
    SearchProps,
    ColumnReorderProps,
    RenderBaseProps<never>,
    PaginationProps,
    Expandable,
    LoadingProps {
  /** Whether the table allows expandable rows.
   * When it's `false`, rows cannot have nested rows.
   */
  allowsExpandableRows?: boolean;

  variant?: TableVariants;

  /** The selection behavior for the table. */
  selectionBehavior?: SelectionBehavior;

  children?: TableChildren<T>;

  isSticky?: boolean;

  size?: ExtendedSize;

  id?: string;

  /** Table makes use of <Table.Bottom> to attach
   * additional content to the bottom of the table */
  hasBottom?: boolean;
}

export interface TableStateExtensions {
  search: SearchState;
  reorderColumns: (droppedKey: Key, nextKey: Key) => void;
}

export interface TableState<T>
  extends StatelyTableState<T>,
    TableStateExtensions {
  collection: ElementsTableCollection<T>;
}

export interface TreeGridState<T>
  extends StatelyTreeGridState<T>,
    TableStateExtensions {
  collection: ElementsTableCollection<T>;
}
