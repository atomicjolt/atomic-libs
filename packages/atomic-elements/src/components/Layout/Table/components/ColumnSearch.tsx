import React, { ChangeEvent, forwardRef } from "react";
import { GridNode } from "@react-types/grid";

import { IconButton } from "@components/Buttons/IconButton";
import { SearchInput, SearchComboInput } from "../Table.styles";
import { TableState, TreeGridState } from "../Table.types";

interface ColumnSearchProps<T> {
  column: GridNode<T>;
  state: TableState<T> | TreeGridState<T>;
  isSearching?: boolean;
}

export const ColumnSearch = forwardRef(function ColumnSearch<T>(
  props: ColumnSearchProps<T>,
  ref: React.ForwardedRef<HTMLInputElement> | null
) {
  const { column, state, isSearching } = props;

  const { title } = column.props || {};

  return (
    <>
      <SearchComboInput aria-expanded={isSearching}>
        <SearchInput
          role="search"
          aria-label={`Search ${title || column.key}`}
          value={state.search.text}
          onFocus={() => state.setKeyboardNavigationDisabled?.(true)}
          onBlur={() => state.setKeyboardNavigationDisabled?.(false)}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            state.search.set(column.key, e.target.value);
          }}
          onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) =>
            // Table listens for keydown events for things
            // like flipping to sorting when pressing the spacebar
            // so we need to stop propagation to prevent that
            // when the input is focused
            e.stopPropagation()
          }
          onKeyUp={(e) => {
            if (e.key === "Escape") {
              state.search.clear();
            }
          }}
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
            state.search.clear();
          }}
        />
      </SearchComboInput>

      {!isSearching && (
        <IconButton
          icon="search"
          variant="content"
          size="small"
          onPress={() => {
            state.search.set(column.key, "");

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
