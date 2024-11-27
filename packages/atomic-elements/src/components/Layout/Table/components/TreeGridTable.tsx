import { useGridTreeState } from "../hooks/useGridTreeState";
import { TableStateContext } from "../Table.context";
import { TableInternalProps } from "../Table.types";
import { TableShared } from "./TableShared";

export function TreeGridTable<T extends object>(props: TableInternalProps<T>) {
  // TODO: re-implement nested rows
  throw new Error("allowExpandableRows is not currently implemented");

  const state = useGridTreeState<T>({
    ...props,
    children: undefined,
  });

  return (
    <TableStateContext.Provider value={state}>
      <TableShared state={state} {...props} />
    </TableStateContext.Provider>
  );
}
