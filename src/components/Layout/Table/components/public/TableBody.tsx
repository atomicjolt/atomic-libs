import { cloneComponent } from "@/clone";
import { TableBody as StatelyTableBody } from "react-stately";

/** A `Table.Body` is a container for the `Table.Row` elements in a Table.
 * Rows can be statically defined as children, or generated dynamically
 * using a function based on the data passed to the `items` prop.
 */
export const TableBody = cloneComponent(StatelyTableBody, "Table.Body");
