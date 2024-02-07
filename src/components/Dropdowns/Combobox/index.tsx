import React, { useRef } from "react";
import { AriaComboBoxProps, useComboBox, useFilter } from "react-aria";
import { useComboBoxState } from "react-stately";
import { IconButton, Popover, UnmanagedListBox } from "../..";
import {
  AriaProps,
  CanHaveIcon,
  FieldBaseProps,
  HasVariant,
} from "../../../types";
import {
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxWrapper,
} from "./Combobox.styles";
import classNames from "classnames";
import { useVariantClass } from "../../../hooks";
import { FieldWrapper } from "../../Utility/FieldWrapper";

interface ComboBoxProps<T>
  extends AriaProps<AriaComboBoxProps<T>>,
    FieldBaseProps,
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
    hideLabel,
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
    <ComboboxWrapper
      className={classNames("aje-combobox", variantClass, className, {
        "read-only": isReadOnly,
        "has-selection":
          state.selectedItem || state.isFocused || state.inputValue,
      })}
      size={size}
      disabled={isDisabled}
      required={isRequired}
      error={isInvalid}
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
        <ComboboxInputWrapper>
          <ComboboxInput ref={inputRef} {...inputProps} />
          <IconButton
            icon={icon}
            variant="content"
            iconVariant={iconVariant}
            ref={buttonRef}
            {...buttonProps}
          />
        </ComboboxInputWrapper>
      </FieldWrapper>
      {state.isOpen && (
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
      )}
    </ComboboxWrapper>
  );
}
