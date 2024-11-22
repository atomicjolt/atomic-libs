import { Expandable, Node } from "@react-types/shared";
import { useRenderProps } from "@hooks/useRenderProps";
import { createBranchComponent } from "@react-aria/collections";
import { TableRowGroup } from "./TableRowGroup";
import { TableRow } from "./TableRow";
import { TableCell } from "./TableCell";
import { TableCheckboxCell } from "./TableCheckbox";
import {
  LoadingProps,
  PaginationProps,
  RenderEmptyProps,
  TableState,
  TreeGridState,
} from "../../Table.types";
import { StyledTBody } from "../../Table.styles";
import { LoadingTableRows } from "./Loading";
import { EmptyTable } from "./EmptyTable";
import { TableStateContext } from "../../Table.context";
import { useContext } from "react";
import { HasChildren } from "../../../../../types";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";

export interface TableBodyProps<T>
  extends Expandable,
    LoadingProps,
    HasChildren {}

export const TableBody = createBranchComponent("tablebody", function TableBody<
  T extends object
>(props: TableBodyProps<T>, ref: React.ForwardedRef<HTMLTableSectionElement>, body: Node<T>) {
  const state = useContext(TableStateContext)!;
  const { isLoading, loadingRows = 10 } = props;
  const { collection } = state;

  const renderProps = useRenderProps({
    componentClassName: "aje-table__body",
    ...collection.body.props,
    selectors: {
      // "data-empty": rows.length === 0,
    },
  });

  const { CollectionBranchRenderer } = useCollectionRenderer();

  return (
    <TableRowGroup type={StyledTBody} ref={ref} {...renderProps}>
      <CollectionBranchRenderer collection={state.collection} parent={body} />
      {/* {rows.length === 0 && !isLoading && (
        <EmptyTable
          state={state}
          renderEmpty={state.collection.body.props?.renderEmpty}
        />
      )}
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
        })} */}
    </TableRowGroup>
  );
});
