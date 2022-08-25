import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import cn from "classnames";
import Label from "../../Utility/Label";
import { useBool, useClickOutside, useIds } from "../../../hooks";
import { EventHandler, SharedInputProps } from "../../../types";
import InputError from "../../Utility/InputError";

export interface CustomDropdownProps<T>
  extends Omit<SharedInputProps, "placehodler"> {
  value: T | null;
  onChange: EventHandler<T, React.MouseEvent<Element>>;
  children: React.ReactElement | React.ReactElement[];
}

interface CustomSelectContext<T> {
  currentValue: T | null;
  onClick: (value: T, event: React.MouseEvent<Element>) => void;
}

const Context = React.createContext<CustomSelectContext<any>>(
  {} as CustomSelectContext<any>
);

/**
 * Custom Select
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 *
 * */
function CustomDropdown<T>({
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
  const [inputId, listBoxId, errorId, labelId] = useIds("custom-dropdown", [
    "combo",
    "list",
    "errors",
    "label",
  ]);

  const selectedChild = useMemo(() => {
    const childArray = React.Children.toArray(children) as React.ReactElement[];
    childArray.forEach((c) => {
      if (c.type !== CustomDropdown.Option && c.type !== CustomDropdown.Empty) {
        throw Error(
          "All children of CustomSelect must be CustomSelect.Option or CustomSelect.Empty"
        );
      }
    });
    return childArray.find((c) => c.props["value"] == value);
  }, [value]);

  console.log(selectedChild);
  useClickOutside(
    ref,
    () => {
      if (menuActive) toggleMenu();
    },
    { enabled: menuActive }
  );

  const ctx: CustomSelectContext<T> = {
    currentValue: value,
    onClick: onChange,
  };

  return (
    <div
      className={cn("aje-dropdown", `is-${size}`, {
        "has-error": error,
        "is-disabled": disabled,
      })}
    >
      <Label
        message={message}
        htmlFor={inputId}
        id={labelId}
        hidden={hideLabel}
      >
        {label}
      </Label>
      <div className="aje-combobox">
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
    </div>
  );
}

interface CustomSelectOptionProps<T> {
  value: T;
  children: React.ReactNode;
}

/** An Option in the `CustomSelect` */
function CustomSelectOption<T>({
  value,
  children,
}: CustomSelectOptionProps<T>) {
  const { currentValue, onClick } = useContext(Context);

  return (
    <li
      className={cn("aje-combobox__option", {
        "is-focused": value == currentValue,
      })}
      role="option"
      aria-selected={value == currentValue}
      onClick={(e) => onClick(value, e)}
    >
      {children}
    </li>
  );
}

CustomDropdown.Option = CustomSelectOption;
// @ts-ignore
CustomDropdown.Option.displayName = "CustomSelect.Option";

/** A `CustomSelect.Option` item with `null` as the value */
function CustomSelectEmpty({ children }: { children?: React.ReactNode }) {
  return <CustomDropdown.Option value={null}>{children}</CustomDropdown.Option>;
}

CustomDropdown.Empty = CustomSelectEmpty;
// @ts-ignore
CustomDropdown.Empty.displayName = "CustomSelect.Empty";

export default CustomDropdown;
