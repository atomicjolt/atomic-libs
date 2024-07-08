import {
  useTableState as useStatelyTableState,
  TableStateProps as StatelyTableStateProps,
  TableCollection,
} from "@react-stately/table";
import { TableChildren, TableState } from "../Table.types";
import {
  TableStateExtensionsProps,
  useTableStateExtensions,
} from "./useTableStateExtensions";
import { useTableCollection } from "./useTableCollection";

export interface TableStateProps<T extends object>
  extends Omit<StatelyTableStateProps<T>, "children">,
    TableStateExtensionsProps {
  children?: TableChildren<T>;
}

export function useTableState<T extends object>(
  props: TableStateProps<T>
): TableState<T> {
  const state = useStatelyTableState(props as StatelyTableStateProps<T>);
  const stateExtensions = useTableStateExtensions(props, state);
  const collection = useTableCollection(
    props,
    state.collection as TableCollection<T>
  );

  return {
    ...state,
    ...stateExtensions,
    collection,
  };
}
