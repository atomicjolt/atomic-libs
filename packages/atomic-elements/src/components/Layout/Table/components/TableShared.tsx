import { useRef } from "react";
import { useTable } from "@react-aria/table";

import { useRenderProps } from "@hooks/useRenderProps";
import { TableProps, TableState, TreeGridState } from "../Table.types";
import { StyledTable } from "../Table.styles";
import { TableFooter } from "./TableFooter";
import { TablePagination } from "./TablePagination";
import { TableHeader } from "./TableHeader";
import { TableBody } from "./TableBody";
import { useCollectionRenderer } from "@hooks/useCollectionRenderer";

export interface TableInternalProps<T> extends TableProps<T> {
  state: TableState<T> | TreeGridState<T>;
}

export function TableShared<T extends object>(props: TableInternalProps<T>) {
  const {
    state,
    onRowAction,
    onCellAction,
    className,
    variant,
    isSticky,
    style,
    isLoading = false,
    hasBottom = false,
  } = props;

  const ref = useRef(null);

  const { gridProps } = useTable(
    {
      ...props,
      onRowAction: (key) => {
        const row = state.collection.getItem(key);
        row?.props?.onAction?.();
        onRowAction?.(key);
      },
      onCellAction: (key) => {
        const cell = state.collection.getItem(key);
        cell?.props?.onAction?.();
        onCellAction?.(key);
      },
    },
    state,
    ref
  );

  if (state.search.column) {
    delete gridProps.onKeyDownCapture;
  }

  const renderProps = useRenderProps({
    componentClassName: "aje-table",
    className,
    variant,
    style,
    selectors: {
      "data-sticky": isSticky,
      "data-loading": isLoading,
      "data-has-bottom": hasBottom,
    },
  });

  const { CollectionRenderer } = useCollectionRenderer();

  return (
    <>
      <StyledTable {...gridProps} {...renderProps} ref={ref} id={props.id}>
        <CollectionRenderer collection={state.collection} />
      </StyledTable>
    </>
  );
}
