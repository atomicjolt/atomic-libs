import { AriaButtonProps } from "@react-types/button";
import { AriaListBoxOptions } from "@react-aria/listbox";
import { chain, filterDOMProps, mergeProps, useId } from "@react-aria/utils";
import {
  DOMAttributes,
  FocusableElement,
  KeyboardDelegate,
  ValidationResult,
} from "@react-types/shared";
import { FocusEvent, RefObject, useMemo } from "react";
import { ListKeyboardDelegate, useTypeSelect } from "@react-aria/selection";
import { setInteractionModality } from "@react-aria/interactions";
import { useCollator } from "@react-aria/i18n";
import { useField } from "@react-aria/label";
import { useMenuTrigger } from "@react-aria/menu";
import { MultiSelectState } from "./useMultiSelectState";
import { AriaMultiSelectProps } from "./MutliSelect.types";

export interface UseMultiSelectOptions<T>
  extends Omit<AriaMultiSelectProps<T>, "children"> {
  /**
   * An optional keyboard delegate implementation for type to select,
   * to override the default.
   */
  keyboardDelegate?: KeyboardDelegate;
}

export interface MultiSelect<T> extends ValidationResult {
  /** Props for the label element. */
  labelProps: DOMAttributes;

  /** Props for the popup trigger element. */
  triggerProps: AriaButtonProps;

  /** Props for the element representing the selected value. */
  valueProps: DOMAttributes;

  /** Props for the popup. */
  menuProps: AriaListBoxOptions<T>;

  /** Props for the select's description element, if any. */
  descriptionProps: DOMAttributes;

  /** Props for the select's error message element, if any. */
  errorMessageProps: DOMAttributes;
}

interface SelectData {
  isDisabled?: boolean;
  isRequired?: boolean;
  name?: string;
  validationBehavior?: "aria" | "native";
}

export const selectData = new WeakMap<MultiSelectState<any>, SelectData>();

/**
 * Provides the behavior and accessibility implementation for a select component.
 * A select displays a collapsible list of options and allows a user to select one of them.
 * @param props - Props for the select.
 * @param state - State for the select, as returned by `useListState`.
 */
export function useMultiSelect<T>(
  props: UseMultiSelectOptions<T>,
  state: MultiSelectState<T>,
  ref: RefObject<FocusableElement>
): MultiSelect<T> {
  const {
    keyboardDelegate,
    isDisabled,
    isRequired,
    name,
    validationBehavior = "aria",
  } = props;

  // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
  // When virtualized, the layout object will be passed in as a prop and override this.
  const collator = useCollator({ usage: "search", sensitivity: "base" });
  const delegate = useMemo(
    () =>
      keyboardDelegate ||
      new ListKeyboardDelegate(
        state.collection,
        state.disabledKeys,
        null,
        collator
      ),
    [keyboardDelegate, state.collection, state.disabledKeys, collator]
  );

  const { menuTriggerProps, menuProps } = useMenuTrigger<T>(
    {
      isDisabled,
      type: "listbox",
    },
    state,
    ref
  );

  const { typeSelectProps } = useTypeSelect({
    keyboardDelegate: delegate,
    selectionManager: state.selectionManager,
    onTypeSelect(key) {
      state.selectionManager.toggleSelection(key);
    },
  });

  const { isInvalid, validationErrors, validationDetails } =
    state.displayValidation;
  const { labelProps, fieldProps, descriptionProps, errorMessageProps } =
    useField({
      ...props,
      labelElementType: "label",
      isInvalid,
      errorMessage: props.errorMessage || validationErrors,
    });

  typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
  delete typeSelectProps.onKeyDownCapture;

  const domProps = filterDOMProps(props, { labelable: true });
  const triggerProps = mergeProps(
    typeSelectProps,
    menuTriggerProps,
    fieldProps
  );

  const valueId = useId();

  selectData.set(state, {
    isDisabled,
    isRequired,
    name,
    validationBehavior,
  });

  return {
    labelProps: {
      ...labelProps,
      onClick: () => {
        if (!props.isDisabled) {
          ref.current?.focus();

          // Show the focus ring so the user knows where focus went
          setInteractionModality("keyboard");
        }
      },
    },
    triggerProps: mergeProps(domProps, {
      ...triggerProps,
      isDisabled,
      onKeyDown: chain(triggerProps.onKeyDown, props.onKeyDown),
      onKeyUp: props.onKeyUp,
      "aria-labelledby": [
        valueId,
        triggerProps["aria-labelledby"],
        triggerProps["aria-label"] && !triggerProps["aria-labelledby"]
          ? triggerProps.id
          : null,
      ]
        .filter(Boolean)
        .join(" "),
      onFocus(e: FocusEvent) {
        if (state.isFocused) {
          return;
        }

        if (props.onFocus) {
          props.onFocus(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(true);
        }

        state.setFocused(true);
      },
      onBlur(e: FocusEvent) {
        if (state.isOpen) {
          return;
        }

        if (props.onBlur) {
          props.onBlur(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(false);
        }

        state.setFocused(false);
      },
    }),
    valueProps: {
      id: valueId,
    },
    menuProps: {
      ...menuProps,
      autoFocus: state.focusStrategy || true,
      shouldSelectOnPressUp: true,
      shouldFocusOnHover: true,
      disallowEmptySelection: true,
      linkBehavior: "selection",
      selectionMode: "multiple",
      onBlur: (e) => {
        if (e.currentTarget.contains(e.relatedTarget as Node)) {
          return;
        }

        if (props.onBlur) {
          props.onBlur(e);
        }

        if (props.onFocusChange) {
          props.onFocusChange(false);
        }

        state.setFocused(false);
      },
      "aria-labelledby": [
        fieldProps["aria-labelledby"],
        triggerProps["aria-label"] && !fieldProps["aria-labelledby"]
          ? triggerProps.id
          : null,
      ]
        .filter(Boolean)
        .join(" "),
    },
    descriptionProps,
    errorMessageProps,
    isInvalid,
    validationErrors,
    validationDetails,
  };
}
