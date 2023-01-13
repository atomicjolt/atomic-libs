import React from "react";
import Label from "../../../Utility/Label";
import { DropdownWrapper } from "../../common";
import { ComboboxVariantProps } from "../Combobox.types";

// TODO: potentially share this between DefaultTextInput and here?
export default function FloatingCombobox(props: ComboboxVariantProps) {
  const { message, hideLabel, label, inputId, children } = props;

  return (
    <>
      <DropdownWrapper className="aje-combobox">
        {children}
        <Label className="" hidden={hideLabel} htmlFor={inputId}>
          {label}
        </Label>
      </DropdownWrapper>
      {message && <p className="aje-label--message">{message}</p>}
    </>
  );
}
