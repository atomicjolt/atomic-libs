import React, { useMemo, useRef } from "react";
import Label from "../../../Utility/Label";
import { useBool, useClickOutside, useIds } from "../../../../hooks";
import cn from "classnames";
import InputError from "../../../Utility/InputError";
import ComponentWrapper from "../../../Utility/ComponentWrapper";
import { CustomSelectProps, CustomSelectContext } from "../CustomSelect.types";
import { Context, useSelectedChild } from "../utils";
import Popover, { PopoverWrapper } from "../../../Utility/Popover";

/**
 * Custom Dropdown
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 *
 * */
export default function CustomSelect<T>(props: CustomSelectProps<T>) {
  const [menuActive, toggleMenu] = useBool(false);
  const ref = useRef(null);
  const [inputId, listBoxId, errorId, labelId] = useIds("CustomSelect", [
    "combo",
    "list",
    "errors",
    "label",
  ]);

  const {
    value = null,
    onChange,
    size = "medium",
    label,
    error,
    message,
    hideLabel = false,
    children,
    ...inputProps
  } = props;

  const { required, disabled } = inputProps;

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
      required={required}
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
        <PopoverWrapper>
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
          <Popover show={menuActive} size="full">
            <ul
              className="aje-combobox__menu"
              role="listbox"
              id={listBoxId}
              aria-labelledby={labelId}
              tabIndex={-1}
            >
              <Context.Provider value={ctx}>{children}</Context.Provider>
            </ul>
          </Popover>
        </PopoverWrapper>
      </div>
      <InputError error={error} id={errorId} />
    </ComponentWrapper>
  );
}
