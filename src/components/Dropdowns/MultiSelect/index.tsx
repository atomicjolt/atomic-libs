import { useMemo, useRef } from "react";
import {
  AriaProps,
  DropdownProps,
  FieldInputProps,
  HasVariant,
} from "../../../types";
import { useMultiSelectState } from "./useMultiSelectState";
import { AriaMultiSelectProps } from "./MutliSelect.types";
import { useMultiSelect } from "./useMultiSelect";
import { DropdownButton } from "../Dropdowns.styles";
import { FloatingInputWrapper } from "../../Internal/FloatingInputWrapper";
import { ButtonText } from "../CustomSelect/CustomSelect.styles";
import MaterialIcon from "../../Icons/MaterialIcon";
import { Popover } from "../../Overlays/Popover";
import { InternalListBox } from "../ListBox";
import { OverlayTriggerStateContext } from "@components/Overlays/OverlayTrigger/context";
import { useRenderProps } from "@hooks/useRenderProps";
import { MultiSelectWrapper } from "./MultiSelect.styles";

export interface MultiSelectProps<T extends object>
  extends AriaProps<AriaMultiSelectProps<T>>,
    FieldInputProps,
    HasVariant<"default" | "floating">,
    DropdownProps {
  /** Allows the items in the select to be filtered */
  isSearchable?: boolean;

  /** The placeholder text for the search input*/
  searchPlaceholder?: string;

  /** The placeholder text for the select when the user has made a selection. Defaults to `placeholder` if one isn't provided */
  selectionPlaceholder?: string;
}

/** MultiSelect is a dropdown that allows the user to select multiple options from a list */
export function MultiSelect<T extends object>(props: MultiSelectProps<T>) {
  const state = useMultiSelectState<T>(props);
  const ref = useRef(null);
  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    errorMessageProps,
    descriptionProps,
  } = useMultiSelect(props, state, ref);

  const {
    className,
    label,
    error,
    message,
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    isSearchable,
    searchPlaceholder,
    size = "medium",
    placeholder = "Select an option",
    selectionPlaceholder = placeholder,
    variant = "default",
    maxHeight = 300,
    dropdownPlacement = "bottom start",
  } = props;

  const buttonText = useMemo(() => {
    if (variant === "floating") {
      if (state.selectionManager.selectedKeys.size > 0) {
        return selectionPlaceholder;
      }

      return "";
    }

    if (state.selectionManager.selectedKeys.size > 0) {
      return selectionPlaceholder;
    }

    return placeholder;
  }, [
    state.selectionManager.selectedKeys.size,
    selectionPlaceholder,
    placeholder,
    variant,
  ]);

  const renderProps = useRenderProps({
    componentClassName: "aje-multiselect",
    className,
    size,
    variant,
    selectors: {
      "data-invalid": isInvalid,
      "data-disabled": isDisabled,
      "data-required": isRequired,
      "data-readonly": isReadOnly,
      "data-float":
        variant === "floating" &&
        (state.isOpen || state.selectionManager.selectedKeys.size > 0),
    },
  });

  return (
    <MultiSelectWrapper {...renderProps}>
      <FloatingInputWrapper
        label={label}
        labelProps={labelProps}
        message={message}
        messageProps={descriptionProps}
        error={error}
        isInvalid={isInvalid}
        errorProps={errorMessageProps}
        floating={variant === "floating"}
      >
        <DropdownButton
          {...triggerProps}
          ref={ref}
          variant="dropdown"
          size={size}
          isDisabled={isDisabled || isReadOnly}
        >
          <ButtonText {...valueProps}>{buttonText}</ButtonText>
          <MaterialIcon icon="arrow_drop_down" />
        </DropdownButton>
      </FloatingInputWrapper>
      <OverlayTriggerStateContext.Provider value={state}>
        <Popover
          triggerRef={ref}
          placement={dropdownPlacement}
          variant="listbox"
          maxHeight={maxHeight}
        >
          <InternalListBox
            {...menuProps}
            state={state}
            isSearchable={isSearchable}
            searchPlaceholder={searchPlaceholder}
            showCheckmark
          />
        </Popover>
      </OverlayTriggerStateContext.Provider>
    </MultiSelectWrapper>
  );
}
