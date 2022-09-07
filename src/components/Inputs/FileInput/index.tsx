import React from "react";
import cn from "classnames";
import { useIds } from "../../../hooks";
import { SharedInputProps } from "../../../types";
import InputError from "../../Utility/InputError";
import ComponentWrapper from "../../Utility/ComponentWrapper";

export interface FileInputProps extends Omit<SharedInputProps, "hideLabel"> {
  file?: File | null;
  onChange?: (
    file: File | null,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
}

/** FileInput component. Used to select singular files */
const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (
    {
      file,
      onChange,
      label = "Choose a file...",
      error,
      readonly = false,
      disabled = false,
      required = false,
      size = "medium",
    },
    ref
  ) => {
    const [inputId, errorId] = useIds("FileInput", ["input", "error"]);

    return (
      <ComponentWrapper
        className="aje-input--file"
        disabled={disabled}
        required={required}
        size={size}
      >
        <input
          id={inputId}
          ref={ref}
          aria-describedby={error ? errorId : ""}
          type="file"
          readOnly={readonly}
          disabled={disabled}
          required={required}
          onChange={(e) =>
            onChange && onChange(e.target.files ? e.target.files[0] : null, e)
          }
        />
        <label htmlFor={inputId}>
          <span>{file?.name}</span>
          <strong>{label}</strong>
        </label>
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);

export default FileInput;
