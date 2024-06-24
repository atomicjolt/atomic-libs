import { useRef } from "react";
import { useTable } from "react-aria";

import { TableBody } from "./TableBody";
import { TableHeader } from "./TableHeader";
import { useRenderProps } from "@/hooks/useRenderProps";
import { TableProps, TableState, TreeGridState } from "../../Table.types";
import { StyledTable } from "../../Table.styles";
import { TableFooter } from "./TableFooter";

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
    paginationDescriptor,
    onPaginationChange,
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
    selectors: {
      "data-sticky": isSticky,
    },
  });

  return (
    <StyledTable {...gridProps} {...renderProps} ref={ref} id={props.id}>
      <TableHeader state={state} />
      <TableBody {...props} />
      {paginationDescriptor !== undefined && (
        <TableFooter
          state={state}
          paginationDescriptor={paginationDescriptor}
          onPaginationChange={onPaginationChange}
        />
      )}
    </StyledTable>
  );
}
