import React from "react";
import Label from "../../../Utility/Label";
import { TextInputVariantProps } from "../TextInput.types";

export default function DefaultTextInput(props: TextInputVariantProps) {
  const { message, hideLabel, label, inputId, children } = props;

  return (
    <>
      <Label message={message} hidden={hideLabel} htmlFor={inputId}>
        {label}
      </Label>
      {children}
    </>
  );
}
