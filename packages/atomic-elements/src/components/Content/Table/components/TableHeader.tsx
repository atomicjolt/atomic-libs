import { useContext } from "react";
import { GridNode } from "@react-types/grid";
import { Node } from "react-stately";
import { useTableSelectAllCheckbox } from "@react-aria/table";
import { useRenderProps } from "@hooks/useRenderProps";
import { Collection, createBranchComponent, useCachedChildren } from "@react-aria/collections";

import { CheckBox, CheckBoxContext } from "@components/Inputs/Checkbox";
import { DEFAULT_SLOT } from "@hooks/useSlottedContext";

import { TableState } from "../Table.types";
import { TableStateContext } from "../Table.context";
import { StyledThead, StyledTh } from "../Table.styles";
import { TableRowGroup } from "./TableRowGroup";
import { TableHeaderRow } from "./TableHeaderRow";
import { TableColumn } from "./TableColumn";
import { useTableOptions } from "../hooks/useTableOptions";

interface TableHeaderRowCellsProps<T> {
  row: GridNode<T>;
  state: TableState<T>;
}

/** Renders the cells for a single row of `collection.headerRows`, which is a
 * mix of real "column" nodes and synthetic "placeholder" nodes (the gaps
 * `buildHeaderRows` inserts above/below columns that don't span every row). */
function TableHeaderRowCells<T>(props: TableHeaderRowCellsProps<T>) {
  const { row, state } = props;

  const cells = useCachedChildren({
    items: state.collection.getChildren!(row.key),
    children: (node: GridNode<T>) =>
      node.type === "placeholder" ? (
        <TableColumnPlaceholder node={node} />
      ) : (
        node.render!(node)
      ),
  });

  return <>{cells}</>;
}

function TableColumnPlaceholder<T>({ node }: { node: GridNode<T> }) {
  return (
    <StyledTh
      role="columnheader"
      aria-colspan={node.colSpan && node.colSpan > 1 ? node.colSpan : undefined}
      colSpan={node.colSpan ?? undefined}
    />
  );
}

export interface TableHeaderProps<T> {
  /** Columns to render in the header in a dynamic collection
   *
   * @example
   * ```jsx
   * const columns = [
   *  { id: "column-1", title: "Column 1" },
   *  { id: "column-2", title: "Column 2" },
   *  { id: "column-3", title: "Column 3" },
   * ];
   * <Table.Header columns={columns}>
   *   {(column) => <Table.Column>{column.title}</Table.Column>}
   * </Table.Header>
   */
  columns?: T[];
  children?:
    | React.ReactNode
    | React.ReactNode[]
    | ((column: T) => React.ReactNode);
}

export const TableHeader = createBranchComponent(
  "tableheader",
  function TableHeader<T extends object>(
    props: TableHeaderProps<T>,
    ref: React.ForwardedRef<HTMLTableSectionElement>,
    header: Node<T>
  ) {
    const state = useContext(TableStateContext)!;
    const { checkboxProps } = useTableSelectAllCheckbox(state);

    const renderProps = useRenderProps({
      componentClassName: "aje-table__header",
    });

    const headerRows = state.collection.headerRows;

    return (
      <CheckBoxContext.Provider
        value={{
          slots: {
            [DEFAULT_SLOT]: {},
            selection: checkboxProps,
          },
        }}
      >
        <TableRowGroup type={StyledThead} {...renderProps} ref={ref}>
          {headerRows.map((row) => (
            <TableHeaderRow key={row.key} item={row} state={state}>
              <TableHeaderRowCells row={row} state={state} />
            </TableHeaderRow>
          ))}
        </TableRowGroup>
      </CheckBoxContext.Provider>
    );
  },
  (props) => <Collection items={props.columns}>{props.children}</Collection>
);

export function TableHeaderWrapper<T extends object>(
  props: TableHeaderProps<T>
) {
  const { selectionMode } = useTableOptions();

  return (
    <TableHeader {...props}>
      {["multiple", "single"].includes(selectionMode ?? "") && (
        // 32 is the width of the checkbox
        <TableColumn width={32}>
          {selectionMode === "multiple" && <CheckBox slot="selection" />}
        </TableColumn>
      )}
      <Collection items={props.columns}>{props.children}</Collection>
    </TableHeader>
  );
}
