import { useRef } from "react";
import { SelectProps, useSelectState } from "react-stately";
import { HiddenSelect, useSelect } from "@react-aria/select";
import {
  AriaProps,
  DropdownProps,
  FieldInputProps,
  HasVariant,
} from "../../../types";
import { ButtonText, CustomSelectWrapper } from "./CustomSelect.styles";
import { FloatingInputWrapper } from "../../Internal/FloatingInputWrapper";
import { MaterialIcon } from "../../Icons/MaterialIcon";
import { Popover } from "../../Overlays/Popover";
import { UnmanagedListBox } from "../ListBox";
import { OverlayTriggerStateContext } from "../../Overlays/OverlayTrigger/context";
import { useRenderProps } from "@hooks/useRenderProps";
import { DropdownButton } from "../Dropdowns.styles";

export type CustomSelectVariants = "default" | "floating" | "ghost";

export interface CustomSelectProps<T extends object>
  extends AriaProps<SelectProps<T>>,
    FieldInputProps,
    HasVariant<CustomSelectVariants>,
    DropdownProps {
  /** Allows the items in the select to be filtered */
  isSearchable?: boolean;

  /** The placeholder text for the search input*/
  searchPlaceholder?: string;
}

/** A custom version of the builtin `select` component to
 * allow for consistent styling & an extended feature set */
export function CustomSelect<T extends object>(props: CustomSelectProps<T>) {
  const state = useSelectState<T>(props);
  const ref = useRef(null);
  const {
    labelProps,
    triggerProps,
    valueProps,
    menuProps,
    errorMessageProps,
    descriptionProps,
  } = useSelect(props, state, ref);

  const {
    className,
    label,
    error,
    message,
    isInvalid,
    isDisabled,
    isRequired,
    isReadOnly,
    name,
    isSearchable,
    searchPlaceholder,
    size = "medium",
    placeholder = "Select an option",
    variant = "default",
    maxHeight = 300,
  } = props;

  const renderProps = useRenderProps({
    componentClassName: "aje-select",
    className,
    size,
    variant,
    selectors: {
      "data-invalid": isInvalid,
      "data-disabled": isDisabled,
      "data-required": isRequired,
      "data-readonly": isReadOnly,
      "data-float": variant === "floating" && !!state.selectedKey,
    },
  });

  return (
    <CustomSelectWrapper {...renderProps}>
      <HiddenSelect
        isDisabled={isDisabled}
        state={state}
        triggerRef={ref}
        label={label}
        name={name}
      />

      <FloatingInputWrapper
        label={label}
        labelProps={labelProps}
        message={message}
        messageProps={descriptionProps}
        error={error}
        errorProps={errorMessageProps}
        isInvalid={isInvalid}
        floating={variant === "floating"}
      >
        <DropdownButton
          {...triggerProps}
          variant={variant === "ghost" ? "dropdown-ghost" : "dropdown"}
          ref={ref}
          size={size}
          isDisabled={isDisabled || isReadOnly}
        >
          <ButtonText {...valueProps}>
            {state.selectedItem
              ? state.selectedItem.rendered
              : variant !== "floating"
                ? placeholder
                : ""}
          </ButtonText>
          <MaterialIcon icon="arrow_drop_down" />
        </DropdownButton>
      </FloatingInputWrapper>
      <OverlayTriggerStateContext.Provider value={state}>
        <Popover
          placement="bottom start"
          triggerRef={ref}
          variant="listbox"
          maxHeight={maxHeight}
        >
          <UnmanagedListBox
            {...menuProps}
            state={state}
            isSearchable={isSearchable}
            searchPlaceholder={searchPlaceholder}
          />
        </Popover>
      </OverlayTriggerStateContext.Provider>
    </CustomSelectWrapper>
  );
}
