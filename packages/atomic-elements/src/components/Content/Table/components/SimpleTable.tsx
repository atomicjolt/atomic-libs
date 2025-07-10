import { Provider } from "@components/Internal/Provider";
import { useTableState } from "../hooks/useTableState";
import { TableInternalProps } from "../Table.types";
import { TableStateContext } from "../Table.context";
import { TableShared } from "./TableShared";

export function SimpleTable<T extends object>(props: TableInternalProps<T>) {
  const state = useTableState<T>({
    ...props,
    children: undefined,
  });

  return (
    <Provider values={[[TableStateContext.Provider, state]]}>
      <TableShared state={state} {...props} />
    </Provider>
  );
}
