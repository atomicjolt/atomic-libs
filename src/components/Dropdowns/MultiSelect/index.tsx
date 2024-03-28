import React, { useRef } from "react";
import {
  AriaProps,
  ExtendedSize,
  FieldBaseProps,
  HasVariant,
} from "../../../types";
import { useMultiSelectState } from "./useMultiSelectState";
import { AriaMultiSelectProps } from "./MutliSelect.types";
import { useMultiSelect } from "./useMultiSelect";
import { DropdownWrapper } from "../Dropdowns.styles";
import { useVariantClass } from "../../../hooks";
import { FieldWrapper } from "../../Atoms/FieldWrapper";
import Button from "../../Buttons/Button";
import { ButtonText } from "../CustomSelect/CustomSelect.styles";
import MaterialIcon from "../../Icons/MaterialIcon";
import { Popover } from "../../Atoms/Popover";
import classNames from "classnames";
import { UnmanagedListBox } from "../../Atoms/ListBox";

export interface MultiSelectProps<T extends object>
  extends AriaProps<AriaMultiSelectProps<T>>,
    Omit<FieldBaseProps, "isReadOnly">,
    HasVariant<"default" | "floating"> {
  /** The size of the menu. Defaults to `size` if not provided.
   * If the content of the dropdown is likely to be large,
   * you should set this to `auto` so it sizes to the length of the content */
  menuSize?: ExtendedSize;

  /** Allows the items in the select to be filtered */
  isSearchable?: boolean;

  /** The placeholder text for the search input*/
  searchPlaceholder?: string;

  /** The placeholder text for the select when the user has made a selection. Defaults to `placeholder` if one isn't provided */
  selectionPlaceholder?: string;
}

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
    hideLabel,
    error,
    message,
    isInvalid,
    isDisabled,
    isRequired,
    isSearchable,
    searchPlaceholder,
    size = "medium",
    menuSize = size,
    placeholder = "Select an option",
    selectionPlaceholder = placeholder,
    variant = "default",
  } = props;

  const variantClassName = useVariantClass("aje-dropdown", variant);

  return (
    <DropdownWrapper
      className={classNames("aje-dropdown", variantClassName, className, {
        "has-selection": state.selectionManager.selectedKeys.size > 0,
      })}
      error={isInvalid}
      disabled={isDisabled}
      required={isRequired}
      size={size}
    >
      <FieldWrapper
        label={label}
        labelProps={labelProps}
        message={message}
        messageProps={descriptionProps}
        error={error}
        errorProps={errorMessageProps}
        hideLabel={hideLabel}
        floating={variant === "floating"}
      >
        <Button
          {...triggerProps}
          ref={ref}
          variant="dropdown"
          size={size}
          isDisabled={isDisabled}
        >
          <ButtonText {...valueProps}>
            {state.selectionManager.selectedKeys.size > 0
              ? selectionPlaceholder
              : placeholder}
          </ButtonText>
          <MaterialIcon icon="arrow_drop_down" />
        </Button>
      </FieldWrapper>
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          {/* @ts-ignore */}
          <UnmanagedListBox
            {...menuProps}
            state={state}
            size={menuSize}
            isSearchable={isSearchable}
            searchPlaceholder={searchPlaceholder}
            showCheckmark
          />
        </Popover>
      )}
    </DropdownWrapper>
  );
}
