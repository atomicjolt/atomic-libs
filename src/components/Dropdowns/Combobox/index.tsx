import React, { useRef } from "react";
import { AriaComboBoxProps, useComboBox, useFilter } from "react-aria";
import { useComboBoxState } from "react-stately";
import { IconButton, Label, Popover, UnmanagedListBox } from "../..";
import { AriaProps, FieldBaseProps, HasIcon } from "../../../types";
import {
  ComboboxInput,
  ComboboxInputWrapper,
  ComboboxWrapper,
} from "./Combobox.styles";
import classNames from "classnames";
import { FieldError } from "../../../styles/utils";

interface ComboBoxProps<T>
  extends AriaProps<AriaComboBoxProps<T>>,
    FieldBaseProps,
    HasIcon {}

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

  return (
    <ComboboxWrapper
      className={classNames("aje-combobox", className, {
        "read-only": isReadOnly,
      })}
      size={size}
      disabled={isDisabled}
      required={isRequired}
      error={isInvalid}
    >
      <Label {...labelProps} message={message} messageProps={descriptionProps}>
        {label}
      </Label>
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
      {error && <FieldError>{error}</FieldError>}
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
