import React from "react";
import cn from "classnames";

import { useIds } from "../../../hooks";
import {
  EventHandler,
  InputComponentProps,
  InputElementProps,
} from "../../../types";
import InputError from "../../Utility/InputError";
import { makeEventHandler } from "../../../utils";
import { ComponentWrapper } from "../../../styles/utils";
import {
  FileInputLabel,
  FileInputSpan,
  FileInputStrong,
  StyledFileInput,
} from "./FileInput.styles";

export interface FileInputProps
  extends Omit<InputComponentProps, "size" | "hideLabel" | "message">,
    InputElementProps<HTMLInputElement> {
  file?: File | null;
  onChange?: EventHandler<File | null, React.ChangeEvent<HTMLInputElement>>;
}

/** FileInput component. Used to select singular files */
const FileInput = React.forwardRef<HTMLInputElement, FileInputProps>(
  (props, ref) => {
    const [inputId, errorId] = useIds("FileInput", ["input", "error"]);

    const {
      file,
      onChange,
      label,
      error,
      disabled = false,
      required = false,
      className,
      ...inputProps
    } = props;

    return (
      <ComponentWrapper
        className={cn("aje-input--file", className)}
        disabled={disabled}
        required={required}
      >
        <StyledFileInput
          id={inputId}
          ref={ref}
          aria-describedby={error ? errorId : ""}
          type="file"
          disabled={disabled}
          required={required}
          onChange={makeEventHandler(onChange, (e) =>
            e.target.files ? e.target.files[0] : null
          )}
          {...inputProps}
        />
        <FileInputLabel htmlFor={inputId}>
          <FileInputSpan>{file?.name}</FileInputSpan>
          <FileInputStrong>{label}</FileInputStrong>
        </FileInputLabel>
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);

export default FileInput;
