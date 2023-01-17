import React from "react";
import Label from "../../../Utility/Label";
import { DropdownWrapper } from "../../Dropdowns.styles";
import { ComboboxVariantProps } from "../Combobox.types";

// TODO: potentially share this between DefaultTextInput and here?
export default function DefaultCombobox(props: ComboboxVariantProps) {
  const { message, hideLabel, label, inputId, children } = props;

  return (
    <DropdownWrapper className="aje-combobox">
      <Label message={message} hidden={hideLabel} htmlFor={inputId}>
        {label}
      </Label>
      {children}
    </DropdownWrapper>
  );
}
