import { useState } from "react";
import {
  OverlayTriggerState,
  useOverlayTriggerState,
} from "@react-stately/overlays";
import { useListState } from "@react-stately/list";
import {
  CollectionStateBase,
  FocusStrategy,
  MultipleSelection,
} from "@react-types/shared";
import { MultiSelectProps } from "./MutliSelect.types";

export interface SelectStateOptions<T>
  extends Omit<MultiSelectProps<T>, "children">,
    CollectionStateBase<T> {}

export interface MultiSelectState<T>
  extends MultipleSelection,
    OverlayTriggerState {
  /** Whether the select is currently focused. */
  readonly isFocused: boolean;

  /** Controls which item will be auto focused when the menu opens. */
  readonly focusStrategy: FocusStrategy | null;

  /** Sets whether the select is focused. */
  setFocused(isFocused: boolean): void;

  /** Opens the menu. */
  open(focusStrategy?: FocusStrategy | null): void;

  /** Toggles the menu. */
  toggle(focusStrategy?: FocusStrategy | null): void;
}

/**
 * Provides state management for a select component. Handles building a collection
 * of items from props, handles the open state for the popup menu, and manages
 * multiple selection state.
 */
export function useMultiSelectState<T extends object>(
  props: SelectStateOptions<T>
): MultiSelectState<T> {
  const triggerState = useOverlayTriggerState(props);
  const [focusStrategy, setFocusStrategy] = useState<FocusStrategy | null>(
    null
  );
  const listState = useListState({
    ...props,
    onSelectionChange: (key) => {
      props.onSelectionChange?.(key);

      triggerState.close();
    },
  });

  const [isFocused, setFocused] = useState(false);

  return {
    ...listState,
    ...triggerState,
    focusStrategy,
    open(focusStrategy: FocusStrategy | null = null) {
      // Don't open if the collection is empty.
      if (listState.collection.size !== 0) {
        setFocusStrategy(focusStrategy);
        triggerState.open();
      }
    },
    toggle(focusStrategy: FocusStrategy | null = null) {
      if (listState.collection.size !== 0) {
        setFocusStrategy(focusStrategy);
        triggerState.toggle();
      }
    },
    isFocused,
    setFocused,
  };
}
