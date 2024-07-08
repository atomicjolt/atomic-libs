import { Node, TableState } from "react-stately";
import { useRef } from "react";
import {
  VisuallyHidden,
  useTableCell,
  useTableColumnHeader,
  useTableSelectAllCheckbox,
  useTableSelectionCheckbox,
} from "react-aria";
import CheckBox from "@/components/Inputs/Checkbox";
import { StyledCell, StyledTh } from "../../Table.styles";

interface TableCheckboxCellProps<T> {
  cell: Node<T>;
  state: TableState<T>;
}

export function TableCheckboxCell<T>(props: TableCheckboxCellProps<T>) {
  const { cell, state } = props;

  const ref = useRef(null);
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { checkboxProps } = useTableSelectionCheckbox(
    // @ts-expect-error
    { key: cell.parentKey },
    state
  );

  return (
    <StyledCell {...gridCellProps} ref={ref}>
      <CheckBox {...checkboxProps} />
    </StyledCell>
  );
}

interface TableSelectAllCellProps<T> {
  column: Node<T>;
  state: TableState<T>;
}

export function TableSelectAllCell<T>(props: TableSelectAllCellProps<T>) {
  const { column, state } = props;

  const ref = useRef(null);
  const { columnHeaderProps } = useTableColumnHeader(
    { node: column },
    state,
    ref
  );
  const { checkboxProps } = useTableSelectAllCheckbox(state);

  return (
    <StyledTh {...columnHeaderProps} ref={ref} style={{ width: "48px" }}>
      {state.selectionManager.selectionMode === "single" ? (
        <VisuallyHidden>{checkboxProps["aria-label"]}</VisuallyHidden>
      ) : (
        <CheckBox {...checkboxProps} />
      )}
    </StyledTh>
  );
}
