import React, { useState } from "react";
import cn from "classnames";
import { useIds } from "../../../../hooks";
import Label from "../../../Utility/Label";
import InputError from "../../../Utility/InputError";
import { ComboboxProps } from "../Combobox.types";
import { defaultFilterSuggestions } from "../utils";
import { makeEventHandler } from "../../../../utils";
import ComponentWrapper from "../../../Utility/ComponentWrapper";

/** A combobox is a combination of a dropdown, with a searchable text field. */
export default function Combobox(props: ComboboxProps) {
  const [menuActive, setMenuActive] = useState(false);

  const [labelId, comobId, inputId, listBoxId, errorId] = useIds(`combo`, [
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
    ...inputProps
  } = props;

  const { disabled, required } = inputProps;

  return (
    <ComponentWrapper
      className="aje-dropdown"
      size={size}
      disabled={disabled}
      required={required}
      error={error}
    >
      <Label message={message} htmlFor={labelId} hidden={hideLabel}>
        {label}
      </Label>
      <div className="aje-combobox">
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
      </div>
      <InputError error={error} id={errorId} />
    </ComponentWrapper>
  );
}
