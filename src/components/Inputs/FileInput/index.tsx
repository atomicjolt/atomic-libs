import React from "react";
import cn from "classnames";

import { useIds } from "../../../hooks";
import {
  EventHandler,
  InputComponentProps,
  InputElementProps,
} from "../../../types";
import InputError from "../../Utility/InputError";
import ComponentWrapper from "../../Utility/ComponentWrapper";
import { makeEventHandler } from "../../../utils";

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
        className={["aje-input--file", className]}
        disabled={disabled}
        required={required}
      >
        <input
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
