import React, { useState } from "react";
import cn from "classnames";
import { useIds, useVariant } from "../../../hooks";
import InputError from "../../Utility/InputError";
import { makeEventHandler } from "../../../utils";
import ComponentWrapper from "../../Utility/ComponentWrapper";
import Popover from "../../Utility/Popover";
import {
  ComboboxProps,
  ComboboxVariantProps,
  Variants,
} from "./Combobox.types";
import { defaultFilterSuggestions } from "./utils";
import { VariantRecord } from "../../../types";
import DefaultCombobox from "./variants/DefaultCombobox";
import FloatingCombobox from "./variants/FloatingCombobox";

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
    filterSuggestions = defaultFilterSuggestions,
    onFocus,
    onBlur,
    variant = "default",
    ...inputProps
  } = props;

  const { disabled, required } = inputProps;

  const [Variant, className] = useVariant(variants, "aje-dropdown", variant);

  return (
    <ComponentWrapper
      className={className}
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
        <div
          className="aje-combobox__input is-searchable"
          aria-owns={listBoxId}
          aria-expanded={menuActive}
          aria-haspopup="listbox"
          id={comobId}
          role="combobox"
        >
          <input
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
        </div>
        <Popover show={menuActive} size="full">
          <ul
            className="aje-combobox__menu"
            role="listbox"
            id={listBoxId}
            aria-labelledby={labelId}
          >
            {filterSuggestions(value, options).map((o) => (
              <li
                className={cn("aje-combobox__option", {
                  "is-focused": o === value,
                })}
                // @ts-ignore
                onMouseDown={makeEventHandler(onChange)}
                role="option"
                id={String(o)}
                key={String(o)}
                tabIndex={0}
              >
                {o}
              </li>
            ))}
          </ul>
        </Popover>
      </Variant>
      <InputError error={error} id={errorId} />
    </ComponentWrapper>
  );
}
