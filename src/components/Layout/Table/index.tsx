import React, { useRef } from "react";
import { AriaTableProps, useTable } from "react-aria";
import { TableHeaderProps, TableBodyProps } from "react-stately";
import {
  SelectionMode,
  SelectionBehavior,
  Sortable,
  MultipleSelection,
} from "@react-types/shared";

import { StyledTable } from "./Table.styles";
import { HasClassName, HasVariant } from "@/types";
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
import { c } from "vite/dist/node/types.d-aGj9QkWt";

export interface TableProps<T>
  extends AriaTableProps<T>,
    MultipleSelection,
    Sortable,
    Searchable,
    HasClassName,
    ColumnReorder,
    HasVariant<TableVariants> {
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
  const { gridProps } = useTable(props, state, ref);

  // TODO: I'm not sure why, but the focus handling seems to be broken
  // It always focuse the last row in the table for some reason initially
  // Which is confusing. Disabling it for now.
  delete gridProps.onFocus;

  if (state.searchDescriptor?.column) {
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
    <StyledTable {...gridProps} {...renderProps} ref={ref}>
      <TableHeaderInternal state={state} />
      <TableBodyInternal state={state} />
    </StyledTable>
  );
}

Table.Header = TableHeader;
Table.Column = TableColumn;
Table.Body = TableBody;
Table.Row = Row;
Table.Cell = TableCell;

export default Table;
