import {
  TableBody as StatelyTableBody,
  TableBodyProps as StatelyTableBodyProps,
} from "react-stately";
import { Argument } from "classnames";
import { cloneComponent } from "@utils/clone";
import { LoadingProps } from "../../Table.types";

export interface TableBodyProps<T> extends StatelyTableBodyProps<T> {
  className?: Argument | Argument[];
  id?: string;
}

/** A `Table.Body` is a container for the `Table.Row` elements in a Table.
 * Rows can be statically defined as children, or generated dynamically
 * using a function based on the data passed to the `items` prop.
 */
export const TableBody = cloneComponent(StatelyTableBody, "Table.Body") as <T>(
  props: TableBodyProps<T>
) => JSX.Element;
