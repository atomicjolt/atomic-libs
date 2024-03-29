import React, { useRef, useState } from "react";
import {
  AriaTableProps,
  VisuallyHidden,
  mergeProps,
  useDrag,
  useDrop,
  useFocusRing,
  useTable,
  useTableCell,
  useTableColumnHeader,
  useTableHeaderRow,
  useTableRow,
  useTableRowGroup,
  useTableSelectAllCheckbox,
  useTableSelectionCheckbox,
  TextDropItem,
} from "react-aria";
import {
  TableState,
  Node,
  TableHeader,
  Row,
  Column,
  TableBody,
  Cell,
  TableHeaderProps,
  TableBodyProps,
  ColumnProps,
  CellProps,
} from "react-stately";
import {
  SelectionMode,
  SelectionBehavior,
  Sortable,
  MultipleSelection,
} from "@react-types/shared";
import {
  ColumnDragIndicator,
  DraggableTh,
  RowHeader,
  SearchInput,
  SearchInputWrapper,
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
import {
  HasChildren,
  HasClassName,
  HasVariant,
  SuggestStrings,
} from "../../../types";
import MaterialIcon from "../../Icons/MaterialIcon";
import { cloneComponent } from "../../../clone";
import { useVariantClass } from "../../../hooks";
import IconButton from "../../Buttons/IconButton";
import {
  ExtendedTableState,
  useExtendedTableState,
} from "./hooks/useExtendedTableState";
import { useExtendedTableColumnHeader } from "./hooks/useExtendedTableColumnHeader";
import { Searchable } from "./Table.types";

type TableVariants = SuggestStrings<"default" | "grid" | "vertical-borders">;

export interface TableProps<T>
  extends AriaTableProps<T>,
    MultipleSelection,
    Sortable,
    Searchable,
    HasClassName,
    HasVariant<TableVariants> {
  /** The selection mode for the table. */
  selectionMode?: SelectionMode;
  /** The selection behavior for the table. */
  selectionBehavior?: SelectionBehavior;

  children?: [
    React.ReactElement<TableHeaderProps<T>>,
    React.ReactElement<TableBodyProps<T>>
  ];

  onColumnReorder?: (newOrder: React.Key[]) => void;

  isSticky?: boolean;
}

/** Table component that supports sorting, row selection, and column reordering.  */
export default function Table<T extends object>(props: TableProps<T>) {
  const {
    selectionMode,
    selectionBehavior,
    className,
    onColumnReorder,
    variant = "default",
    isSticky = false,
  } = props;
  const state = useExtendedTableState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  const ref = useRef(null);
  const { collection } = state;
  const { gridProps } = useTable(props, state, ref);

  const variantClass = useVariantClass("aje-table", variant);

  const reorderColumns = (droppedKey: React.Key, nextKey: React.Key) => {
    const columnKeys = collection.headerRows
      .flatMap((row) => [...row.childNodes])
      .map((column) => column.key);
    const droppedIndex = columnKeys.findIndex(
      (column) => column === droppedKey
    );
    const nextIndex = columnKeys.findIndex((column) => column === nextKey);

    if (droppedIndex === -1 || nextIndex === -1) {
      return;
    }

    columnKeys.splice(droppedIndex, 1);
    columnKeys.splice(nextIndex, 0, droppedKey);

    if (state.showSelectionCheckboxes) {
      // Get rid of the checkbox column key
      columnKeys.shift();
    }

    onColumnReorder?.(columnKeys);
  };

  // TODO: I'm not sure why, but the focus handling seems to be broken
  // It always fouses the last row in the table for some reason initially
  // Which is confusing. Disabling it for now.
  delete gridProps.onFocus;

  // When searching, the table's key down listener
  // breaks the input's ability to type in the search box
  if (props.searchDescriptor?.column) {
    delete gridProps.onKeyDownCapture;
  }

  return (
    <StyledTable
      {...gridProps}
      ref={ref}
      className={classNames("aje-table", variantClass, className, {
        "is-sticky": isSticky,
      })}
    >
      <TableRowGroup type={StyledThead}>
        {collection.headerRows.map((headerRow) => (
          <TableHeaderRow key={headerRow.key} item={headerRow} state={state}>
            {[...headerRow.childNodes].map((column) => {
              if (column?.props?.isSelectionCell) {
                return (
                  <TableSelectAllCell
                    key={column.key}
                    column={column}
                    state={state}
                  />
                );
              } else if (column?.props?.allowsReordering) {
                return (
                  <DraggableTableColumnHeader
                    key={column.key}
                    column={column}
                    state={state}
                    onDrop={(columnKey) =>
                      reorderColumns(columnKey, column.key)
                    }
                  />
                );
              } else {
                return (
                  <TableColumnHeader
                    key={column.key}
                    column={column}
                    state={state}
                  />
                );
              }
            })}
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
  state: ExtendedTableState<T>;
}

function TableColumnHeader<T extends object>(props: TableColumnHeaderProps<T>) {
  const { column, state } = props;
  const {
    allowsSearching = false,
    allowsSorting = false,
    colspan,
  } = column.props;

  const ref = useRef(null);
  const inputRef = useRef(null);

  const { focusProps } = useFocusRing();

  const { columnHeaderProps, isSearching } = useExtendedTableColumnHeader(
    { node: column },
    state,
    ref,
    inputRef
  );

  const arrowIcon =
    state.sortDescriptor?.direction === "ascending"
      ? "arrow_drop_up"
      : "arrow_drop_down";

  const headerProps = mergeProps(columnHeaderProps, focusProps);

  return (
    <StyledTh
      {...headerProps}
      className={classNames({ "is-sortable": allowsSorting })}
      colSpan={colspan}
      ref={ref}
    >
      <ThContent>
        {column.rendered}
        {allowsSorting && state.sortDescriptor.column === column.key && (
          <MaterialIcon icon={arrowIcon} />
        )}
        {allowsSorting && state.sortDescriptor.column !== column.key && (
          <MaterialIcon icon="swap_vert" className="swap-icon" />
        )}
        {allowsSearching && (
          <SearchInputWrapper
            className={classNames({ "is-expanded": isSearching })}
          >
            {/* TODO: the input is getting focused when you sort the column
            https://github.com/adobe/react-spectrum/blob/main/packages/%40react-aria/grid/src/useGridCell.ts#L71
            */}
            <SearchInput
              aria-label={`Search ${column.key}`}
              autoFocus
              tabIndex={-1}
              value={state.searchDescriptor?.search}
              onChange={(e) => {
                state.onSearchChange?.({
                  column: column.key,
                  search: e.target.value,
                });
              }}
              // Table listens for keydown events for things
              // like flipping to sorting when pressing the spacebar
              // so we need to stop propagation to prevent that
              // when the input is focused
              onKeyDown={(e) => e.stopPropagation()}
              ref={inputRef}
            />
            <IconButton
              icon="close"
              variant="content"
              size="small"
              onPress={() => {
                state.onSearchChange?.({
                  column: null,
                  search: "",
                });
              }}
            />
          </SearchInputWrapper>
        )}
        {allowsSearching && !isSearching && (
          <IconButton
            icon="search"
            variant="content"
            size="small"
            onPress={() => {
              state.onSearchChange?.({
                column: column.key,
                search: "",
              });
            }}
          />
        )}
      </ThContent>
    </StyledTh>
  );
}

interface DraggableTableColumnHeaderProps<T> {
  column: Node<T>;
  state: TableState<T>;
  onDrop?: (columnKey: string) => void;
}

function DraggableTableColumnHeader<T extends object>(
  props: DraggableTableColumnHeaderProps<T>
) {
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

  const { dragProps } = useDrag({
    getItems() {
      return [
        {
          "text/plain": column.key as string,
        },
      ];
    },
  });

  const { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      const items = await Promise.all(
        e.items
          .filter(
            (item) => item.kind === "text" && item.types.has("text/plain")
          )
          // @ts-ignore
          .map((item: TextDropItem) => item.getText("text/plain"))
      );
      const columnKey = items[0];

      props.onDrop?.(columnKey);
    },
  });

  return (
    <DraggableTh
      className={classNames({ "is-sortable": column.props.allowsSorting })}
      colSpan={colspan}
      ref={ref}
      {...mergeProps(columnHeaderProps, focusProps, dragProps, dropProps)}
    >
      <ThContent>
        <ColumnDragIndicator
          style={{ visibility: isDropTarget ? "visible" : "hidden" }}
        />
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
    </DraggableTh>
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

  if (cell?.props?.isRowHeader) {
    return (
      <RowHeader
        {...mergeProps(gridCellProps, focusProps)}
        ref={ref}
        scope="row"
      >
        {cell.rendered}
      </RowHeader>
    );
  }

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
    <StyledTh {...columnHeaderProps} ref={ref} style={{ width: "48px" }}>
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

interface TableColumnProps<T> extends ColumnProps<T> {
  /** Whether the column can be re-orderd by dragging and dropping an another re-orderable column */
  allowsReordering?: boolean;

  allowsSearching?: boolean;
}

/** A `Table.Column` represents a single column in a Table.
 * It can be used as a child of a `Table.Header` to statically define
 * or dynamically generated using a function based on the `columns` prop.
 * of the `Table.Header`.
 */
Table.Column = cloneComponent(Column, "Table.Column") as <T>(
  props: TableColumnProps<T>
) => JSX.Element;
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

interface PublicTableCellProps extends CellProps {
  /** Whether the cell is a header for the row. When true, the cell will be a th instead of a td */
  isRowHeader?: boolean;
}

/** A `Table.Cell` represents a single cell in a Table. */
Table.Cell = cloneComponent(Cell, "Table.Cell") as (
  props: PublicTableCellProps
) => JSX.Element;
