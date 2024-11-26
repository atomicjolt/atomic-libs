import { useContext, useRef } from "react";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import { GridNode } from "@react-types/grid";
import { createLeafComponent } from "@react-aria/collections";
import { ColumnProps } from "@react-stately/table";

import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { MaterialIcon } from "@components/Icons/MaterialIcon";

import { ColumnContent, StyledTh } from "../Table.styles";
import { useExtendedTableColumnHeader } from "../hooks/useExtendedTableColumnHeader";
import { ColumnSearch } from "./ColumnSearch";
import { TableStateContext } from "../Table.context";
import { RenderBaseProps } from "../../../../types";

interface TableColumnRenderProps {
  allowsSorting: boolean;
  isSorting: boolean;
  allowsSearching: boolean;
  isSearching: boolean;
  sortDirection: "ascending" | "descending" | undefined;
}

export interface TableColumnProps<T>
  extends Omit<ColumnProps<T>, "children">,
    RenderBaseProps<TableColumnRenderProps> {
  /** Whether the column can be searched on */
  allowsSearching?: boolean;

  /** Whether to show a divider between this column and the next */
  showDivider?: boolean;

  id?: string;

  /** The number of columns to span */
  colSpan?: number;
}

export const TableColumn = createLeafComponent("column", function TableColumn<
  T extends object
>(props: TableColumnProps<T>, forwardedRef: React.ForwardedRef<HTMLTableCellElement>, column: GridNode<T>) {
  const state = useContext(TableStateContext)!;
  const ref = useObjectRef(forwardedRef);

  // Placeholder cells don't have props
  column.props = column.props || {};

  const { allowsSearching = false, allowsSorting = false, colSpan } = props;

  const isLastCol =
    state.collection.columns[state.collection.columnCount - 1].key ===
    column.key;

  const showDivider = props.showDivider && !isLastCol;

  const inputRef = useRef(null);
  const { columnHeaderProps, isSearching } = useExtendedTableColumnHeader(
    { node: column },
    state,
    ref,
    inputRef
  );
  const { focusProps } = useFocusRing();

  const arrowIcon =
    state.sortDescriptor?.direction === "ascending"
      ? "arrow_drop_down"
      : "arrow_drop_up";

  const renderProps = useRenderProps({
    componentClassName: "aje-table__column",
    ...props,
    values: {
      allowsSorting,
      isSorting: state.sortDescriptor?.column === column.key,
      allowsSearching,
      isSearching,
      sortDirection: state.sortDescriptor?.direction,
    },
    selectors: {
      "data-divider": showDivider,
      "data-sortable": allowsSorting,
      "data-has-children": column.hasChildNodes,
      "data-searchable": allowsSearching,
      "data-searching": isSearching,
    },
  });

  const headerProps = [columnHeaderProps, focusProps, renderProps];

  return (
    <StyledTh colSpan={colSpan} ref={ref} {...mergeProps(...headerProps)}>
      <ColumnContent>
        {renderProps.children}
        {column.props.allowsSorting &&
          state.sortDescriptor?.column === column.key && (
            <MaterialIcon icon={arrowIcon} />
          )}
        {column.props.allowsSorting &&
          state.sortDescriptor?.column !== column.key && (
            <MaterialIcon icon="swap_vert" className="swap-icon" />
          )}
        {allowsSearching && (
          <ColumnSearch
            column={column}
            state={state}
            ref={inputRef}
            isSearching={isSearching}
          />
        )}
      </ColumnContent>
    </StyledTh>
  );
});
