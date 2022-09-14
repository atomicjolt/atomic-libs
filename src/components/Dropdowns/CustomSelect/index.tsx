import React, { useMemo, useRef } from "react";
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
import { CustomSelectOptionProps } from "./Option";
import Popover from "../../Utility/Popover";

const variants: VariantRecord<Variants, CustomSelectVariantProps<any>> = {
  default: DefaultCustomSelect,
  floating: FloatingCustomSelect,
};

/**
 * Custom Select
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

  const [menuActive, toggleMenu] = useBool(false);
  const ref = useRef(null);
  const [inputId, listBoxId, errorId, labelId] = useIds("CustomSelect", [
    "combo",
    "list",
    "errors",
    "label",
  ]);

  const [Variant, className] = useVariant(variants, "aje-dropdown", variant);

  useClickOutside(
    ref,
    () => {
      if (menuActive) toggleMenu();
    },
    { enabled: menuActive }
  );

  const options: CustomSelectOptionProps<T>[] = React.Children.map(
    children,
    (child) => child.props
  );

  const selectedOption = options.find((o) => o.value == value);

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
          onClick={toggleMenu}
          ref={ref}
        >
          <span>{selectedOption?.children}</span>
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
                  "is-focused": value == selectedOption?.value,
                })}
                role="option"
                aria-selected={value == selectedOption?.value}
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
