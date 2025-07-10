import { TableState } from "../Table.types";
import { GridNode } from "@react-types/grid";

interface TableColumnHeaderProps<T> {
  column: GridNode<T>;
  allowsSearching: boolean;
}

export function useTableSearchInput<T>(
  props: TableColumnHeaderProps<T>,
  state: TableState<T>,
  ref: React.RefObject<HTMLInputElement | null>,
) {
  const { column, allowsSearching } = props;

  const isSearching = state.search.column === column.key && allowsSearching;

  const { title } = column.props || {};

  const searchInputProps = {
    role: "search",
    "aria-label": `Search ${title ||  column.textValue || column.key}`,
    value: state.search.text,
    onFocus: () => state.setKeyboardNavigationDisabled?.(true),
    onBlur: () => state.setKeyboardNavigationDisabled?.(false),
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
      state.search.set(column.key, e.target.value);
    },
    onKeyDown: (e: React.KeyboardEvent<HTMLInputElement>) => {
      // Table listens for keydown events for things
      // like flipping to sorting when pressing the spacebar
      // so we need to stop propagation to prevent that
      // when the input is focused
      e.stopPropagation();
    },
    onKeyUp: (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Escape") {
        state.search.clear();
      }
    },
    // Stops react-aria from focusing the input
    // when clicking on the column header
    disabled: !isSearching,
  };

  const searchOpenButtonProps = {
    onPress: () => {
      state.search.set(column.key, "");

      // @ts-ignore
      setTimeout(() => ref?.current?.focus(), 0);
    },
  };

  const searchCloseButtonProps = {
    onPress: () => {
      state.search.clear();
    },
  };

  return {
    searchInputProps,
    searchOpenButtonProps,
    searchCloseButtonProps,
    isSearching,
  };
}
