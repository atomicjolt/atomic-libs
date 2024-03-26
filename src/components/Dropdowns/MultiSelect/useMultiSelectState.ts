import { useState } from "react";
import {
  Selection,
  CollectionStateBase,
  FocusStrategy,
} from "@react-types/shared";
import {
  FormValidationState,
  useFormValidationState,
} from "@react-stately/form";
import {
  OverlayTriggerState,
  useOverlayTriggerState,
} from "@react-stately/overlays";
import { useListState, ListState } from "@react-stately/list";
import { AriaMultiSelectProps } from "./MutliSelect.types";

export interface MultiSelectStateOptions<T>
  extends Omit<AriaMultiSelectProps<T>, "children">,
    CollectionStateBase<T> {}

export interface MultiSelectState<T>
  extends OverlayTriggerState,
    ListState<T>,
    FormValidationState {
  /** Whether the select is currently focused. */
  readonly isFocused: boolean;

  /** Controls which item will be auto focused when the menu opens. */
  readonly focusStrategy: FocusStrategy | null;

  /** Sets the selected keys. */
  setSelectedKeys(keys: Selection | null): void;

  /** Sets whether the select is focused. */
  setFocused(isFocused: boolean): void;

  /** Opens the menu. */
  open(focusStrategy?: FocusStrategy | null): void;

  /** Toggles the menu. */
  toggle(focusStrategy?: FocusStrategy | null): void;

  selectionMode: "multiple";
}

/**
 * Provides state management for a select component. Handles building a collection
 * of items from props, handles the open state for the popup menu, and manages
 * multiple selection state.
 */
export function useMultiSelectState<T extends object>(
  props: MultiSelectStateOptions<T>
): MultiSelectState<T> {
  const triggerState = useOverlayTriggerState(props);
  const [focusStrategy, setFocusStrategy] = useState<FocusStrategy | null>(
    null
  );
  const listState = useListState({
    ...props,
    selectionMode: "multiple",
    onSelectionChange: (key) => {
      props.onSelectionChange?.(key);
    },
  });

  const [isFocused, setFocused] = useState(false);

  // TODO: handle this better
  const validationState = useFormValidationState({
    ...props,
    value: listState.selectionManager.selectedKeys.values().next().value,
  });

  return {
    ...listState,
    ...triggerState,
    ...validationState,
    selectionMode: "multiple",
    focusStrategy,
    setSelectedKeys(keys: Selection | null) {
      if (keys === null) {
        listState.selectionManager.clearSelection();
      } else {
        listState.selectionManager.setSelectedKeys(keys);
      }
    },
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
