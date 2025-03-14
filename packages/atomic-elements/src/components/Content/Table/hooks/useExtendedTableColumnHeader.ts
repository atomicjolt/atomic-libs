import { FocusableElement } from "@react-types/shared";
import {
  AriaTableColumnHeaderProps,
  TableColumnHeaderAria,
  useTableColumnHeader,
} from "@react-aria/table";
import { RefObject } from "react";
import { TableState } from "../Table.types";
import { useTableSearchInput } from './useTableSearchInput';

interface TableColumnHeaderProps<T> extends AriaTableColumnHeaderProps<T> {
  isSearching?: boolean;
}

interface TableColumnHeader extends TableColumnHeaderAria {
}

export function useExtendedTableColumnHeader<T>(
  props: TableColumnHeaderProps<T>,
  state: TableState<T>,
  ref: RefObject<FocusableElement | null>,
  searchInputRef: RefObject<HTMLInputElement | null>
): TableColumnHeader {
  const tableColumnHeader = useTableColumnHeader(props, state, ref);

  const { isSearching, node: column} = props;

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
  };
}
