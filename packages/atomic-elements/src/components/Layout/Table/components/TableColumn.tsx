import { useContext, useRef } from "react";
import { useDrag, useDrop, TextDropItem } from "@react-aria/dnd";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import { GridNode } from "@react-types/grid";
import { createLeafComponent } from "@react-aria/collections";
import { ColumnProps } from "@react-stately/table";

import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { MaterialIcon } from "../../../Icons/MaterialIcon";

import { ColumnDropIndicator, ColumnContent, StyledTh } from "../Table.styles";

import { useExtendedTableColumnHeader } from "../hooks/useExtendedTableColumnHeader";
import { ColumnSearch } from "./ColumnSearch";
import { TableStateContext } from "../Table.context";
import { RenderBaseProps } from "../../../../types";

export interface TableColumnProps<T>
  extends Omit<ColumnProps<T>, "children">,
    RenderBaseProps<never> {
  /** Whether the column can be re-orderd by dragging and dropping on another re-orderable column */
  allowsReordering?: boolean;

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

  const {
    props: {
      allowsSearching = false,
      className,
      allowsSorting = false,
      allowsReordering = false,
    },
  } = column;

  const isLastCol =
    state.collection.columns[state.collection.columnCount - 1].key ===
    column.key;

  const showDivider = column.props.showDivider && !isLastCol;

  const colSpan = props.colSpan;

  const inputRef = useRef(null);
  const { columnHeaderProps, isSearching } = useExtendedTableColumnHeader(
    { node: column },
    state,
    ref,
    inputRef
  );
  const { focusProps } = useFocusRing();

  const { dragProps } = useDrag({
    getItems() {
      return [
        {
          "text/plain": column.key as string,
        },
      ];
    },
  });

  const { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      const items = await Promise.all(
        e.items
          .filter(
            (item) => item.kind === "text" && item.types.has("text/plain")
          )
          // @ts-expect-error
          .map((item: TextDropItem) => item.getText("text/plain"))
      );
      const columnKey = items[0];

      // TODO: consider ripping this out?
      // props.onDrop?.(columnKey);
    },
  });

  const arrowIcon =
    state.sortDescriptor?.direction === "ascending"
      ? "arrow_drop_down"
      : "arrow_drop_up";

  const renderProps = useRenderProps({
    componentClassName: "aje-table__column",
    ...props,
    selectors: {
      "data-divider": showDivider,
      "data-sortable": allowsSorting,
      "data-draggable": allowsReordering,
      "data-has-children": column.hasChildNodes,
      "data-searchable": allowsSearching,
      "data-searching": isSearching,
    },
  });

  const headerProps = [columnHeaderProps, focusProps, renderProps];

  if (allowsReordering) {
    headerProps.push(dragProps, dropProps);
  }

  return (
    <StyledTh colSpan={colSpan} ref={ref} {...mergeProps(...headerProps)}>
      <ColumnContent>
        {allowsReordering && (
          <>
            <ColumnDropIndicator
              style={{ visibility: isDropTarget ? "visible" : "hidden" }}
            />
            <MaterialIcon icon="drag_indicator" />
          </>
        )}
        {props.children}
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
