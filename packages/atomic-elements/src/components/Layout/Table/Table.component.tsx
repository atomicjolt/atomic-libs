import { TableProps } from "./Table.types";

import { useGridTreeState } from "./hooks/useGridTreeState";
import { TableShared } from "./components/internal/TableShared";

import { TableRow } from "./components/internal/TableRow";
import { TableCell } from "./components/internal/TableCell";
import { TableHeader } from "./components/internal/TableHeader";
import { TableColumn } from "./components/internal/TableColumn";
import { TableBody } from "./components/internal/TableBody";
import { TableFooter } from "./components/public/TableFooter";
import { LoadingCellContent } from "./components/internal/Loading";
import { PaginationDescriptor } from "../../../types";
import { TableBottom } from "./components/public/TableBottom";
import { Collection, CollectionBuilder } from "@react-aria/collections";
import { TableCollection } from "./TableCollection";
import { useTableState } from "./hooks/useTableState";
import { TableStateContext } from "./Table.context";

/** Table component that supports sorting, row selection, and column reordering.  */
export function Table<T extends object>(props: TableProps<T>) {
  const { allowsExpandableRows } = props;

  if (allowsExpandableRows) {
    return <TreeGridTable {...props} />;
  }

  return <SimpleTable {...props} />;
}

export function SimpleTable<T extends object>(props: TableProps<T>) {
  const { selectionMode, selectionBehavior } = props;

  return (
    <CollectionBuilder
      content={<Collection {...props} />}
      createCollection={() => new TableCollection<T>()}
    >
      {(collection: TableCollection<T>) => (
        <SimpleTableInternal {...props} collection={collection} />
      )}
    </CollectionBuilder>
  );
}

interface SimpleTableInternalProps<T extends object> extends TableProps<T> {
  collection: TableCollection<T>;
}

function SimpleTableInternal<T extends object>(
  props: SimpleTableInternalProps<T>
) {
  const { selectionMode, selectionBehavior } = props;

  const state = useTableState<T>({
    ...props,
    children: undefined,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  return (
    <TableStateContext.Provider value={state}>
      <TableShared state={state} {...props} />;
    </TableStateContext.Provider>
  );
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
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Bottom = TableBottom;

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
      <Table.Body />
    </Table>
  );
}

TableSkeleton.displayName = "Table.Skeleton";

Table.Skeleton = TableSkeleton;
