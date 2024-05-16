import React, { ChangeEvent, forwardRef, useRef } from "react";
import {
  mergeProps,
  useDrag,
  useDrop,
  useFocusRing,
  useTableColumnHeader,
  TextDropItem,
} from "react-aria";
import { TableState, Node } from "react-stately";
import {
  ColumnDragIndicator,
  DraggableTh,
  SearchInput,
  SeachComboInput,
  StyledTh,
  ThContent,
} from "../Table.styles";
import classNames from "classnames";
import MaterialIcon from "../../../Icons/MaterialIcon";
import IconButton from "../../../Buttons/IconButton";
import { ExtendedTableState } from "../hooks/useExtendedTableState";
import { useExtendedTableColumnHeader } from "../hooks/useExtendedTableColumnHeader";

interface TableColumnHeaderProps<T> {
  column: Node<T>;
  state: ExtendedTableState<T>;
}

export function TableColumnHeader<T extends object>(
  props: TableColumnHeaderProps<T>
) {
  const { column, state } = props;
  const {
    props: { allowsSearching = false, allowsSorting = false } = {},
    hasChildNodes = false,
  } = column;

  // Columns without some properties are given an undefined
  // props object which causes the table to throw an error
  column.props = column.props || {};

  // @ts-ignore
  const colspan: number = column.colspan;

  const ref = useRef(null);
  const inputRef = useRef(null);

  const { focusProps } = useFocusRing();

  const { columnHeaderProps, isSearching } = useExtendedTableColumnHeader(
    { node: column },
    state,
    ref,
    inputRef
  );

  const arrowIcon =
    state?.sortDescriptor?.direction === "ascending"
      ? "arrow_drop_up"
      : "arrow_drop_down";

  const headerProps = mergeProps(columnHeaderProps, focusProps);

  return (
    <StyledTh
      {...headerProps}
      colSpan={colspan}
      className={classNames({ "is-sortable": allowsSorting })}
      ref={ref}
    >
      <ThContent className={classNames({ "is-centered": hasChildNodes })}>
        {column.rendered}
        {allowsSorting && state.sortDescriptor?.column === column.key && (
          <MaterialIcon icon={arrowIcon} />
        )}
        {allowsSorting && state.sortDescriptor?.column !== column.key && (
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

interface DraggableTableColumnHeaderProps<T> {
  column: Node<T>;
  state: TableState<T>;
  onDrop?: (columnKey: string) => void;
}

export function DraggableTableColumnHeader<T extends object>(
  props: DraggableTableColumnHeaderProps<T>
) {
  const { column, state } = props;

  const { props: { allowsSearching = false } = {} } = column;

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

  return (
    <DraggableTh
      className={classNames({ "is-sortable": column.props.allowsSorting })}
      colSpan={colspan}
      ref={ref}
      {...mergeProps(columnHeaderProps, focusProps, dragProps, dropProps)}
    >
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
    </DraggableTh>
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
      <SeachComboInput aria-expanded={isSearching}>
        <SearchInput
          aria-label={`Search ${title || column.key}`}
          value={state.searchDescriptor?.search}
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
      </SeachComboInput>

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
