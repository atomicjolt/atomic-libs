import { TableState, TableStateProps, useTableState } from "react-stately";
import { Searchable } from "../Table.types";

export interface ExtendedTableStateProps<T extends object>
  extends TableStateProps<T>,
    Searchable {}

export interface ExtendedTableState<T> extends TableState<T>, Searchable {}

export function useExtendedTableState<T extends object>(
  props: ExtendedTableStateProps<T>
) {
  const state = useTableState(props);
  const { onSearchChange, searchDescriptor } = props;

  return {
    ...state,
    searchDescriptor,
    onSearchChange,
  };
}
