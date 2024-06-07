import { useRef } from "react";
import { mergeProps, useTableCell } from "react-aria";
import { useFocusRing } from "@/hooks/useFocusRing";
import { TableState } from "react-stately";
import { GridNode } from "@react-types/grid";
import { RowHeader, StyledTd } from "../../Table.styles";
import { useRenderProps } from "@/hooks/useRenderProps";

interface TableCellProps<T> {
  cell: GridNode<T>;
  state: TableState<T>;
}

export function TableCell<T>(props: TableCellProps<T>) {
  const { cell, state } = props;

  const ref = useRef(null);
  const { gridCellProps } = useTableCell({ node: cell }, state, ref);
  const { focusProps, isFocusVisible } = useFocusRing();

  const showDivider =
    cell.props.showDivider ?? cell.column?.props?.showDivider ?? false;

  const renderProps = useRenderProps({
    componentClassName: "aje-table__cell",
    className: cell.props.className,
    style: cell.props.style,
    selectors: {
      "data-divider": showDivider,
      "data-focused": isFocusVisible,
    },
  });

  if (cell?.props?.isRowHeader) {
    return (
      <RowHeader
        {...mergeProps(gridCellProps, focusProps, renderProps, {
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
      {...mergeProps(gridCellProps, focusProps, renderProps, {
        colSpan: cell.props.colSpan,
      })}
      ref={ref}
    >
      {cell.rendered}
    </StyledTd>
  );
}
