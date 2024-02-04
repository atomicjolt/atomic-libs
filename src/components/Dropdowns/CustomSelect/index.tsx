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
import { Button, Label, MaterialIcon, Popover, UnmanagedListBox } from "../../";
import { Wrapper } from "../Dropdowns.styles";
import { ErrorLabel } from "../../../styles/utils";
import { useVariantClass } from "../../../hooks";
import { ButtonText } from "./CustomSelect.styles";

export type CustomSelectVariants = "default" | "floating";

interface CustomSelectProps<T extends object>
  extends AriaProps<SelectProps<T>>,
    Omit<FieldBaseProps, "isReadOnly">,
    HasVariant<CustomSelectVariants> {
  /** The size of the menu. Defaults to `auto` */
  menuSize?: ExtendedSize;
}

/** A custom version of the builtin `select` component to allow for consistent styling */
export function CustomSelect<T extends object>(props: CustomSelectProps<T>) {
  const state = useSelectState<T>(props);
  const ref = useRef(null);
  const { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );

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
    size = "medium",
    menuSize = "auto",
    placeholder = "Select an option",
    variant = "default",
  } = props;

  const variantClassName = useVariantClass("aje-dropdown", variant);

  return (
    <Wrapper
      className={classNames(variantClassName, className, {
        "has-selection": state.selectedItem,
      })}
      error={isInvalid}
      disabled={isDisabled}
      required={isRequired}
      size={size}
    >
      <Label {...labelProps} message={message} hidden={hideLabel}>
        {label}
      </Label>
      <HiddenSelect
        isDisabled={isDisabled}
        state={state}
        triggerRef={ref}
        label={label}
        name={name}
      />
      <Button
        {...triggerProps}
        ref={ref}
        variant="border"
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
      {error && <ErrorLabel>{error}</ErrorLabel>}
      {state.isOpen && (
        <Popover state={state} triggerRef={ref} placement="bottom start">
          {/* @ts-ignore */}
          <UnmanagedListBox {...menuProps} state={state} size={menuSize} />
        </Popover>
      )}
    </Wrapper>
  );
}
