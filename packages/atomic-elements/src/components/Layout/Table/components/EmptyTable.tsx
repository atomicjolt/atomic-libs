import { StyledCell, StyledRow } from "../Table.styles";
import { RenderEmptyProps, TableState, TreeGridState } from "../Table.types";

export interface EmptyTableProps<T> extends RenderEmptyProps {
  state: TableState<T> | TreeGridState<T>;
}

export function EmptyTable<T>(props: EmptyTableProps<T>) {
  const { state, renderEmpty } = props;

  if (!renderEmpty) return null;

  return (
    <StyledRow className="aje-table__empty">
      <StyledCell colSpan={state.collection.columnCount}>
        {typeof renderEmpty === "function" ? renderEmpty() : renderEmpty}
      </StyledCell>
    </StyledRow>
  );
}
