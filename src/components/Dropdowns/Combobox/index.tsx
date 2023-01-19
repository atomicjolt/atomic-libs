import React, { useState } from "react";
import cn from "classnames";
import { useIds, useVariant } from "../../../hooks";
import InputError from "../../Utility/InputError";
import { makeEventHandler } from "../../../utils";
import Popover from "../../Utility/Popover";

import { VariantRecord } from "../../../types";
import DefaultCombobox from "./variants/DefaultCombobox";
import FloatingCombobox from "./variants/FloatingCombobox";
import { strategies } from "../../../filter";

import {
  ComboboxProps,
  ComboboxVariantProps,
  Variants,
} from "./Combobox.types";
import {
  DropdownInput,
  DropdownMenu,
  DropdownOption,
  DropdownInputWrapper,
  Wrapper,
} from "../Dropdowns.styles";

const variants: VariantRecord<Variants, ComboboxVariantProps> = {
  default: DefaultCombobox,
  floating: FloatingCombobox,
};

/** A combobox is a combination of a select, with a searchable text field. */
export default function Combobox(props: ComboboxProps) {
  const [menuActive, setMenuActive] = useState(false);

  const [labelId, comobId, inputId, listBoxId, errorId] = useIds(`Combobox`, [
    "label",
    "combo",
    "input",
    "listbox",
    "error",
  ]);

  const {
    options,
    value = "",
    onChange,
    size = "medium",
    label,
    error,
    message,
    hideLabel = false,
    filterStrategy = strategies.defaultStrategy,
    onFocus,
    onBlur,
    variant = "default",
    className,
    ...inputProps
  } = props;

  const { disabled, required } = inputProps;

  const [Variant, variantClassName] = useVariant(
    variants,
    "aje-dropdown",
    variant
  );

  return (
    <Wrapper
      className={cn(variantClassName, className)}
      size={size}
      disabled={disabled}
      required={required}
      error={error}
    >
      <Variant
        message={message}
        label={label}
        hideLabel={hideLabel}
        inputId={inputId}
      >
        <DropdownInputWrapper
          className="aje-combobox__input is-searchable"
          aria-owns={listBoxId}
          aria-expanded={menuActive}
          aria-haspopup="listbox"
          id={comobId}
          role="combobox"
        >
          <DropdownInput
            type="text"
            aria-autocomplete="both"
            aria-controls={listBoxId}
            aria-labelledby={labelId}
            aria-describedby={error ? errorId : ""}
            id={inputId}
            value={value}
            onChange={makeEventHandler(onChange)}
            onFocus={(e) => {
              setMenuActive(true);
              onFocus && onFocus(e);
            }}
            onBlur={(e) => {
              setMenuActive(false);
              onBlur && onBlur(e);
            }}
            {...inputProps}
          />
        </DropdownInputWrapper>
        <Popover show={menuActive} size="full">
          <DropdownMenu
            className="aje-combobox__menu"
            role="listbox"
            id={listBoxId}
            aria-labelledby={labelId}
          >
            {filterStrategy.filter(value, options).map((o) => (
              <DropdownOption
                className={cn("aje-combobox__option", {
                  "is-focused": o === value,
                })}
                // @ts-ignore
                onMouseDown={(e) => onChange && onChange(o, e)}
                role="option"
                id={String(o)}
                key={String(o)}
                tabIndex={0}
              >
                {o}
              </DropdownOption>
            ))}
          </DropdownMenu>
        </Popover>
      </Variant>
      <InputError error={error} id={errorId} />
    </Wrapper>
  );
}
