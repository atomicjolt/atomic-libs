import React, { ChangeEvent, forwardRef, useRef } from "react";
import { mergeProps, useDrag, useDrop, TextDropItem } from "react-aria";
import { Node } from "react-stately";
import {
  ColumnDragIndicator,
  SearchInput,
  SearchComboInput,
  ThContent,
  StyledTh,
} from "../../Table.styles";
import MaterialIcon from "../../../../Icons/MaterialIcon";
import IconButton from "../../../../Buttons/IconButton";
import { ExtendedTableState } from "../../hooks/useExtendedTableState";
import { useExtendedTableColumnHeader } from "../../hooks/useExtendedTableColumnHeader";
import { useFocusRing } from "@/hooks/useFocusRing";
import { useRenderProps } from "@/hooks/useRenderProps";

interface TableColumnProps<T> {
  column: Node<T>;
  state: ExtendedTableState<T>;
  onDrop?: (columnKey: string) => void;
}

export function TableColumn<T extends object>(props: TableColumnProps<T>) {
  const { column, state } = props;

  // Placeholder cells don't have props
  column.props = column.props || {};

  const {
    props: {
      allowsSearching = false,
      className,
      showDivider = false,
      allowsSorting = false,
      allowsReordering = false,
    },
  } = column;

  // @ts-ignore
  const colspan = column.colspan as number;

  const ref = useRef(null);
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
          // @ts-ignore
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
    componentClassName: "aje-table-column",
    className,
    style: column.props.style,
    selectors: {
      "data-divider": showDivider,
      "data-sortable": allowsSorting,
      "data-draggable": allowsReordering,
    },
  });

  const headerProps = [columnHeaderProps, focusProps, renderProps];

  if (column.props.allowsReordering) {
    headerProps.push(dragProps, dropProps);
  }

  return (
    <StyledTh colSpan={colspan} ref={ref} {...mergeProps(...headerProps)}>
      <ThContent>
        <ColumnDragIndicator
          style={{ visibility: isDropTarget ? "visible" : "hidden" }}
        />
        {column.rendered}
        {column.props.allowsSorting &&
          state.sortDescriptor.column === column.key && (
            <MaterialIcon icon={arrowIcon} />
          )}
        {column.props.allowsSorting &&
          state.sortDescriptor.column !== column.key && (
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
      </ThContent>
    </StyledTh>
  );
}

interface ColumnSearchProps<T> {
  column: Node<T>;
  state: ExtendedTableState<T>;
  isSearching?: boolean;
}

const ColumnSearch = forwardRef(function ColumnSearch<T>(
  props: ColumnSearchProps<T>,
  ref: React.ForwardedRef<HTMLInputElement> | null
) {
  const { column, state, isSearching } = props;

  const { title } = column.props || {};

  return (
    <>
      <SearchComboInput aria-expanded={isSearching}>
        <SearchInput
          aria-label={`Search ${title || column.key}`}
          value={state.searchDescriptor?.search}
          onFocus={() => state.setKeyboardNavigationDisabled?.(true)}
          onBlur={() => state.setKeyboardNavigationDisabled?.(false)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            state.onSearchChange?.({
              column: column.key,
              search: e.target.value,
            });
          }}
          // Table listens for keydown events for things
          // like flipping to sorting when pressing the spacebar
          // so we need to stop propagation to prevent that
          // when the input is focused
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            e.stopPropagation()
          }
          ref={ref}
          // Stops react-aria from focusing the input
          // when clicking on the column header
          disabled={!isSearching}
        />
        <IconButton
          icon="close"
          variant="content"
          size="small"
          onPress={() => {
            state.onSearchChange?.({
              column: null,
              search: "",
            });
          }}
        />
      </SearchComboInput>

      {!isSearching && (
        <IconButton
          icon="search"
          variant="content"
          size="small"
          onPress={() => {
            state.onSearchChange?.({
              column: column.key,
              search: "",
            });

            // Focus the input after the search icon is clicked
            // We have to do this in a timeout because the input
            // is disabled when the search icon is clicked

            // @ts-ignore
            setTimeout(() => ref?.current?.focus(), 0);
          }}
        />
      )}
    </>
  );
});
