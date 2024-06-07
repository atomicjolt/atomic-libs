import { cloneComponent } from "@/clone";
import { TableHeader as StatelyTableHeader } from "react-stately";

/** A `Table.Header` is a container for the `Table.Column` elements in a Table.
 * Columns can be statically defined as children, or generated dynamically
 * using a function based on the data passed to the `columns` prop. */
export const TableHeader = cloneComponent(StatelyTableHeader, "Table.Header");
