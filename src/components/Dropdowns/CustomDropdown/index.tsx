import React from "react";
import { HasVariant, VariantRecord } from "../../../types";
import DefaultCustomDropdown from "./variants/DefaultCustomDropdown";
import FloatingCustomDropdown from "./variants/FloatingCustomDropdown";
import { CustomDropdownProps as SharedDropdownProps } from "./CustomDropdown.types";

type TextInputVariants = "default" | "floating";

const variants: VariantRecord<TextInputVariants, SharedDropdownProps<any>> = {
  default: DefaultCustomDropdown,
  floating: FloatingCustomDropdown,
};

export type CustomDropdownProps<T> = SharedDropdownProps<T> &
  HasVariant<TextInputVariants>;

/** CustomDropdown component */
export default function CustomDropdown<T>({
  variant = "default",
  ...rest
}: CustomDropdownProps<T>) {
  const Component = variants[variant];

  return <Component {...rest} />;
}
