import { FocusableElement } from "@react-types/shared";
import {
  AriaTableColumnHeaderProps,
  TableColumnHeaderAria,
  useTableColumnHeader,
} from "@react-aria/table";
import { RefObject } from "react";
import { TableState } from "../Table.types";

interface TableColumnHeaderProps<T> extends AriaTableColumnHeaderProps<T> {}

interface TableColumnHeader extends TableColumnHeaderAria {
  isSearching: boolean;
}

export function useExtendedTableColumnHeader<T>(
  props: TableColumnHeaderProps<T>,
  state: TableState<T>,
  ref: RefObject<FocusableElement>,
  searchInputRef: RefObject<HTMLInputElement>
): TableColumnHeader {
  const tableColumnHeader = useTableColumnHeader(props, state, ref);

  const column = props.node;

  const allowsSearching = state.search.column === column.key;

  const isSearching = state.search.column === column.key && allowsSearching;

  if (isSearching) {
    const headerProps = tableColumnHeader.columnHeaderProps;

    // The mouse down event prevents the input from receiving focus

    const ariaOnMouseDown = headerProps.onMouseDown;

    const onMouseDown = (e: React.MouseEvent<any>) => {
      if (!isSearching || e.target !== searchInputRef.current) {
        ariaOnMouseDown?.(e);
      }
    };

    headerProps.onMouseDown = onMouseDown;

    // The pointer down event causes the column to be sorted when
    // focusing the search input

    const ariaOnPointerDown = headerProps.onPointerDown;

    const onPointerDown = (e: React.PointerEvent<any>) => {
      if (!isSearching || e.target !== searchInputRef.current) {
        ariaOnPointerDown?.(e);
      }
    };

    headerProps.onPointerDown = onPointerDown;
  }

  return {
    ...tableColumnHeader,
    columnHeaderProps: {
      ...tableColumnHeader.columnHeaderProps,
      style: {
        width: column.props.width,
      },
    },
    isSearching,
  };
}
