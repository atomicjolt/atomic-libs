import React, { useState, useEffect, useMemo } from "react";
import cn from "classnames";
import "../../general.scss";
import "./styles.scss";
import InputLabel from "../../shared/InputLabel";
import { useBool, useClick, useIds } from "../../../hooks";
import { Setter, SharedInputProps } from "../../../types";

interface OptionsObject<T> {
  value: T;
  label: React.ReactNode;
}

export interface CommonProps<T> {
  /** An array of possbile options to select from*/
  options: OptionsObject<T>[];
}

type NullProps<T> =
  | {
      /** The currently selected value. Should be one of the values in the `options` object */
      selected: T | null;
      onSelect: Setter<T | null>;
      /** Enables a null-valued selection item. */
      empty?: true;
      /** Label for the null-valued item */
      emptyLabel?: React.ReactNode;
    }
  | {
      selected: T;
      onSelect: (v: T) => void;
      empty?: false;
      emptyLabel?: never;
    };

export type Props<T> = CommonProps<T> & NullProps<T> & SharedInputProps;

/**
 * Custom Dropdown
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 * */
export default function CustomDropdown<T>({
  options: initialOptions,
  selected,
  onSelect,
  size = "medium",
  label,
  error,
  message,
  hideLabel = false,
  disabled = false,
  empty = false,
  emptyLabel = null,
}: Props<T>) {
  const [menuActive, toggleMenu] = useBool(false);

  const options = useMemo(() => {
    if (empty) {
      return [{ value: null, label: emptyLabel }, ...initialOptions];
    }
    return initialOptions;
  }, [initialOptions, empty, emptyLabel]);

  const selectedOption = useMemo(
    () => options.find((o) => o.value === selected),
    [selected]
  );

  const [comboId, listBoxId, errorId, labelId, optionId] = useIds(
    "custom-dropdown",
    ["combo", "list", "errors", "label", "option"]
  );

  useClick(() => {
    if (!menuActive) return;
    toggleMenu();
  }, [menuActive]);

  return (
    <div
      className={cn("aj-dropdown", `is-${size}`, {
        "has-error": error,
        "is-disabled": disabled,
      })}
    >
      <InputLabel
        message={message}
        htmlFor={comboId}
        id={labelId}
        hidden={hideLabel}
      >
        {label}
      </InputLabel>
      <div className="aj-combobox">
        <div
          className="aj-combobox__input"
          aria-controls={listBoxId}
          aria-expanded={menuActive}
          aria-haspopup="listbox"
          aria-labelledby={labelId}
          aria-describedby={error ? errorId : ""}
          id={comboId}
          role="combobox"
          tabIndex={0}
          onClick={toggleMenu}
        >
          <span>{selectedOption?.label}</span>
        </div>
        <ul
          className="aj-combobox__menu"
          role="listbox"
          id={listBoxId}
          aria-labelledby={labelId}
          tabIndex={-1}
        >
          {options.map((o, idx) => (
            <li
              className={cn("aj-combobox__option", {
                "is-focused": o.value == selectedOption?.value,
              })}
              role="option"
              id={`${optionId}-${idx}`}
              key={`${optionId}-${idx}`}
              aria-selected={o.value == selectedOption?.value}
              onClick={() => onSelect(o.value!)}
            >
              {o.label}
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
