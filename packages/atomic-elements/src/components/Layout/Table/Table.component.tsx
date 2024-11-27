import { Collection, CollectionBuilder } from "@react-aria/collections";
import { TableOptions, TableProps } from "./Table.types";
import { useGridTreeState } from "./hooks/useGridTreeState";
import { TableShared } from "./components/TableShared";
import { TableRow, TableRowWrapper } from "./components/TableRow";
import { TableCell } from "./components/TableCell";
import { TableHeader, TableHeaderWrapper } from "./components/TableHeader";
import { TableColumn, TableColumnWrapper } from "./components/TableColumn";
import { TableBody } from "./components/TableBody";
import { LoadingCellContent } from "./components/Loading";
import { PaginationDescriptor } from "../../../types";
import { TableBottom } from "./components/TableBottom";
import { TableCollection } from "./TableCollection";
import { useTableState } from "./hooks/useTableState";
import { TableOptionsContext, TableStateContext } from "./Table.context";
import { useMemo } from "react";
import { Provider } from "@components/Internal/Provider";

// TODO:
// - Reimplement Column Nesting
// - Reimplement support for rendering cell children with <Collection />

// - Reimplement Tree Grid Table
// - Reimplement Column Ordering
// - Implement Row ordering

/** Table component
 *
 * Features:
 * - Column Sorting
 * - Column Searching
 * - Row & Cell Actions
 * - Row Selection
 * - Row Nesting
 *
 * @example
 * ```jsx
 * <Table>
 *  <Table.Header>
 *    <Table.Column isRowHeader>Column 1</Table.Column>
 *    <Table.Column>Column 2</Table.Column>
 *    <Table.Column>Column 3</Table.Column>
 *  </Table.Header>
 *  <Table.Body>
 *    <Table.Row>
 *      <Table.Cell>Row 1, Cell 1</Table.Cell>
 *      <Table.Cell>Row 1, Cell 2</Table.Cell>
 *      <Table.Cell>Row 1, Cell 3</Table.Cell>
 *    </Table.Row>
 *    <Table.Row>
 *      <Table.Cell>Row 2, Cell 1</Table.Cell>
 *      <Table.Cell>Row 2, Cell 2</Table.Cell>
 *      <Table.Cell>Row 2, Cell 3</Table.Cell>
 *     </Table.Row>
 *   </Table.Body>
 * </Table>
 */
export function Table<T extends object>(props: TableProps<T>) {
  const { allowsExpandableRows } = props;

  const tableOptions: TableOptions = useMemo(
    () => ({
      allowsExpandableRows: false,
      hasBottom: props.hasBottom,
      isSticky: props.isSticky,
      selectionBehavior: props.selectionBehavior,
      selectionMode: props.selectionMode,
    }),
    [
      props.hasBottom,
      props.isSticky,
      props.selectionBehavior,
      props.selectionMode,
    ]
  );

  const content = (
    <TableOptionsContext.Provider value={tableOptions}>
      <Collection {...props} />
    </TableOptionsContext.Provider>
  );

  return (
    <CollectionBuilder
      content={content}
      createCollection={() => new TableCollection<T>()}
    >
      {(collection: TableCollection<T>) =>
        allowsExpandableRows ? (
          <TreeGridTableInternal {...props} collection={collection} />
        ) : (
          <SimpleTableInternal {...props} collection={collection} />
        )
      }
    </CollectionBuilder>
  );
}

interface TableInternalProps<T extends object> extends TableProps<T> {
  collection: TableCollection<T>;
}

function SimpleTableInternal<T extends object>(props: TableInternalProps<T>) {
  const state = useTableState<T>({
    ...props,
    children: undefined,
  });

  return (
    <Provider values={[[TableStateContext.Provider, state]]}>
      <TableShared state={state} {...props} />
    </Provider>
  );
}

function TreeGridTableInternal<T extends object>(props: TableInternalProps<T>) {
  throw new Error("allowExpandableRows is not currently implemented");

  const state = useGridTreeState<T>({
    ...props,
    children: undefined,
  });

  return (
    <TableStateContext.Provider value={state}>
      <TableShared state={state} {...props} />
    </TableStateContext.Provider>
  );
}

Table.Header = TableHeaderWrapper;
Table.Column = TableColumnWrapper;
Table.Body = TableBody;
Table.Row = TableRowWrapper;
Table.Cell = TableCell;
Table.Bottom = TableBottom;

interface TableSkeletonProps {
  /** Number of columns in the table */
  columns: number;
  /** Number of rows in the table
   * @default 10
   */
  rows?: number;
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
