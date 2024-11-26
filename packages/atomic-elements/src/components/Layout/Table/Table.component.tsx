import { Collection, CollectionBuilder } from "@react-aria/collections";
import { TableProps } from "./Table.types";
import { useGridTreeState } from "./hooks/useGridTreeState";
import { TableShared } from "./components/TableShared";
import { TableRow } from "./components/TableRow";
import { TableCell } from "./components/TableCell";
import { TableHeader } from "./components/TableHeader";
import { TableColumn } from "./components/TableColumn";
import { TableBody } from "./components/TableBody";
import { LoadingCellContent } from "./components/Loading";
import { PaginationDescriptor } from "../../../types";
import { TableBottom } from "./components/TableBottom";
import { TableCollection } from "./TableCollection";
import { useTableState } from "./hooks/useTableState";
import { TableStateContext } from "./Table.context";

// TODO:
// - Reimplement Row Selection (slots?)
// - Reimplement Tree Grid Table

// TODO:
// - Reimplement Column Ordering
// - Reimplement Column Nesting
// - Reimplement support for rendering cell children with <Collection />
// - Implement Row ordering

/** Table component that supports sorting, row selection, and column reordering.  */
export function Table<T extends object>(props: TableProps<T>) {
  const { allowsExpandableRows } = props;

  if (allowsExpandableRows) {
    return <TreeGridTable {...props} />;
  }

  return <SimpleTable {...props} />;
}

export function SimpleTable<T extends object>(props: TableProps<T>) {
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
      <TableShared state={state} {...props} />
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
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Bottom = TableBottom;

interface TableSkeletonProps {
  columns: number;
  rows?: number;
  paginationDescriptor?: PaginationDescriptor;
}

function TableSkeleton(props: TableSkeletonProps) {
  const { columns, rows = 10 } = props;

  const cols = Array.from({ length: columns }).map((_, index) => ({
    isRowHeader: index === 0,
    id: index,
  }));

  return (
    <Table>
      <Table.Header columns={cols}>
        {(col) => (
          <Table.Column isRowHeader={col.isRowHeader}>
            <LoadingCellContent />
          </Table.Column>
        )}
      </Table.Header>
      <Table.Body isLoading loadingRows={rows} />
    </Table>
  );
}

TableSkeleton.displayName = "Table.Skeleton";

Table.Skeleton = TableSkeleton;
