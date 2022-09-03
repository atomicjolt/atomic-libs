import React, { useState } from "react";
import cn from "classnames";
import { useIds } from "../../../../hooks";
import Label from "../../../Utility/Label";
import InputError from "../../../Utility/InputError";
import { SharedComboboxProps } from "../Combobox.types";
import { defaultFilterSuggestions } from "../utils";

export default function FloatingCombobox({
  options,
  value,
  onChange,
  size = "medium",
  label,
  error,
  message,
  hideLabel = false,
  disabled = false,
  filterSuggestions = defaultFilterSuggestions,
}: SharedComboboxProps) {
  const [menuActive, setMenuActive] = useState(false);

  const [labelId, comobId, inputId, listBoxId, errorId] = useIds(`combo`, [
    "label",
    "combo",
    "input",
    "listbox",
    "error",
  ]);

  return (
    <div
      className={cn("aje-dropdown--floating", `is-${size}`, {
        "has-error": error,
        "is-disabled": disabled,
      })}
    >
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
            onChange={(e) => onChange(e.target.value)}
            onFocus={() => setMenuActive(true)}
            onBlur={() => setMenuActive(false)}
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
              onMouseDown={() => onChange(o)}
              role="option"
              id={String(o)}
              key={String(o)}
              tabIndex={0}
            >
              {o}
            </li>
          ))}
        </ul>
        <Label htmlFor={labelId} hidden={hideLabel}>
          {label}
        </Label>
      </div>
      {message && <p className="aje-label--message">{message}</p>}
      <InputError error={error} id={errorId} />
    </div>
  );
}
