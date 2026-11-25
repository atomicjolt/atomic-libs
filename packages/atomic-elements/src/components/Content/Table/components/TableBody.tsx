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
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";
import { useLoading } from "@components/Feedback/Loading";
import { useTranslations } from "@hooks/useTranslations";

export interface TableBodyProps<T> extends LoadingProps {
  renderEmpty?: (() => React.ReactNode) | React.ReactNode;
  /** The contents of the table body. Supports static items or a function for dynamic rendering. */
  children?: React.ReactNode | ((item: T) => React.ReactNode);
  /** A list of row objects in the table body used when dynamically rendering rows. */
  items?: Iterable<T>;
}

export const TableBody = createBranchComponent(
  "tablebody",
  function TableBody<T extends object>(
    props: TableBodyProps<T>,
    ref: React.ForwardedRef<HTMLTableSectionElement>,
    body: Node<T>
  ) {
    const state = useContext(TableStateContext)!;
    const { loadingRows = 10 } = props;
    const { isLoading, loadingLabel } = useLoading(props);
    const t = useTranslations();

    const renderProps = useRenderProps({
      componentClassName: "aje-table__body",
      selectors: {
        "data-empty": !body.hasChildNodes,
        "data-loading": isLoading,
      },
    });

    const { CollectionBranchRenderer } = useCollectionRenderer();

    return (
      <TableRowGroup
        type={StyledTBody}
        ref={ref}
        aria-busy={isLoading || undefined}
        {...renderProps}
      >
        {!body.hasChildNodes && !isLoading && (
          <EmptyTable state={state} renderEmpty={props.renderEmpty} />
        )}

        {isLoading && (
          <LoadingTableRows
            state={state}
            rows={loadingRows}
            label={loadingLabel ?? t("loading")}
          />
        )}

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

// @ts-expect-error Setting displayName on a generic component causes a TypeScript error
TableBody.displayName = "Table.Body";
