import { useRef } from "react";
import { useTable } from "@react-aria/table";

import { TableBody as TableBodyInternal } from "./TableBody";
import { TableHeader as TableHeaderInternal } from "./TableHeader";
import { useRenderProps } from "@hooks/useRenderProps";
import { TableProps } from "../../Table.types";
import { StyledTable } from "../../Table.styles";

export interface TableInternalProps<T> extends TableProps<T> {
  state: any;
}

export function TableShared<T extends object>(props: TableInternalProps<T>) {
  const { state, onRowAction, onCellAction, className, variant, isSticky } =
    props;

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
      <TableHeaderInternal state={state} />
      <TableBodyInternal {...props} />
    </StyledTable>
  );
}
