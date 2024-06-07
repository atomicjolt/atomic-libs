import React, { useRef } from "react";
import { AriaTableProps, useTable } from "react-aria";
import { TableHeaderProps, TableBodyProps } from "react-stately";
import {
  SelectionMode,
  SelectionBehavior,
  Sortable,
  MultipleSelection,
} from "@react-types/shared";
import { StyledTBody, StyledTable, StyledThead } from "./Table.styles";
import classNames from "classnames";
import { HasClassName, HasVariant } from "@/types";
import { useVariantClass } from "../../../hooks";
import { useExtendedTableState } from "./hooks/useExtendedTableState";
import { ColumnReorder, Searchable, TableVariants } from "./Table.types";
import {
  DraggableTableColumnHeader,
  TableColumnHeader,
} from "./components/internal/TableColumn";
import { TableRowGroup } from "./components/internal/TableRowGroup";
import { TableHeaderRow as TableHeaderRowInternal } from "./components/internal/TableHeader";
import {
  TableCheckboxCell,
  TableSelectAllCell,
} from "./components/internal/TableCheckbox";
import { TableRow as TableRowInternal } from "./components/internal/TableRow";
import { TableCell as TableCellInternal } from "./components/internal/TableCell";

import { Row } from "./components/public/TableRow";
import { TableCell } from "./components/public/TableCell";
import { TableHeader } from "./components/public/TableHeader";
import { TableColumn } from "./components/public/TableColumn";
import { TableBody } from "./components/public/TableBody";

export interface TableProps<T>
  extends AriaTableProps<T>,
    MultipleSelection,
    Sortable,
    Searchable,
    HasClassName,
    HasVariant<TableVariants>,
    ColumnReorder {
  /** The selection mode for the table. */
  selectionMode?: SelectionMode;
  /** The selection behavior for the table. */
  selectionBehavior?: SelectionBehavior;

  children?: [
    React.ReactElement<TableHeaderProps<T>>,
    React.ReactElement<TableBodyProps<T>>,
  ];

  isSticky?: boolean;
}

/** Table component that supports sorting, row selection, and column reordering.  */
export function Table<T extends object>(props: TableProps<T>) {
  const {
    selectionMode,
    selectionBehavior,
    className,
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

  // TODO: I'm not sure why, but the focus handling seems to be broken
  // It always focuse the last row in the table for some reason initially
  // Which is confusing. Disabling it for now.
  delete gridProps.onFocus;

  if (state.searchDescriptor?.column) {
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
          <TableHeaderRowInternal
            key={headerRow.key}
            item={headerRow}
            state={state}
          >
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
                      state.reorderColumns(columnKey, column.key)
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
          </TableHeaderRowInternal>
        ))}
      </TableRowGroup>
      <TableRowGroup type={StyledTBody}>
        {[...collection.body.childNodes].map((row) => (
          <TableRowInternal key={row.key} item={row} state={state}>
            {[...row.childNodes].map((cell) =>
              cell.props.isSelectionCell ? (
                <TableCheckboxCell key={cell.key} cell={cell} state={state} />
              ) : (
                <TableCellInternal key={cell.key} cell={cell} state={state} />
              )
            )}
          </TableRowInternal>
        ))}
      </TableRowGroup>
    </StyledTable>
  );
}

Table.Header = TableHeader;
Table.Column = TableColumn;
Table.Body = TableBody;
Table.Row = Row;
Table.Cell = TableCell;

export default Table;
