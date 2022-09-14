import React from "react";
import Label from "../../../Utility/Label";
import { TextInputVariantProps } from "../TextInput.types";

export default function DefaultTextInput(props: TextInputVariantProps) {
  const { message, label, inputId, children } = props;

  return (
    <>
      <div className="aje-input__container">
        {children}
        <Label className="" htmlFor={inputId}>
          {label}
        </Label>
      </div>
      {message && <p className="aje-label--message">{message}</p>}
    </>
  );
}
