import React, { useState, useEffect, useMemo } from "react";
import cn from "classnames";
import "../../general.scss";
import "./styles.scss";
import { levenshtein, makeIds } from "../../../utils";

export interface Props<T> {
  /** The possible values.
   * - value: the actual value used, should match with `selected`
   * - title: What to display in the dropdown field
   */
  options: {
    value: T;
    title: string;
  }[];
  selected: T | null;
  onSelect: (value: T | null) => void;
  /** Uniquley identifies the combo-box on the page. Is required for accessability purposes.
   * The provided ID only needs to be unique within the subset of any combo-boxes used on the screen,
   * not of all elements
   */
  id: string;
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
  size?: "small" | "medium" | "large" | "full" | "auto";
  disabled?: boolean;
  required?: boolean;
}

/**
 * Combobox
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 * */
export default function Combobox<T>({
  options,
  selected,
  onSelect,
  id,
  size = "medium",
  label,
  error,
  message,
  hideLabel = false,
  disabled = false,
}: Props<T>) {
  const errorID = "errorText";
  const [menuActive, setMenuActive] = useState(false);
  const [inputValue, setInputValue] = useState<string>("");

  const selectedData = useMemo(
    () => options.find((o) => o.value == selected),
    [selected]
  );

  useEffect(() => {
    selectedData && setInputValue(selectedData.title);
  }, [selected]);

  useEffect(() => {
    const closeMenu = () => {
      if (!menuActive) return;
      setMenuActive(false);
    };

    if (selectedData && inputValue !== selectedData.title) {
      if (inputValue === "") {
        onSelect(null);
      } else {
        setInputValue(selectedData.title);
      }
    }

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
      <label
        className={cn("aj-label", { "aj-hidden": hideLabel })}
        id={labelId}
      >
        {label}
        {message && <p className="aj-label--message">{message}</p>}
      </label>
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
            aria-describedby={error ? errorID : ""}
            id={inputId}
            value={inputValue || ""}
            onChange={(e) => setInputValue(e.target.value)}
          />
        </div>
        <ul
          className="aj-combobox__menu"
          role="listbox"
          id={listBoxId}
          aria-labelledby={labelId}
        >
          {options
            .filter(
              (o) =>
                o.title.startsWith(inputValue) ||
                levenshtein(o.title, inputValue) <= 2
            )
            .map((o) => (
              <li
                className={cn("aj-combobox__option", {
                  "is-focused": o.value === selected,
                })}
                onClick={() => onSelect(o.value)}
                role="option"
                id={String(o.value)}
                tabIndex={0}
              >
                {o.title}
              </li>
            ))}
        </ul>
      </div>
      {error && (
        <p id={errorID} className="aj-label--error">
          {error}
        </p>
      )}
    </div>
  );
}
