import React, { useRef } from "react";
import { SelectProps, useSelectState } from "react-stately";
import { HiddenSelect, useSelect } from "react-aria";
import classNames from "classnames";
import {
  AriaProps,
  ExtendedSize,
  FieldInputProps,
  HasVariant,
} from "../../../types";
import { DropdownWrapper } from "../Dropdowns.styles";
import { useVariantClass } from "../../../hooks";
import { ButtonText } from "./CustomSelect.styles";
import { FloatingInputWrapper } from "../../Internal/FloatingInputWrapper";
import Button from "../../Buttons/Button";
import MaterialIcon from "../../Icons/MaterialIcon";
import { Popover } from "../../Internal/Popover";
import { UnmanagedListBox } from "../ListBox";

export type CustomSelectVariants = "default" | "floating";

export interface CustomSelectProps<T extends object>
  extends AriaProps<SelectProps<T>>,
    FieldInputProps,
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
  } = props;

  const menuSize = props.menuSize || size;

  const variantClassName = useVariantClass("aje-dropdown", variant);

  return (
    <DropdownWrapper
      className={classNames("aje-dropdown", variantClassName, className)}
      size={size}
      isInvalid={isInvalid}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isReadOnly={isReadOnly}
      data-float={(variant === "floating" && state.selectedKey) || undefined}
    >
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
        <Button
          {...triggerProps}
          ref={ref}
          variant="dropdown"
          size={size}
          isDisabled={isDisabled || isReadOnly}
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
      </FloatingInputWrapper>
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
