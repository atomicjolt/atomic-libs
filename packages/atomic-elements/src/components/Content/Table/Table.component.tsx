import { useMemo } from "react";
import { Collection, CollectionBuilder } from "@react-aria/collections";
import { TableColumnIcons, TableOptions, TableProps } from "./Table.types";
import { TableRowWrapper } from "./components/TableRow";
import { TableCell } from "./components/TableCell";
import { TableHeaderWrapper } from "./components/TableHeader";
import { TableColumnWrapper } from "./components/TableColumn";
import { TableBody } from "./components/TableBody";
import { LoadingCellContent } from "./components/Loading";
import { TableBottom } from "./components/TableBottom";
import { TableCollection } from "./TableCollection";
import { TableOptionsContext } from "./Table.context";
import { SimpleTable } from "./components/SimpleTable";
import { TreeGridTable } from "./components/TreeGridTable";

const defaultIcons: TableColumnIcons = {
  sortAscending: "arrow_drop_down",
  sortDescending: "arrow_drop_up",
  sortNeutral: "swap_vert",
  searchOpen: "search",
  searchClose: "close",
};

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
      icons: { ...defaultIcons, ...props.icons },
      sortVisibility: props.sortVisibility ?? "selected",
    }),
    [
      props.hasBottom,
      props.isSticky,
      props.selectionBehavior,
      props.selectionMode,
      props.icons,
      props.sortVisibility,
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
          <TreeGridTable {...props} collection={collection} />
        ) : (
          <SimpleTable {...props} collection={collection} />
        )
      }
    </CollectionBuilder>
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
