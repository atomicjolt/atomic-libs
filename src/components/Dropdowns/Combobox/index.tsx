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
import { Popover } from "../../Overlays/Popover";
import { UnmanagedListBox } from "../ListBox";
import { ComboInput, Input } from "../../Fields";
import { FloatingInputWrapper } from "../../Internal/FloatingInputWrapper";
import { DropdownWrapper } from "../Dropdowns.styles";
import { OverlayTriggerStateContext } from "../../Overlays/OverlayTrigger/context";

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
  const inputWrapperRef = useRef<HTMLDivElement>(null);
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
        <ComboInput inputRef={inputRef} ref={inputWrapperRef}>
          <Input {...inputProps} size="full" ref={inputRef} />
          <IconButton
            icon={icon}
            variant="content"
            iconVariant={iconVariant}
            ref={buttonRef}
            {...buttonProps}
          />
        </ComboInput>
      </FloatingInputWrapper>
      <OverlayTriggerStateContext.Provider value={state}>
        <Popover
          // We pass the wrapper instead of the actual input here
          // so that the popover can size itself based on the wrapper
          // which visually is the entire input field
          triggerRef={inputWrapperRef}
          ref={popoverRef}
          // FIXME: isNonModal is technially correct, but it means
          // the popover will not close when clicking outside of it
          // I don't think this is the intended behavior and it doesn't happen
          // in the docs, so I'm flipping it off for now
          // isNonModal
          placement="bottom start"
        >
          <UnmanagedListBox {...listBoxProps} state={state} ref={listBoxRef} />
        </Popover>
      </OverlayTriggerStateContext.Provider>
    </DropdownWrapper>
  );
}
