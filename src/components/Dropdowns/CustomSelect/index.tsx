import React, { useMemo, useRef } from "react";

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

  const Variant = useVariant(variants, variant);

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
      className={
        variant === "floating" ? "aje-dropdown--floating" : "aje-dropdown"
      }
      size={size}
      error={error}
      disabled={disabled}
      required={required}
    >
      <Variant
        ids={[inputId, listBoxId, errorId, labelId]}
        active={menuActive}
        message={message}
        hideLabel={hideLabel}
        label={label}
        error={error}
        toggleMenu={toggleMenu}
        options={options}
        selectedOption={selectedOption}
        onSelect={(v, e) => onChange && onChange(v, e)}
      />
      <InputError error={error} id={errorId} />
    </ComponentWrapper>
  );
}
