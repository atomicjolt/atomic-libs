import React, { useState, useEffect, useMemo } from "react";
import cn from "classnames";
import "../../general.scss";
import "./styles.scss";
import { levenshtein, makeIds } from "../../../utils";
import InputLabel from "../../Utility/InputLabel";
import { HTMLInputValueAttribute, Sizes } from "../../../types";

export interface Props<T extends HTMLInputValueAttribute> {
  /** Uniquley identifies the combo-box on the page. Is required for accessability purposes.
   * The provided ID only needs to be unique within the subset of any combo-boxes used on the screen,
   * not of all elements
   */
  id: string;

  value: T;
  onChange: (value: HTMLInputValueAttribute) => void;

  /** The possible values.
   * - value: the actual value used, should match with `selected`
   * - title: What to display in the dropdown field
   */
  options: T[];

  /** Must include a label. Labels are always Sentence case. */
  label: string;
  /** Error text should be descriptive and explicit in meaning. */
  error?: string;
  /** For additional information (ex. date format mm/dd/yy) */
  message?: string;
  /** Only use in very specific circumstances. This hides the label from view,
   * but still allows screen readers to read the label. (A filter dropdown with
   * a clear meaning could potentially be a use case.) */
  hideLabel?: boolean;
  /** The select size should reflect the size of its content. */
  size?: Sizes;
  disabled?: boolean;
  required?: boolean;

  /** Option function to filter the suggestions for a given value. By default,
   * the suggestions are compared to the current input value by string value.
   * Tt checks if the suggestions starts with the current value OR if the
   * levenshtein distance between them is 2 or less.
   */
  filterSuggestions?: (
    value: HTMLInputValueAttribute,
    options: HTMLInputValueAttribute[]
  ) => HTMLInputValueAttribute[];
}

function defaultFilterSuggestiosn(
  value: HTMLInputValueAttribute,
  options: HTMLInputValueAttribute[]
): HTMLInputValueAttribute[] {
  const compValue = String(value);

  return options.filter((o) => {
    if (!value) return true;
    o = String(o);
    return o.startsWith(compValue) || levenshtein(o, compValue) <= 2;
  });
}

/**
 * Combobox
 * It is the combination of an input field, with a dropdown of possible suggestions
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 * */
export default function Combobox<T extends HTMLInputValueAttribute>({
  options,
  value,
  onChange,
  id,
  size = "medium",
  label,
  error,
  message,
  hideLabel = false,
  disabled = false,
  filterSuggestions = defaultFilterSuggestiosn,
}: Props<T>) {
  const [menuActive, setMenuActive] = useState(false);

  useEffect(() => {
    const closeMenu = () => {
      if (!menuActive) return;
      setMenuActive(false);
    };

    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  }, [menuActive]);

  const [labelId, comobId, inputId, listBoxId, errorId] = makeIds(
    `${id}-combo`,
    ["label", "combo", "input", "listbox", "error"]
  );

  return (
    <div
      className={cn("aj-dropdown", `is-${size}`, {
        "has-error": error,
        "is-disabled": disabled,
      })}
    >
      <InputLabel message={message} htmlFor={labelId} hidden={hideLabel}>
        {label}
      </InputLabel>
      <div className="aj-combobox">
        <div
          className="aj-combobox__input is-searchable"
          aria-owns={listBoxId}
          aria-expanded={menuActive}
          aria-haspopup="listbox"
          id={comobId}
          role="combobox"
          onClick={() => setMenuActive(!menuActive)}
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
              onClick={() => onChange(o)}
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
      {error && (
        <p id={errorId} className="aj-label--error">
          {error}
        </p>
      )}
    </div>
  );
}
