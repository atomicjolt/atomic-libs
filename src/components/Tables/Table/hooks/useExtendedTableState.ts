import React from "react";
import { TableState, TableStateProps, useTableState } from "react-stately";

export interface SearchDescriptor {
  column: React.Key | null;
  search: string;
}

export interface Searchable {
  searchDescriptor?: SearchDescriptor;
  onSearchChange?: (descriptor: SearchDescriptor) => void;
}

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
