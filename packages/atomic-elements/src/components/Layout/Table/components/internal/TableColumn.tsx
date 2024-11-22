import { useContext, useRef } from "react";
import { useDrag, useDrop, TextDropItem } from "@react-aria/dnd";
import { mergeProps, useObjectRef } from "@react-aria/utils";
import { GridNode } from "@react-types/grid";
import { createLeafComponent } from "@react-aria/collections";

import { useFocusRing } from "@hooks/useFocusRing";
import { useRenderProps } from "@hooks/useRenderProps";
import { MaterialIcon } from "../../../../Icons/MaterialIcon";

import {
  ColumnDropIndicator,
  ColumnContent,
  StyledTh,
} from "../../Table.styles";

import { useExtendedTableColumnHeader } from "../../hooks/useExtendedTableColumnHeader";
import { TableState, TreeGridState } from "../../Table.types";
import { ColumnSearch } from "./ColumnSearch";
import { TableStateContext } from "../../Table.context";
import { Node } from "react-stately";

interface TableColumnProps<T> {
  // column: GridNode<T>;
  // state: TableState<T> | TreeGridState<T>;
  // onDrop?: (columnKey: string) => void;
  children?: React.ReactNode;
}

export const TableColumn = createLeafComponent("column", function TableColumn<
  T extends object
>(props: TableColumnProps<T>, forwardedRef: React.ForwardedRef<HTMLTableCellElement>, column: Node<T>) {
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

  const colSpan = props.colspan;

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
      console.log("onDrop", e);
      const items = await Promise.all(
        e.items
          .filter(
            (item) => item.kind === "text" && item.types.has("text/plain")
          )
          // @ts-expect-error
          .map((item: TextDropItem) => item.getText("text/plain"))
      );
      const columnKey = items[0];

      props.onDrop?.(columnKey);
    },
  });

  const arrowIcon =
    state.sortDescriptor?.direction === "ascending"
      ? "arrow_drop_down"
      : "arrow_drop_up";

  const renderProps = useRenderProps({
    componentClassName: "aje-table__column",
    className,
    style: column.props.style,
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
