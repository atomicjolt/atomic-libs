import React, { useMemo, useRef } from "react";
import Label from "../../../Utility/Label";
import { useBool, useClickOutside, useIds } from "../../../../hooks";
import InputError from "../../../Utility/InputError";
import ComponentWrapper from "../../../Utility/ComponentWrapper";
import {
  CustomDropdownProps,
  CustomSelectContext,
} from "../CustomDropdown.types";
import { Context, useSelectedChild } from "../utils";

/**
 * Custom Dropdown
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 *
 * */
export default function CustomDropdown<T>({
  value,
  onChange,
  size = "medium",
  label,
  error,
  message,
  hideLabel = false,
  disabled = false,
  children,
}: CustomDropdownProps<T>) {
  const [menuActive, toggleMenu] = useBool(false);
  const ref = useRef(null);
  const [inputId, listBoxId, errorId, labelId] = useIds("CustomDropdown", [
    "combo",
    "list",
    "errors",
    "label",
  ]);

  const selectedChild = useSelectedChild(value, children);

  useClickOutside(
    ref,
    () => {
      if (menuActive) toggleMenu();
    },
    { enabled: menuActive }
  );

  const ctx: CustomSelectContext<T> = {
    currentValue: value,
    onClick: (v, e) => {
      toggleMenu();
      onChange && onChange(v, e);
    },
  };

  return (
    <ComponentWrapper
      className="aje-dropdown"
      size={size}
      error={error}
      disabled={disabled}
    >
      <Label
        message={message}
        htmlFor={inputId}
        id={labelId}
        hidden={hideLabel}
      >
        {label}
      </Label>
      <div className="aje-combobox" ref={ref}>
        <div
          className="aje-combobox__input"
          aria-controls={listBoxId}
          aria-expanded={menuActive}
          aria-haspopup="listbox"
          aria-labelledby={labelId}
          aria-describedby={error ? errorId : ""}
          id={inputId}
          role="combobox"
          tabIndex={0}
          onClick={toggleMenu}
        >
          <span>{selectedChild?.props?.children}</span>
        </div>
        <ul
          className="aje-combobox__menu"
          role="listbox"
          id={listBoxId}
          aria-labelledby={labelId}
          tabIndex={-1}
        >
          <Context.Provider value={ctx}>{children}</Context.Provider>
        </ul>
      </div>
      <InputError error={error} id={errorId} />
    </ComponentWrapper>
  );
}
