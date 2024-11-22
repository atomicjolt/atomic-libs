import React, { useContext } from "react";
import { Node } from "@react-types/shared";
import { useRenderProps } from "@hooks/useRenderProps";
import { Collection, createBranchComponent } from "@react-aria/collections";
import { TableRowGroup } from "./TableRowGroup";
import { LoadingProps } from "../Table.types";
import { StyledTBody } from "../Table.styles";
import { LoadingTableRows } from "./Loading";
import { EmptyTable } from "./EmptyTable";
import { TableStateContext } from "../Table.context";
import { TableBodyProps as StatelyBodyProps } from "react-stately";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";

export interface TableBodyProps<T> extends StatelyBodyProps<T>, LoadingProps {
  renderEmpty?: (() => React.ReactNode) | React.ReactNode;
}

export const TableBody = createBranchComponent(
  "tablebody",
  function TableBody<T extends object>(
    props: TableBodyProps<T>,
    ref: React.ForwardedRef<HTMLTableSectionElement>,
    body: Node<T>
  ) {
    const state = useContext(TableStateContext)!;
    const { isLoading, loadingRows = 10 } = props;

    const renderProps = useRenderProps({
      componentClassName: "aje-table__body",
      selectors: {
        "data-empty": !body.hasChildNodes,
        "data-loading": isLoading,
      },
    });

    const { CollectionBranchRenderer } = useCollectionRenderer();

    return (
      <TableRowGroup type={StyledTBody} ref={ref} {...renderProps}>
        {!body.hasChildNodes && !isLoading && (
          <EmptyTable state={state} renderEmpty={props.renderEmpty} />
        )}

        {isLoading && <LoadingTableRows state={state} rows={loadingRows} />}

        {!isLoading && (
          <CollectionBranchRenderer
            collection={state.collection}
            parent={body}
          />
        )}
      </TableRowGroup>
    );
  },
  (props) => <Collection items={props.items}>{props.children}</Collection>
);
