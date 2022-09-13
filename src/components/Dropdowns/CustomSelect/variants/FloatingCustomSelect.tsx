import React from "react";
import cn from "classnames";
import Label from "../../../Utility/Label";
import { CustomSelectVariantProps } from "../CustomSelect.types";
import Popover, { PopoverWrapper } from "../../../Utility/Popover";

export default function DefaulCustomSelect<T>(
  props: CustomSelectVariantProps<T>
) {
  const {
    ids,
    active,
    message,
    hideLabel,
    label,
    error,
    options,
    selectedOption,
    onSelect,
    toggleMenu,
  } = props;

  const [inputId, listBoxId, errorId, labelId] = ids;

  return (
    <>
      <div className="aje-combobox">
        <PopoverWrapper>
          <div
            className="aje-combobox__input"
            aria-controls={listBoxId}
            aria-expanded={active}
            aria-haspopup="listbox"
            aria-labelledby={labelId}
            aria-describedby={error ? errorId : ""}
            id={inputId}
            role="combobox"
            tabIndex={0}
            onClick={toggleMenu}
          >
            <span>{selectedOption?.children}</span>
          </div>
          <Popover show={active} size="full">
            <ul
              className="aje-combobox__menu"
              role="listbox"
              id={listBoxId}
              aria-labelledby={labelId}
              tabIndex={-1}
            >
              {options.map(({ value, children }) => (
                <li
                  className={cn("aje-combobox__option", {
                    "is-focused": value == selectedOption?.value,
                  })}
                  role="option"
                  aria-selected={value == selectedOption?.value}
                  onClick={(e) => onSelect(value, e)}
                >
                  {children}
                </li>
              ))}
            </ul>
          </Popover>
          <Label htmlFor={inputId} id={labelId} hidden={hideLabel}>
            {label}
          </Label>
        </PopoverWrapper>
      </div>
      {message && <p className="aje-label--message">{message}</p>}
    </>
  );
}
