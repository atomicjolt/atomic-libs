import React, { useRef } from "react";
import { AriaTableProps, useTable } from "react-aria";
import { TableHeaderProps, TableBodyProps } from "react-stately";
import {
  SelectionMode,
  SelectionBehavior,
  Sortable,
  MultipleSelection,
  Expandable,
} from "@react-types/shared";

import { StyledTable } from "./Table.styles";
import { BaseProps } from "@/types";
import { useExtendedTableState } from "./hooks/useExtendedTableState";
import { ColumnReorder, Searchable, TableVariants } from "./Table.types";

import { TableBody as TableBodyInternal } from "./components/internal/TableBody";
import { TableHeader as TableHeaderInternal } from "./components/internal/TableHeader";

import { Row } from "./components/public/TableRow";
import { TableCell } from "./components/public/TableCell";
import { TableHeader } from "./components/public/TableHeader";
import { TableColumn } from "./components/public/TableColumn";
import { TableBody } from "./components/public/TableBody";
import { useRenderProps } from "@/hooks/useRenderProps";

export interface TableProps<T>
  extends Omit<AriaTableProps<T>, "id">,
    MultipleSelection,
    Sortable,
    Searchable,
    ColumnReorder,
    Expandable,
    BaseProps {
  variant?: TableVariants;
  /** The selection mode for the table. */
  selectionMode?: SelectionMode;
  /** The selection behavior for the table. */
  selectionBehavior?: SelectionBehavior;

  children?: [
    React.ReactElement<TableHeaderProps<T>>,
    React.ReactElement<TableBodyProps<T>>,
  ];

  isSticky?: boolean;

  /** Whether nested rows are expandable */
  isExpandable?: boolean;

  /** Whether keyboard navigation is disabled */
  keyboardNavigationDisabled?: boolean;
}

/** Table component that supports sorting, row selection, and column reordering.  */
export function Table<T extends object>(props: TableProps<T>) {
  const {
    selectionMode,
    selectionBehavior,
    className,
    variant = "default",
    isSticky = false,
    onRowAction,
    onCellAction,
  } = props;

  const ref = useRef(null);

  const state = useExtendedTableState({
    ...props,
    showSelectionCheckboxes:
      selectionMode === "multiple" && selectionBehavior !== "replace",
  });

  const { gridProps } = useTable(
    {
      ...props,
      onRowAction: (key) => {
        const row = state.collection.getItem(key);
        row?.props?.onAction?.();
        onRowAction?.(key);
      },
      onCellAction: (key) => {
        const cell = state.collection.getItem(key);
        cell?.props?.onAction?.();
        onCellAction?.(key);
      },
    },
    state,
    ref
  );

  if (state.search.column) {
    delete gridProps.onKeyDownCapture;
  }

  const renderProps = useRenderProps({
    componentClassName: "aje-table",
    className,
    variant,
    selectors: {
      "data-sticky": isSticky,
    },
  });

  return (
    <StyledTable {...gridProps} {...renderProps} ref={ref} id={props.id}>
      <TableHeaderInternal state={state} />
      <TableBodyInternal state={state} {...props} />
    </StyledTable>
  );
}

Table.Header = TableHeader;
Table.Column = TableColumn;
Table.Body = TableBody;
Table.Row = Row;
Table.Cell = TableCell;

export default Table;
