import React, { useRef } from "react";
import { SelectProps, useSelectState } from "react-stately";
import { HiddenSelect, useSelect } from "react-aria";
import classNames from "classnames";
import {
  AriaProps,
  ExtendedSize,
  FieldBaseProps,
  HasVariant,
} from "../../../types";
import { DropdownWrapper } from "../Dropdowns.styles";
import { useVariantClass } from "../../../hooks";
import { ButtonText } from "./CustomSelect.styles";
import { FieldWrapper } from "../../Atoms/FieldWrapper";
import Button from "../../Buttons/Button";
import MaterialIcon from "../../Icons/MaterialIcon";
import { Popover } from "../../Atoms/Popover";
import { UnmanagedListBox } from "../../Atoms/ListBox";

export type CustomSelectVariants = "default" | "floating";

export interface CustomSelectProps<T extends object>
  extends AriaProps<SelectProps<T>>,
    Omit<FieldBaseProps, "isReadOnly">,
    HasVariant<CustomSelectVariants> {
  /** The size of the menu. Defaults to `auto` */
  menuSize?: ExtendedSize;

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
    hideLabel,
    error,
    message,
    isInvalid,
    isDisabled,
    isRequired,
    name,
    isSearchable,
    searchPlaceholder,
    size = "medium",
    placeholder = "Select an option",
    variant = "default",
  } = props;

  const menuSize = props.menuSize || size;

  const variantClassName = useVariantClass("aje-dropdown", variant);

  return (
    <DropdownWrapper
      className={classNames("aje-dropdown", variantClassName, className, {
        "has-selection": state.selectedItem,
      })}
      error={isInvalid}
      disabled={isDisabled}
      required={isRequired}
      size={size}
    >
      <HiddenSelect
        isDisabled={isDisabled}
        state={state}
        triggerRef={ref}
        label={label}
        name={name}
      />

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
            {state.selectedItem
              ? state.selectedItem.rendered
              : variant === "default"
              ? placeholder
              : ""}
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
          />
        </Popover>
      )}
    </DropdownWrapper>
  );
}
