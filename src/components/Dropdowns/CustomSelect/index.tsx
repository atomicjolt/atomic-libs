import React, { useMemo, useRef, useState } from "react";
import cn from "classnames";

import FloatingCustomSelect from "./variants/FloatingCustomSelect";
import DefaultCustomSelect from "./variants/DefaultCustomSelect";
import { useBool, useClickOutside, useIds, useVariant } from "../../../hooks";
import { VariantRecord } from "../../../types";
import ComponentWrapper from "../../Utility/ComponentWrapper";
import InputError from "../../Utility/InputError";
import {
  CustomSelectProps,
  CustomSelectVariantProps,
  Variants,
} from "./CustomSelect.types";
import { OptionProps } from "../Option";
import Popover from "../../Utility/Popover";

const variants: VariantRecord<Variants, CustomSelectVariantProps<any>> = {
  default: DefaultCustomSelect,
  floating: FloatingCustomSelect,
};

/**
 * CustomSelect
 * Intended for when you want to render custom content in the dropdown of a Select. Additionally, the values
 * for the select can be any object, not just strings or numbers.
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 *
 * */
export default function CustomSelect<T>(props: CustomSelectProps<T>) {
  const {
    value = null,
    onChange,
    size = "medium",
    label,
    error,
    message,
    hideLabel = false,
    disabled = false,
    children,
    variant = "default",
    required,
  } = props;

  const [menuActive, toggleMenu, openMenu, closeMenu] = useBool(false);
  const ref = useRef<HTMLDivElement | null>(null);
  const [inputId, listBoxId, errorId, labelId] = useIds("CustomSelect", [
    "combo",
    "list",
    "errors",
    "label",
  ]);

  const [Variant, className] = useVariant(variants, "aje-dropdown", variant);

  const options: OptionProps<T>[] = React.Children.map(
    children,
    (child) => child.props
  );

  const selectedIndex = options.findIndex((o) => o.value == value);
  const [focused, setFocused] = useState(selectedIndex || 0);

  useClickOutside(
    ref,
    () => {
      if (menuActive) {
        handleClose();
      }
    },
    { enabled: menuActive }
  );

  const handleClose = () => {
    if (focused !== selectedIndex) {
      setFocused(selectedIndex);
    }
    closeMenu();
  };

  const handleKeyPress: React.KeyboardEventHandler = (e) => {
    if (e.key === " ") {
      openMenu();
    } else if (e.key === "Escape") {
      if (menuActive) {
        handleClose();
      } else {
        ref.current?.blur();
      }
    } else if (menuActive) {
      switch (e.key) {
        case "ArrowDown":
          setFocused(Math.min(focused + 1, options.length - 1));
          break;
        case "ArrowUp":
          setFocused(Math.max(focused - 1, 0));
          break;
        case "Enter":
          onChange && onChange(options[focused].value, e);
          handleClose();
        default:
          break;
      }
    }
  };

  return (
    <ComponentWrapper
      className={className}
      size={size}
      error={error}
      disabled={disabled}
      required={required}
    >
      <Variant
        message={message}
        hideLabel={hideLabel}
        label={label}
        error={error}
        inputId={inputId}
        labelId={labelId}
      >
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
          onClick={() => {
            if (menuActive) {
              handleClose();
            } else {
              openMenu();
            }
          }}
          ref={ref}
          onKeyDown={handleKeyPress}
        >
          <span>{options[selectedIndex]?.children}</span>
        </div>
        <Popover show={menuActive} size="full">
          <ul
            className="aje-combobox__menu"
            role="listbox"
            id={listBoxId}
            aria-labelledby={labelId}
            tabIndex={-1}
          >
            {options.map(({ value, children }, idx) => (
              <li
                className={cn("aje-combobox__option", {
                  "is-focused": idx === focused,
                })}
                role="option"
                aria-selected={idx === focused}
                onClick={(e) => onChange && onChange(value, e)}
                key={String(value)}
              >
                {children}
              </li>
            ))}
          </ul>
        </Popover>
      </Variant>
      <InputError error={error} id={errorId} />
    </ComponentWrapper>
  );
}
