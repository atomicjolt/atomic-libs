import { cloneComponent } from "@utils/clone";
import { Argument } from "classnames";
import { Cell } from "react-stately";

export interface TableCellProps {
  /** Whether the cell is a header for the row. When true, the cell will be a th instead of a td */
  isRowHeader?: boolean;
  /** The contents of the cell. */
  children?: React.ReactNode;
  /** A string representation of the cell's contents, used for features like typeahead. */
  textValue?: string;
  /** The number of columns the cell should span. */
  colSpan?: number;

  /** Whether to show a divider between this cell and the next cell */
  showDivider?: boolean;

  /** Callback when a user clicks on or otherwise interacts with the cell */
  onAction?: () => void;

  className?: Argument | Argument[];

  id?: string;

  isStatic?: boolean;
}

/** A `Table.Cell` represents a single cell in a Table. */
export const TableCell = cloneComponent(Cell, "Table.Cell") as (
  props: TableCellProps
) => JSX.Element;
