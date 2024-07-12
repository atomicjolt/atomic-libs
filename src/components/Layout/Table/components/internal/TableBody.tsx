import { useRef } from "react";
import { Expandable } from "@react-types/shared";
import { useRenderProps } from "@hooks/useRenderProps";
import { TableRowGroup } from "./TableRowGroup";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableCheckboxCell } from "./TableCheckbox";
import {
  LoadingProps,
  PaginationProps,
  TableState,
  TreeGridState,
} from "../../Table.types";
import { StyledTBody } from "../../Table.styles";
import { LoadingTableRows } from "./Loading";

interface TableBodyProps<T> extends Expandable, LoadingProps, PaginationProps {
  state: TableState<T> | TreeGridState<T>;
}

export function TableBody<T extends object>(props: TableBodyProps<T>) {
  const {
    state,
    isLoading,
    paginationDescriptor,
    loadingRows = paginationDescriptor?.pageSize || 10,
  } = props;
  const { collection } = state;
  const ref = useRef(null);

  const rows = [...collection.body.childNodes];

  const renderProps = useRenderProps({
    componentClassName: "aje-table__body",
    ...collection.body.props,
  });

  return (
    <TableRowGroup type={StyledTBody} ref={ref} {...renderProps}>
      {isLoading && <LoadingTableRows state={state} rows={loadingRows} />}
      {!isLoading &&
        rows.map((row) => {
          return (
            <TableRow item={row} state={state} key={row.key}>
              {[...collection.getChildren!(row.key)].map((cell) => {
                if (cell.props.isSelectionCell) {
                  return (
                    <TableCheckboxCell
                      key={cell.key}
                      cell={cell}
                      state={state}
                    />
                  );
                } else {
                  return <TableCell key={cell.key} cell={cell} state={state} />;
                }
              })}
            </TableRow>
          );
        })}
    </TableRowGroup>
  );
}
