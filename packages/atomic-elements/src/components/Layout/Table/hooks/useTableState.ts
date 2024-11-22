import {
  useTableState as useStatelyTableState,
  TableStateProps as StatelyTableStateProps,
} from "@react-stately/table";
import { TableChildren, TableState } from "../Table.types";
import {
  TableStateExtensionsProps,
  useTableStateExtensions,
} from "./useTableStateExtensions";
import { TableCollection } from '../TableCollection';


export interface TableStateProps<T extends object>
  extends Omit<StatelyTableStateProps<T>, "children" | "collection">,
    TableStateExtensionsProps {
  children?: TableChildren<T>;
  collection: TableCollection<T>;
}

export function useTableState<T extends object>(
  props: TableStateProps<T>
): TableState<T> {
  const state = useStatelyTableState(props as StatelyTableStateProps<T>);
  const stateExtensions = useTableStateExtensions(props, state);

  return {
    ...state,
    ...stateExtensions,
    collection: props.collection,
  };
}
