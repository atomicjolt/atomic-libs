import React, { useState, useEffect, useMemo } from "react";
import cn from "classnames";
import "../../general.scss";
import "./styles.scss";
import { useBool, useClick, useIds } from "../../../hooks";
import { HasChildren, SharedInputProps } from "../../../types";

export type Props = Omit<SharedInputProps, "message" | "hideLabel"> &
  HasChildren;
/**
 * Custom Dropdown
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 * */
function CustomDropdown({
  children,
  size = "medium",
  label,
  error,
  disabled = false,
}: Props) {
  const [menuActive, toggleMenu] = useBool(false);

  const [comboId, listBoxId, errorId] = useIds("custom-dropdown", [
    "combo",
    "list",
    "errors",
    "label",
    "option",
  ]);

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
      <div className="aj-combobox">
        <div
          className="aj-combobox__input"
          aria-controls={listBoxId}
          aria-expanded={menuActive}
          aria-haspopup="listbox"
          aria-describedby={error ? errorId : ""}
          id={comboId}
          role="combobox"
          tabIndex={0}
          onClick={toggleMenu}
        >
          <span>{label}</span>
        </div>
        <ul
          className="aj-combobox__menu"
          role="listbox"
          id={listBoxId}
          tabIndex={-1}
        >
          {children}
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

interface ItemProps {
  children: React.ReactNode;
  onClick: () => void;
}

function CustomDropdownItem({ children, onClick }: ItemProps) {
  return (
    <li className="aj-combobox__option" role="option" onClick={onClick}>
      {children}
    </li>
  );
}

CustomDropdownItem.displayName = "CustomDropdown.Item";
CustomDropdown.Item = CustomDropdownItem;

export default CustomDropdown;
