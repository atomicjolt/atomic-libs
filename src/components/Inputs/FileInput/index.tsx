import React from "react";
import cn from "classnames";

import { useIds } from "../../../hooks";
import { FieldBaseProps } from "../../../types";
import InputError from "../../Utility/InputError";
import { ComponentWrapper } from "../../../styles/utils";
import {
  FileInputLabel,
  FileInputSpan,
  FileInputStrong,
  StyledFileInput,
} from "./FileInput.styles";

export interface FileInputProps
  extends Omit<FieldBaseProps, "hideLabel" | "message" | "isReadOnly">,
    React.AriaAttributes {
  file?: File | null;
  onChange?: (f: File | null) => void;
  placeholder?: string;
}

/** FileInput component. Used to select singular files */
export const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (props, ref) => {
    const [inputId, errorId] = useIds("FileInput", ["input", "error"]);

    const {
      file,
      onChange,
      label,
      error,
      isDisabled = false,
      isRequired = false,
      isInvalid = false,
      className,
      placeholder,
      size = "medium",
      ...inputProps
    } = props;

    return (
      <ComponentWrapper
        className={cn("aje-input--file", className)}
        disabled={isDisabled}
        required={isRequired}
        error={isInvalid}
        size={size}
      >
        <StyledFileInput
          id={inputId}
          ref={ref}
          aria-describedby={error ? errorId : ""}
          type="file"
          disabled={isDisabled}
          required={isRequired}
          onChange={(e) => {
            const file = e.target.files ? e.target.files[0] : null;
            onChange && onChange(file);
          }}
          {...inputProps}
        />
        <FileInputLabel htmlFor={inputId}>
          <FileInputSpan>{file ? file.name : placeholder}</FileInputSpan>
          <FileInputStrong>
            {label}
            {isRequired && <span aria-hidden="true"> *</span>}
          </FileInputStrong>
        </FileInputLabel>
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);
