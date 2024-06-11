import {
  useTableState as useStatelyTableState,
  StatelyTableStateProps,
} from "@react-stately/table";
import { enableTableNestedRows } from "@react-stately/flags";
import { TableState } from "../Table.types";
import {
  TableStateExtensionsProps,
  useTableStateExtensions,
} from "./useTableStateExtensions";

export interface TableStateProps<T extends object>
  extends StatelyTableStateProps<T>,
    TableStateExtensionsProps {}

export function useTableState<T extends object>(
  props: TableStateProps<T>
): TableState<T> {
  enableTableNestedRows();

  const state = useStatelyTableState(props);
  const stateExtensions = useTableStateExtensions(props, state);

  return {
    ...state,
    ...stateExtensions,
  };
}
