import React, { useRef } from "react";
import { AriaComboBoxProps, useComboBox, useFilter } from "react-aria";
import { useComboBoxState } from "react-stately";
import {
  AriaProps,
  CanHaveIcon,
  ExtendedSize,
  FieldInputProps,
  HasVariant,
} from "../../../types";
import classNames from "classnames";
import { useVariantClass } from "../../../hooks";
import IconButton from "../../Buttons/IconButton";
import { Popover } from "../../Internal/Popover";
import { UnmanagedListBox } from "../ListBox";
import { Input } from "../../Internal/Field";
import { FloatingInputWrapper } from "../../Internal/FloatingInputWrapper";
import { DropdownWrapper } from "../Dropdowns.styles";
import { ComboboxVirtualInput } from "./Combobox.styles";

export interface ComboBoxProps<T>
  extends AriaProps<AriaComboBoxProps<T>>,
    FieldInputProps,
    CanHaveIcon,
    HasVariant<"default" | "floating"> {
  /** The size of the combobox dropdown. Defaults to `size` if not given */
  menuSize?: ExtendedSize;
}

/** Combox combinds a text input field with a dropdown list of options for the user to select from */
export function ComboBox<T extends object>(props: ComboBoxProps<T>) {
  const {
    className,
    size = "medium",
    menuSize = size,
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    icon = "search",
    iconVariant,
    label,
    message,
    error,
    variant = "default",
  } = props;
  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({ ...props, defaultFilter: contains });

  const buttonRef = useRef<HTMLButtonElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const listBoxRef = useRef<HTMLUListElement>(null);
  const popoverRef = useRef<HTMLDivElement>(null);

  const {
    buttonProps,
    inputProps,
    listBoxProps,
    labelProps,
    descriptionProps,
    errorMessageProps,
  } = useComboBox(
    {
      ...props,
      inputRef,
      buttonRef,
      listBoxRef,
      popoverRef,
    },
    state
  );

  const variantClass = useVariantClass("aje-dropdown", variant);

  return (
    <DropdownWrapper
      className={classNames("aje-combobox", variantClass, className)}
      size={size}
      isDisabled={isDisabled}
      isRequired={isRequired}
      isInvalid={isInvalid}
      isReadOnly={isReadOnly}
      data-float={
        (variant === "floating" &&
          (state.isFocused || state.inputValue || state.selectedKey)) ||
        undefined
      }
    >
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
        <ComboboxVirtualInput inputRef={inputRef}>
          <Input {...inputProps} ref={inputRef} />
          <IconButton
            icon={icon}
            variant="content"
            iconVariant={iconVariant}
            ref={buttonRef}
            {...buttonProps}
          />
        </ComboboxVirtualInput>
      </FloatingInputWrapper>

      {state.isOpen && (
        <Popover
          state={state}
          triggerRef={inputRef}
          ref={popoverRef}
          // FIXME: isNonModal is technically correct for accessibility, but
          // when it's set the popover isn't dismissable when clicking outside
          // This does appear to be intentional on react-aria's part, but I'm
          // not sure why. Disabling for now.
          // isNonModal
          placement="bottom start"
        >
          <UnmanagedListBox
            {...listBoxProps}
            state={state}
            ref={listBoxRef}
            size={menuSize}
          />
        </Popover>
      )}
    </DropdownWrapper>
  );
}
