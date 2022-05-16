import React, { useState, useEffect } from "react";
import "../../general.scss";
import "./styles.scss";

export interface Props {
  children: React.ReactNode;
  /** Must include a label. Labels are always Sentence case. */
  label: string;
  /** Error text should be descriptive and explicit in meaning. */
  error?: string;
  /** For additional information (ex. date format mm/dd/yy) */
  message?: string;
  /** Only use in very specific circumstances. This hides the label from view, but still allows screen readers to read the label. (A filter dropdown with a clear meaning could potentially be a use case.) */
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
export default function Combobox({
  children,
  size = "medium",
  label,
  error,
  message,
  hideLabel = false,
  disabled = false,
}: Props) {
  const errorID = "errorText";
  /* Add a space before the added class rather than inside the className attr on the tag. Looks cleaner. */
  let errorClass = error ? " has-error" : "";
  let disabledClass = disabled ? " is-disabled" : "";
  let hiddenClass = hideLabel ? " aj-hidden" : "";

  const [menuActive, setMenuActive] = useState(false);

  const handleOpen = () => {
    if (menuActive) {
      setMenuActive(false);
    } else {
      setMenuActive(true);
    }
  };

  useEffect(() => {
    const closeMenu = () => {
      if (!menuActive) return;
      setMenuActive(false);
    };

    window.addEventListener("click", closeMenu);

    return () => window.removeEventListener("click", closeMenu);
  }, [menuActive]);

  return (
    <div className={`aj-dropdown is-${size}${errorClass}${disabledClass}`}>
      <label className={`aj-label${hiddenClass}`} id="comboLabel">
        {label}
        {message ? <p className="aj-label--message">{message}</p> : null}
      </label>
      <div className="aj-combobox">
        <div
          className="aj-combobox__input is-searchable"
          aria-owns="listboxID"
          aria-expanded={menuActive}
          aria-haspopup="listbox"
          id="comboID"
          role="combobox"
          onClick={handleOpen}
        >
          <input
            type="text"
            aria-autocomplete="both"
            aria-controls="listboxID"
            aria-labelledby="comboLabel"
            aria-describedby={error ? errorID : ""}
            id="comboInputID"
          />
        </div>
        <ul
          className="aj-combobox__menu"
          role="listbox"
          id="lisboxID"
          aria-labelledby="comboLabel"
        >
          <li className="aj-combobox__option is-focused" role="option" id="op1">
            Option
          </li>
          <li className="aj-combobox__option" role="option" id="op2">
            {children}
          </li>
          <li className="aj-combobox__option" role="option" id="op3">
            {children}
          </li>
        </ul>
      </div>
      {error ? (
        <p id={errorID} className="aj-label--error">
          {error}
        </p>
      ) : null}
    </div>
  );
}
