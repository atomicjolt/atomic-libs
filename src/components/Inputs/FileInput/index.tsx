import React, { ChangeEvent } from "react";
import cn from "classnames";

import { useIds } from "../../../hooks";
import { FieldInputProps } from "../../../types";
import {
  FileInputLabel,
  FileInputSpan,
  FileInputStrong,
  StyledFileInput,
} from "./FileInput.styles";
import { FieldWrapper } from "../../Internal/FieldWrapper";
import { ErrorMessage } from "../../Internal/Field";

export interface FileInputProps
  extends Omit<FieldInputProps, "message" | "isReadOnly">,
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
      id = inputId,
      ...inputProps
    } = props;

    return (
      <FieldWrapper
        className={cn("aje-input__file", className)}
        isDisabled={isDisabled}
        isRequired={isRequired}
        isInvalid={isInvalid}
        size={size}
      >
        <StyledFileInput
          id={id}
          ref={ref}
          aria-describedby={error ? errorId : ""}
          type="file"
          disabled={isDisabled}
          required={isRequired}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files ? e.target.files[0] : null;
            onChange && onChange(file);
          }}
          {...inputProps}
        />
        <FileInputLabel htmlFor={id}>
          <FileInputSpan>{file ? file.name : placeholder}</FileInputSpan>
          <FileInputStrong>
            {label}
            {isRequired && <span aria-hidden="true"> *</span>}
          </FileInputStrong>
        </FileInputLabel>
        {isInvalid && error && (
          <ErrorMessage id={errorId}>{error}</ErrorMessage>
        )}
      </FieldWrapper>
    );
  }
);
