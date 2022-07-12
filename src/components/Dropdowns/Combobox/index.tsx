import React, { useState } from "react";
import cn from "classnames";
import { levenshtein } from "../../../utils";
import { SharedInputProps } from "../../../types";
import { useIds } from "../../../hooks";
import Label from "../../Utility/Label";
import InputError from "../../Utility/InputError";

export interface Props extends SharedInputProps {
  value: string;
  onChange: (value: string) => void;

  /** Array of possible values to suggest to the user */
  options: string[];

  /** Optional function to override the filtering behavior. By default,
   * the suggestions are compared to the current input value by string value.
   * It checks if the suggestions starts with the current value OR if the
   * levenshtein distance between them is 2 or less.
   */
  filterSuggestions?: (value: string, options: string[]) => string[];
}

function defaultFilterSuggestiosn(value: string, options: string[]): string[] {
  const compValue = String(value);

  return options.filter((o) => {
    if (!value) return true;
    return o.startsWith(compValue) || levenshtein(o, compValue) <= 2;
  });
}

/**
 * Combobox
 * It is the combination of an input field, with a dropdown of possible suggestions
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 * */
export default function Combobox({
  options,
  value,
  onChange,
  size = "medium",
  label,
  error,
  message,
  hideLabel = false,
  disabled = false,
  filterSuggestions = defaultFilterSuggestiosn,
}: Props) {
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
      className={cn("aj-dropdown", `is-${size}`, {
        "has-error": error,
        "is-disabled": disabled,
      })}
    >
      <Label message={message} htmlFor={labelId} hidden={hideLabel}>
        {label}
      </Label>
      <div className="aj-combobox">
        <div
          className="aj-combobox__input is-searchable"
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
          className="aj-combobox__menu"
          role="listbox"
          id={listBoxId}
          aria-labelledby={labelId}
        >
          {filterSuggestions(value, options).map((o) => (
            <li
              className={cn("aj-combobox__option", {
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
      </div>
      <InputError error={error} id={errorId} />
    </div>
  );
}
