import React from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { SharedInputProps } from "../../../types";
import InputError from "../../Utility/InputError";

export interface Props extends Omit<SharedInputProps, "hideLabel"> {
  file?: File | null;
  readonly?: boolean;
  onChange: (file: File | null, e: React.ChangeEvent<HTMLInputElement>) => void;
}

/** File Input Component */
export default function FileInput({
  file,
  onChange,
  label = "Choose a file...",
  error,
  readonly = false,
  disabled = false,
  required = false,
}: Props) {
  const [inputId, errorId] = useIds("file-input", ["input", "error"]);

  return (
    <div
      className={cn("aje-input--file", {
        "has-error": error,
        "is-disabled": disabled,
      })}
    >
      <input
        id={inputId}
        aria-describedby={error ? errorId : ""}
        type="file"
        readOnly={readonly}
        disabled={disabled}
        required={required}
        onChange={(e) => onChange(e.target.files ? e.target.files[0] : null, e)}
      />
      <label htmlFor={inputId}>
        {/* File name needs to be inserted here */}
        <span>{file?.name}</span>
        <strong>{label}</strong>
      </label>
      <InputError error={error} id={errorId} />
    </div>
  );
}
