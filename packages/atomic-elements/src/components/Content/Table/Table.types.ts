import { AriaTableProps } from "@react-aria/table";
import {
  TableState as StatelyTableState,
  TreeGridState as StatelyTreeGridState,
} from "@react-stately/table";
import { Expandable, SelectionMode } from "@react-types/shared";
import {
  SelectionBehavior,
  Sortable,
  MultipleSelection,
} from "@react-types/shared";

import {
  ExtendedSize,
  Key,
  RenderBaseProps,
  SearchDescriptor,
  SuggestStrings,
} from "../../../types";
import { TableCollection } from "./TableCollection";

export interface LoadingProps {
  /** Whether the table is in a loading state
   * @selector [data-loading]
   */
  isLoading?: boolean;
  /** The number of rows to render when loading
   * @default 10
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
    RenderBaseProps<never>,
    Expandable {
  /** Whether the table allows expandable rows.
   * When it's `false`, rows cannot have nested rows.
   */
  allowsExpandableRows?: boolean;

  /** The selection behavior for the table. */
  selectionBehavior?: SelectionBehavior;

  children?: React.ReactNode;

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
  collection: TableCollection<T>;
}

export interface TreeGridState<T>
  extends StatelyTreeGridState<T>,
    TableStateExtensions {
  collection: TableCollection<T>;
}

export interface TableInternalProps<T extends object> extends TableProps<T> {
  collection: TableCollection<T>;
}


export interface TableOptions {
  /** Whether the table allows expandable rows.
   * When it's `false`, rows cannot have nested rows.
   */
  allowsExpandableRows?: boolean;

  /** The selection behavior for the table. */
  selectionBehavior?: SelectionBehavior;

  /**  */
  selectionMode?: SelectionMode;

  /** Whether the table is in a sticky state */
  isSticky?: boolean;

  /** Whether to show a bottom to the table */
  hasBottom?: boolean;
}
