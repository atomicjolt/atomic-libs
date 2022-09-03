import React from "react";
import { HasVariant, VariantRecord } from "../../../types";
import { SharedComboboxProps } from "./Combobox.types";
import DefaultCombobox from "./variants/DefaultCombobox";
import FloatingCombobox from "./variants/FloatingCombobox";

type ComboboxVariants = "default" | "floating";

const variants: VariantRecord<
  ComboboxVariants,
  SharedComboboxProps & React.RefAttributes<HTMLInputElement>
> = {
  default: DefaultCombobox,
  floating: FloatingCombobox,
};

export type ComboboxProps = SharedComboboxProps & HasVariant<ComboboxVariants>;

/**
 * Combobox
 * It is the combination of an input field, with a dropdown of possible suggestions
 *
 * https://www.w3.org/TR/wai-aria-practices/examples/combobox/combobox-select-only.html for accessibility implementation.
 * */
const Combobox = React.forwardRef(
  (
    { variant = "default", ...rest }: ComboboxProps,
    ref: React.Ref<HTMLInputElement>
  ) => {
    const Component = variants[variant];

    return <Component {...rest} ref={ref} />;
  }
);

export default Combobox;
