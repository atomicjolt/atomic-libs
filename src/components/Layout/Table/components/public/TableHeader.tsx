import { cloneComponent } from "@utils/clone";
import {
  TableHeader as StatelyTableHeader,
  TableHeaderProps,
} from "react-stately";

export const TableHeader = cloneComponent(
  StatelyTableHeader,
  "Table.Header"
) as <T>(props: TableHeaderProps<T>) => JSX.Element;
