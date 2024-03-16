import React, { useRef } from "react";
import {
  AriaTableProps,
  VisuallyHidden,
  mergeProps,
  useFocusRing,
  useTable,
  useTableCell,
  useTableColumnHeader,
  useTableHeaderRow,
  useTableRow,
  useTableRowGroup,
  useTableSelectAllCheckbox,
  useTableSelectionCheckbox,
} from "react-aria";
import {
  TableState,
  Node,
  useTableState,
  TableHeader,
  Row,
  Column,
  TableBody,
  Cell,
  TableHeaderProps,
  TableBodyProps,
} from "react-stately";
import {
  SelectionMode,
  SelectionBehavior,
  Sortable,
} from "@react-types/shared";
import {
  StyledRow,
  StyledTBody,
  StyledTable,
  StyledTd,
  StyledTh,
  StyledThead,
  ThContent,
} from "./Table.styles";
import Checkbox from "../../Inputs/Checkbox";
import classNames from "classnames";
import { HasChildren, HasClassName } from "../../../types";
import MaterialIcon from "../../Icons/MaterialIcon";
import { cloneComponent } from "../../../clone";

export interface TableProps<T>
  extends AriaTableProps<T>,
    Sortable,
    HasClassName {
  /** The selection mode for the table. */
  selectionMode?: SelectionMode;
  /** The selection behavior for the table. */
  selectionBehavior?: SelectionBehavior;

  children?: [
    React.ReactElement<TableHeaderProps<T>>,
    React.ReactElement<TableBodyProps<T>>
  ];
}

export default function Table<T extends object>(props: TableProps<T>) {
  const { selectionMode, selectionBehavior, className } = props;
  const state = useTableState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  const ref = useRef(null);
  const { collection } = state;
  const { gridProps } = useTable(props, state, ref);

  return (
    <StyledTable
      {...gridProps}
      ref={ref}
      className={classNames("aje-table", className)}
    >
      <TableRowGroup type={StyledThead}>
        {collection.headerRows.map((headerRow) => (
          <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
            {[...headerRow.childNodes].map((column) =>
              column.props.isSelectionCell ? (
                <TableSelectAllCell
                  key={column.key}
                  column={column}
                  state={state}
                />
              ) : (
                <TableColumnHeader
                  key={column.key}
                  column={column}
                  state={state}
                />
              )
            )}
          </TableHeaderRow>
        ))}
      </TableRowGroup>
      <TableRowGroup type={StyledTBody}>
        {[...collection.body.childNodes].map((row) => (
          <TableRow key={row.key} item={row} state={state}>
            {[...row.childNodes].map((cell) =>
              cell.props.isSelectionCell ? (
                <TableCheckboxCell key={cell.key} cell={cell} state={state} />
              ) : (
                <TableCell key={cell.key} cell={cell} state={state} />
              )
            )}
          </TableRow>
        ))}
      </TableRowGroup>
    </StyledTable>
  );
}

interface TableRowGroupProps extends HasChildren {
  type: React.ElementType;
}

function TableRowGroup(props: TableRowGroupProps) {
  const { type: Element, children } = props;
  const { rowGroupProps } = useTableRowGroup();

  return <Element {...rowGroupProps}>{children}</Element>;
}

interface TableHeaderRowProps<T> extends HasChildren {
  item: Node<T>;
  state: TableState<T>;
}

function TableHeaderRow<T>(props: TableHeaderRowProps<T>) {
  const { item, children, state } = props;
  const ref = useRef(null);
  const { rowProps } = useTableHeaderRow({ node: item }, state, ref);

  return (
    <tr {...rowProps} ref={ref}>
      {children}
    </tr>
  );
}

interface TableColumnHeaderProps<T> {
  column: Node<T>;
  state: TableState<T>;
}

function TableColumnHeader<T extends object>(props: TableColumnHeaderProps<T>) {
  const { column, state } = props;

  // @ts-ignore
  const colspan = column.colspan as number;

  const ref = useRef(null);
  const { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  );
  const { focusProps } = useFocusRing();
  const arrowIcon =
    state.sortDescriptor?.direction === "ascending"
      ? "arrow_drop_down"
      : "arrow_drop_up";

  return (
    <StyledTh
      {...mergeProps(columnHeaderProps, focusProps)}
      className={classNames({ "is-sortable": column.props.allowsSorting })}
      colSpan={colspan}
      ref={ref}
    >
      <ThContent>
        {column.rendered}
        {column.props.allowsSorting &&
          state.sortDescriptor.column === column.key && (
            <MaterialIcon icon={arrowIcon} />
          )}
        {column.props.allowsSorting &&
          state.sortDescriptor.column !== column.key && (
            <MaterialIcon icon="swap_vert" className="swap-icon" />
          )}
      </ThContent>
    </StyledTh>
  );
}

interface TableRowProps<T> extends HasChildren {
  item: Node<T>;
  state: TableState<T>;
}

function TableRow<T>(props: TableRowProps<T>) {
  const { item, children, state } = props;
  const ref = useRef(null);
  const isSelected = state.selectionManager.isSelected(item.key);
  const { rowProps } = useTableRow({ node: item }, state, ref);
  const { isFocusVisible, focusProps } = useFocusRing();

  return (
    <StyledRow
      {...mergeProps(rowProps, focusProps)}
      className={classNames({
        "is-selected": isSelected,
        "is-focused": isFocusVisible,
      })}
      ref={ref}
    >
      {children}
    </StyledRow>
  );
}

interface TableCellProps<T> {
  cell: Node<T>;
  state: TableState<T>;
}

function TableCell<T>(props: TableCellProps<T>) {
  const { cell, state } = props;

  const ref = useRef(null);
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { focusProps } = useFocusRing();

  return (
    <StyledTd {...mergeProps(gridCellProps, focusProps)} ref={ref}>
      {cell.rendered}
    </StyledTd>
  );
}

interface TableCheckboxCellProps<T> {
  cell: Node<T>;
  state: TableState<T>;
}

function TableCheckboxCell<T>(props: TableCheckboxCellProps<T>) {
  const { cell, state } = props;

  const ref = useRef(null);
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { checkboxProps } = useTableSelectionCheckbox(
    // @ts-ignore
    { key: cell.parentKey },
    state
  );

  return (
    <StyledTd {...gridCellProps} ref={ref}>
      <Checkbox {...checkboxProps} />
    </StyledTd>
  );
}

interface TableSelectAllCellProps<T> {
  column: Node<T>;
  state: TableState<T>;
}

function TableSelectAllCell<T>(props: TableSelectAllCellProps<T>) {
  const { column, state } = props;

  const ref = useRef(null);
  const { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  );
  const { checkboxProps } = useTableSelectAllCheckbox(state);

  console.log(checkboxProps);

  return (
    <StyledTh {...columnHeaderProps} ref={ref}>
      {state.selectionManager.selectionMode === "single" ? (
        <VisuallyHidden>{checkboxProps["aria-label"]}</VisuallyHidden>
      ) : (
        <Checkbox {...checkboxProps} />
      )}
    </StyledTh>
  );
}

/** A `Table.Header` is a container for the `Table.Column` elements in a Table.
 * Columns can be statically defined as children, or generated dynamically
 * using a function based on the data passed to the `columns` prop. */
Table.Header = cloneComponent(TableHeader, "Table.Header");
/** A `Table.Column` represents a single column in a Table.
 * It can be used as a child of a `Table.Header` to statically define
 * or dynamically generated using a function based on the `columns` prop.
 * of the `Table.Header`.
 */
Table.Column = cloneComponent(Column, "Table.Column");
/** A `Table.Row` represents a single item in a Table and contains Cell elements
 * for each column. Cells can be statically defined as children, or
 * generated dynamically using a function based on the columns defined
 * in the `Table.Header`. */
Table.Row = cloneComponent(Row, "Table.Row");
/** A `Table.Body` is a container for the `Table.Row` elements in a Table.
 * Rows can be statically defined as children, or generated dynamically
 * using a function based on the data passed to the `items` prop.
 */
Table.Body = cloneComponent(TableBody, "Table.Body");
/** A `Table.Cell` represents a single cell in a Table. */
Table.Cell = cloneComponent(Cell, "Table.Cell");
