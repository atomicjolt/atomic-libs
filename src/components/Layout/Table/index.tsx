import { TableProps } from "./Table.types";

import { useTableState } from "./hooks/useTableState";
import { useGridTreeState } from "./hooks/useGridTreeState";
import { TableShared } from "./components/internal/TableShared";

import { Row } from "./components/public/TableRow";
import { TableCell } from "./components/public/TableCell";
import { TableHeader } from "./components/public/TableHeader";
import { TableColumn } from "./components/public/TableColumn";
import { TableBody } from "./components/public/TableBody";
import { TableHeaderProps } from "react-stately";

/** Table component that supports sorting, row selection, and column reordering.  */
export function Table<T extends object>(props: TableProps<T>) {
  const { allowsExpandableRows } = props;

  if (allowsExpandableRows) {
    return <TreeGridTable {...props} />;
  }

  return <InternalTable {...props} />;
}

export function InternalTable<T extends object>(props: TableProps<T>) {
  const { selectionMode, selectionBehavior } = props;

  const state = useTableState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  return <TableShared state={state} {...props} />;
}

Table.Header = TableHeader as <T>(props: TableHeaderProps<T>) => JSX.Element;
Table.Column = TableColumn;
Table.Body = TableBody;
Table.Row = Row;
Table.Cell = TableCell;

export function TreeGridTable<T extends object>(props: TableProps<T>) {
  const { selectionMode, selectionBehavior } = props;

  const state = useGridTreeState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  return <TableShared state={state} {...props} />;
}
