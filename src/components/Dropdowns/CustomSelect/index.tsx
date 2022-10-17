import React, { useMemo, useRef, useState } from "react";
import cn from "classnames";

import FloatingCustomSelect from "./variants/FloatingCustomSelect";
import DefaultCustomSelect from "./variants/DefaultCustomSelect";
import { useIds, useVariant } from "../../../hooks";
import { VariantRecord } from "../../../types";
import ComponentWrapper from "../../Utility/ComponentWrapper";
import InputError from "../../Utility/InputError";
import {
  CustomSelectProps,
  CustomSelectVariantProps,
  CustomSelectVariants,
} from "./CustomSelect.types";
import Popover from "../../Utility/Popover";
import useSelect from "./useSelect";
import MaterialIcon from "../../Utility/MaterialIcon";
import { handleUndefined } from "../../../utils";
import { defaultStrategy } from "../../../filter";

const variants: VariantRecord<
  CustomSelectVariants,
  CustomSelectVariantProps<any>
> = {
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
 * The CustomSelect supports multiple selection. If you want single selection, pass a single value in for `value`
 * If you want multi-select, pass in an array of values.
 * */
export default function CustomSelect<T extends {} | Array<any>>(
  props: CustomSelectProps<T>
) {
  const {
    size = "medium",
    label,
    error,
    message,
    hideLabel = false,
    disabled = false,
    variant = "default",
    required,
    searchable = false,
    placeholder = "",
    searchPlaceholder,
    className,
    filterStrategy = defaultStrategy,
  } = props;

  const [inputId, listBoxId, errorId, labelId] = useIds("CustomSelect", [
    "combo",
    "list",
    "errors",
    "label",
  ]);

  const [Variant, variantClassName] = useVariant(
    variants,
    "aje-dropdown",
    variant
  );

  const {
    selectedOption,
    multiselect,
    menu,
    handleKeyPress,
    isFocused,
    isSelected,
    onChange,
    options,
    ref,
    search,
  } = useSelect({
    value: handleUndefined(props.value),
    children: props.children,
    onChange: props.onChange,
    searchable,
    filterStrategy,
  });

  return (
    <ComponentWrapper
      className={cn(variantClassName, className)}
      size={size}
      error={error}
      disabled={disabled}
      required={required}
      ref={ref}
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
          aria-expanded={menu.opened}
          aria-haspopup="listbox"
          aria-labelledby={labelId}
          aria-describedby={error ? errorId : ""}
          id={inputId}
          role="combobox"
          tabIndex={0}
          onClick={menu.toggle}
          onKeyDown={handleKeyPress}
        >
          <span>
            {multiselect
              ? placeholder
              : selectedOption?.children || placeholder}
          </span>
        </div>
        <Popover show={menu.opened} size="full">
          <ul
            className={cn("aje-combobox__menu", {
              "is-multiselect": multiselect,
            })}
            role="listbox"
            id={listBoxId}
            aria-labelledby={labelId}
            tabIndex={-1}
          >
            {searchable && (
              <li className="aje-combobox__search">
                <input
                  type="text"
                  {...search}
                  placeholder={searchPlaceholder}
                />
                <MaterialIcon icon="search" />
              </li>
            )}
            {options.map(({ value: optionValue, children }) => (
              <li
                className={cn("aje-combobox__option", {
                  "is-selected": isSelected(optionValue),
                  "is-focused": isFocused(optionValue),
                })}
                role="option"
                aria-selected={isSelected(optionValue)}
                onClick={(e) => onChange(optionValue, e)}
                key={String(optionValue)}
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
