import { useRef } from "react";
import { AriaComboBoxProps, useComboBox } from "@react-aria/combobox";
import { useFilter } from "@react-aria/i18n";
import { useComboBoxState } from "react-stately";

import {
  AriaProps,
  CanHaveIcon,
  DropdownProps,
  FieldInputProps,
  HasVariant,
  MaterialIcons,
} from "../../../types";
import { IconButton } from "../../Buttons/IconButton";
import { Popover } from "../../Overlays/Popover";
import { UnmanagedListBox } from "../ListBox";
import { ComboInput, Input } from "../../Fields";
import { FloatingInputWrapper } from "../../Internal/FloatingInputWrapper";
import { OverlayTriggerStateContext } from "../../Overlays/OverlayTrigger/context";
import { useRenderProps } from "@hooks/useRenderProps";
import { MaterialIcon } from "@components/Icons/MaterialIcon";
import { ComboBoxWrapper } from "./Combobox.styles";

export interface ComboBoxProps<T>
  extends AriaProps<AriaComboBoxProps<T>>,
    FieldInputProps,
    CanHaveIcon,
    HasVariant<"default" | "floating">,
    DropdownProps {
  /** Optional icon to render before the input */
  prefixIcon?: MaterialIcons;
}

/** Combox combinds a text input field with a dropdown list of options for the user to select from */
export function ComboBox<T extends object>(props: ComboBoxProps<T>) {
  const {
    className,
    size = "medium",
    isDisabled,
    isReadOnly,
    isRequired,
    isInvalid,
    icon = "search",
    prefixIcon,
    iconVariant,
    label,
    message,
    error,
    variant = "default",
    maxHeight = 300,
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

  const renderProps = useRenderProps({
    componentClassName: "aje-combobox",
    className,
    size,
    variant,
    selectors: {
      "data-disabled": isDisabled,
      "data-readonly": isReadOnly,
      "data-required": isRequired,
      "data-invalid": isInvalid,
      "data-float":
        variant === "floating" &&
        (state.isFocused || !!state.inputValue || !!state.selectedKey),
    },
  });

  return (
    <ComboBoxWrapper {...renderProps}>
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
          {prefixIcon && (
            <MaterialIcon icon={prefixIcon} variant={iconVariant} />
          )}
          <Input {...inputProps} size="full" ref={inputRef} />
          <IconButton
            icon={icon}
            variant="content"
            iconVariant={iconVariant}
            ref={buttonRef}
            size="auto"
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
          variant="listbox"
          maxHeight={maxHeight}
        >
          <UnmanagedListBox {...listBoxProps} state={state} ref={listBoxRef} />
        </Popover>
      </OverlayTriggerStateContext.Provider>
    </ComboBoxWrapper>
  );
}
