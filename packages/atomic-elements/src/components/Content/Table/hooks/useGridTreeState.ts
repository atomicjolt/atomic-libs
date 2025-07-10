import {
  TreeGridStateProps as StatelyTreeGridStateProps,
  UNSTABLE_useTreeGridState,
} from "@react-stately/table";
import { enableTableNestedRows } from "@react-stately/flags";
import { TableState } from "../Table.types";
import {
  TableStateExtensionsProps,
  useTableStateExtensions,
} from "./useTableStateExtensions";
import { Expandable } from "@react-types/shared";

export interface TreeGridStateProps<T extends object>
  extends StatelyTreeGridStateProps<T>,
    TableStateExtensionsProps,
    Expandable {}

export function useGridTreeState<T extends object>(
  props: TreeGridStateProps<T>
): TableState<T> {
  // treeGridState is technically unstable, so you have to enable it
  // via a flag before using it
  enableTableNestedRows();

  const { defaultExpandedKeys, expandedKeys, onExpandedChange } = props;

  const state = UNSTABLE_useTreeGridState({
    ...(props as StatelyTreeGridStateProps<T>),
    UNSTABLE_defaultExpandedKeys: defaultExpandedKeys,
    UNSTABLE_expandedKeys: expandedKeys,
    UNSTABLE_onExpandedChange: onExpandedChange,
  });
  const stateExtensions = useTableStateExtensions(props, state);

  // @ts-expect-error - Nested table doesn't support footers yet
  return {
    ...state,
    ...stateExtensions,
  };
}
