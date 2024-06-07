import { cloneComponent } from "@/clone";
import { Argument } from "classnames";
import { Column, ColumnProps } from "react-stately";

export interface TableColumnProps<T> extends Omit<ColumnProps<T>, "children"> {
  /** Whether the column can be re-orderd by dragging and dropping on another re-orderable column */
  allowsReordering?: boolean;

  /** Whether the column can be searched on */
  allowsSearching?: boolean;

  /** Static child columns or content to render as the column header. */
  children?: ColumnProps<T>["children"];

  /** Whether to show a divider between this column and the next */
  showDivider?: boolean;

  className?: Argument | Argument[];

  id?: string;
}

/** A `Table.Column` represents a single column in a Table.
 * It can be used as a child of a `Table.Header` to statically define
 * or dynamically generated using a function based on the `columns` prop.
 * of the `Table.Header`.
 */
export const TableColumn = cloneComponent(Column, "Table.Column") as <T>(
  props: TableColumnProps<T>
) => JSX.Element;
