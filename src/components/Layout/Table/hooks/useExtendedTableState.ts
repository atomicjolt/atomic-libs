import { TableState, TableStateProps } from "react-stately";
import { useCallback, useMemo, useState } from "react";
import { SortDirection, useCollection } from "react-stately";
import { TableCollection as ITableCollection } from "@react-types/table";
import { TableCollection } from "@react-stately/table";
import { useGridState } from "@react-stately/grid";
import { ColumnReorder, Searchable } from "../Table.types";
import { Key } from "@/types";

// Modified from: https://github.com/adobe/react-spectrum/blob/main/packages/%40react-stately/table/src/useTableState.ts

const OPPOSITE_SORT_DIRECTION = {
  ascending: "descending" as SortDirection,
  descending: "ascending" as SortDirection,
};

export interface ExtendedTableStateProps<T extends object>
  extends TableStateProps<T>,
    Searchable,
    ColumnReorder {
  isExpandable?: boolean;
}

export interface ExtendedTableState<T>
  extends TableState<T>,
    Searchable,
    ColumnReorder {}

export function useExtendedTableState<T extends object>(
  props: ExtendedTableStateProps<T>
): ExtendedTableState<T> {
  const [isKeyboardNavigationDisabled, setKeyboardNavigationDisabled] =
    useState(false);

  const {
    isExpandable = false,
    selectionMode = "none",
    showSelectionCheckboxes = false,
    showDragButtons,
  } = props;

  const context = useMemo(
    () => ({
      showSelectionCheckboxes:
        showSelectionCheckboxes && selectionMode !== "none",
      showDragButtons: showDragButtons,
      showExpandButtons: isExpandable,
      selectionMode,
      columns: [],
    }),
    [
      props.children,
      showSelectionCheckboxes,
      selectionMode,
      showDragButtons,
      isExpandable,
    ]
  );

  const collection = useCollection<T, ITableCollection<T>>(
    props,
    useCallback(
      (nodes) => new TableCollection(nodes, undefined, context),
      [context]
    ),
    context
  );

  const { disabledKeys, selectionManager } = useGridState({
    ...props,
    collection,
    disabledBehavior: props.disabledBehavior || "selection",
  });

  const { onSearchChange, searchDescriptor, onColumnReorder } = props;

  const reorderColumns = (droppedKey: Key, nextKey: Key) => {
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

    if (showSelectionCheckboxes) {
      // Get rid of the checkbox column key
      columnKeys.shift();
    }

    onColumnReorder?.(columnKeys);
  };

  return {
    collection,
    searchDescriptor,
    onSearchChange,
    reorderColumns,
    disabledKeys,
    selectionManager,
    showSelectionCheckboxes: false,
    // @ts-expect-error - prexisting error
    sortDescriptor: props.sortDescriptor,
    isKeyboardNavigationDisabled:
      collection.size === 0 || isKeyboardNavigationDisabled,
    setKeyboardNavigationDisabled,
    sort(columnKey: Key, direction?: "ascending" | "descending") {
      props.onSortChange?.({
        column: columnKey,
        direction:
          direction ??
          (props.sortDescriptor?.column === columnKey
            ? // @ts-expect-error - prexisting error
              OPPOSITE_SORT_DIRECTION[props.sortDescriptor.direction]
            : "ascending"),
      });
    },
  };
}
