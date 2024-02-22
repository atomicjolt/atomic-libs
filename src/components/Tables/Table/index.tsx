import React from "react";
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
} from "react-stately";
import {
  SelectionMode,
  SelectionBehavior,
  Sortable,
} from "@react-types/shared";
import { useRef } from "react";
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
import { HasChildren } from "../../../types";
import MaterialIcon from "../../Icons/MaterialIcon";

export interface TableProps<T>
  extends AriaTableProps<T>,
    Sortable,
    HasChildren {
  /** The selection mode for the table. */
  selectionMode?: SelectionMode;
  /** The selection behavior for the table. */
  selectionBehavior?: SelectionBehavior;
}

export default function Table<T extends object>(props: TableProps<T>) {
  const { selectionMode, selectionBehavior } = props;
  const state = useTableState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  const ref = useRef(null);
  const { collection } = state;
  const { gridProps } = useTable(props, state, ref);

  return (
    <StyledTable {...gridProps} ref={ref}>
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

Table.Header = TableHeader;
Table.Row = Row;
Table.Column = Column;
Table.Body = TableBody;
Table.Cell = Cell;

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
