import { useRef } from "react";
import { mergeProps, useTableCell } from "react-aria";
import { useFocusRing } from "@/hooks/useFocusRing";
import { TableState } from "react-stately";
import { GridNode } from "@react-types/grid";
import { RowHeader, StyledTd } from "../../Table.styles";

interface TableCellProps<T> {
  cell: GridNode<T>;
  state: TableState<T>;
}

export function TableCell<T>(props: TableCellProps<T>) {
  const { cell, state } = props;

  const ref = useRef(null);
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { focusProps } = useFocusRing();

  if (cell?.props?.isRowHeader) {
    return (
      <RowHeader
        {...mergeProps(gridCellProps, focusProps, {
          colSpan: cell.props.colSpan,
        })}
        ref={ref}
        scope="row"
      >
        {cell.rendered}
      </RowHeader>
    );
  }

  return (
    <StyledTd
      {...mergeProps(gridCellProps, focusProps, {
        colSpan: cell.props.colSpan,
      })}
      ref={ref}
    >
      {cell.rendered}
    </StyledTd>
  );
}
