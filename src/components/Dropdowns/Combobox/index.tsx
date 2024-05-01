import React, { useRef } from "react";
import { AriaComboBoxProps, useComboBox, useFilter } from "react-aria";
import { useComboBoxState } from "react-stately";
import {
  AriaProps,
  CanHaveIcon,
  FieldInputProps,
  HasVariant,
} from "../../../types";
import classNames from "classnames";
import { useVariantClass } from "../../../hooks";
import IconButton from "../../Buttons/IconButton";
import { Popover } from "../../Overlays/Popover";
import { UnmanagedListBox } from "../ListBox";
import { Input } from "../../Internal/Field";
import { FloatingInputWrapper } from "../../Internal/FloatingInputWrapper";
import { DropdownWrapper } from "../Dropdowns.styles";
import { ComboboxVirtualInput } from "./Combobox.styles";

export interface ComboBoxProps<T>
  extends AriaProps<AriaComboBoxProps<T>>,
    FieldInputProps,
    CanHaveIcon,
    HasVariant<"default" | "floating"> {}

/** Combox combinds a text input field with a dropdown list of options for the user to select from */
export function ComboBox<T extends object>(props: ComboBoxProps<T>) {
  const {
    className,
    size = "medium",
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    icon = "arrow_drop_down",
    iconVariant,
    label,
    message,
    error,
    variant = "default",
  } = props;
  const { contains } = useFilter({ sensitivity: "base" });
  const state = useComboBoxState({ ...props, defaultFilter: contains });

  const buttonRef = useRef(null);
  const inputRef = useRef(null);
  const listBoxRef = useRef(null);
  const popoverRef = useRef(null);

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
      <Popover
        state={state}
        triggerRef={inputRef}
        ref={popoverRef}
        isNonModal
        placement="bottom start"
      >
        {/* @ts-ignore */}
        <UnmanagedListBox {...listBoxProps} state={state} ref={listBoxRef} />
      </Popover>
    </DropdownWrapper>
  );
}
