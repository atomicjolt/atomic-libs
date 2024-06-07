import { Key, TableState, TableStateProps, useTableState } from "react-stately";
import { ColumnReorder, Searchable } from "../Table.types";

export interface ExtendedTableStateProps<T extends object>
  extends TableStateProps<T>,
    Searchable,
    ColumnReorder {}

export interface ExtendedTableState<T> extends TableState<T>, Searchable {
  reorderColumns: (droppedKey: Key, nextKey: Key) => void;
}

export function useExtendedTableState<T extends object>(
  props: ExtendedTableStateProps<T>
): ExtendedTableState<T> {
  const state = useTableState(props);
  const { collection } = state;

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

    if (state.showSelectionCheckboxes) {
      // Get rid of the checkbox column key
      columnKeys.shift();
    }

    onColumnReorder?.(columnKeys);
  };

  return {
    ...state,
    searchDescriptor,
    onSearchChange,
    reorderColumns,
  };
}
