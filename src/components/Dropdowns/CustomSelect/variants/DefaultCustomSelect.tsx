import React from "react";
import Label from "../../../Utility/Label";
import { CustomSelectVariantProps } from "../CustomSelect.types";

export default function DefaultCustomSelect<T>(
  props: CustomSelectVariantProps<T>
) {
  const { message, hideLabel, label, children, inputId, labelId } = props;

  return (
    <>
      <Label
        message={message}
        htmlFor={inputId}
        id={labelId}
        hidden={hideLabel}
      >
        {label}
      </Label>
      <div className="aje-combobox">{children}</div>
    </>
  );
}
