import { TableState } from "react-stately";
import {
  ColumnReorderProps,
  SearchProps,
  TableStateExtensions,
} from "../Table.types";
import { Key } from "../../../../types";

export interface TableStateExtensionsProps
  extends SearchProps,
    ColumnReorderProps {}

export function useTableStateExtensions<T>(
  props: TableStateExtensionsProps,
  state: TableState<T>
): TableStateExtensions {
  const { onSearchChange, searchDescriptor, onColumnReorder } = props;

  const { collection, showSelectionCheckboxes } = state;

  const reorderColumns = (droppedKey: Key, nextKey: Key) => {
    const columnKeys = collection.headerRows
      .flatMap((row) => [...collection.getChildren!(row.key)])
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
    search: {
      column: searchDescriptor?.column ?? null,
      text: searchDescriptor?.search ?? "",
      clear: () => onSearchChange?.({ column: null, search: "" }),
      set: (column, text) => onSearchChange?.({ column, search: text }),
    },
    reorderColumns,
  };
}
