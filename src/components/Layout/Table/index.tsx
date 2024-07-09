import { TableProps } from "./Table.types";

import { useTableState } from "./hooks/useTableState";
import { useGridTreeState } from "./hooks/useGridTreeState";
import { TableShared } from "./components/internal/TableShared";

import { Row } from "./components/public/TableRow";
import { TableCell } from "./components/public/TableCell";
import { TableHeader } from "./components/public/TableHeader";
import { TableColumn } from "./components/public/TableColumn";
import { TableBody } from "./components/public/TableBody";
import { TableFooter } from "./components/public/TableFooter";
import { LoadingCellContent } from "./components/internal/Loading";
import { PaginationDescriptor } from "../../../types";

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

export function TreeGridTable<T extends object>(props: TableProps<T>) {
  const { selectionMode, selectionBehavior } = props;

  const state = useGridTreeState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  return <TableShared state={state} {...props} />;
}

Table.Header = TableHeader;
Table.Column = TableColumn;
Table.Body = TableBody;
Table.Footer = TableFooter;
Table.Row = Row;
Table.Cell = TableCell;

interface TableSkeletonProps {
  columns: number;
  rows?: number;
  paginationDescriptor?: PaginationDescriptor;
}

function TableSkeleton(props: TableSkeletonProps) {
  const {
    columns,
    paginationDescriptor,
    rows = paginationDescriptor?.pageSize ?? 10,
  } = props;

  const cols = Array.from({ length: columns }).map((_, index) => ({
    key: index,
  }));

  return (
    <Table
      isLoading
      loadingRows={rows}
      paginationDescriptor={paginationDescriptor}
    >
      <Table.Header columns={cols}>
        {(col) => (
          <Table.Column key={col.key}>
            <LoadingCellContent />
          </Table.Column>
        )}
      </Table.Header>
      {/* @ts-expect-error - in this case, we don't care about an actual body since we won't be rendering one */}
      <Table.Body />
    </Table>
  );
}

TableSkeleton.displayName = "Table.Skeleton";

Table.Skeleton = TableSkeleton;
