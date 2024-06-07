import { cloneComponent } from "@/clone";
import { Cell } from "react-stately";

export interface TableCellProps {
  /** Whether the cell is a header for the row. When true, the cell will be a th instead of a td */
  isRowHeader?: boolean;
  /** The contents of the cell. */
  children?: React.ReactNode;
  /** A string representation of the cell's contents, used for features like typeahead. */
  textValue?: string;

  colSpan?: number;
}

/** A `Table.Cell` represents a single cell in a Table. */
export const TableCell = cloneComponent(Cell, "Table.Cell") as (
  props: TableCellProps
) => JSX.Element;
