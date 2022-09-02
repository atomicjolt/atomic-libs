import cn from "classnames";
import React from "react";
import { useIds } from "../../../hooks";
import { ControlledInput, SharedInputProps } from "../../../types";
import { makeEventHandler } from "../../../utils";
import InputError from "../../Utility/InputError";
import Label from "../../Utility/Label";

export interface TextAreaProps
  extends Omit<SharedInputProps, "size">,
    ControlledInput<string, HTMLTextAreaElement> {
  size?: "small" | "medium" | "large";
  resize?: boolean;
}

/** Textarea Component. Accepts a `ref` */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      value,
      onChange,
      size = "small",
      resize = true,
      label,
      error,
      message,
      placeholder,
      readonly = false,
      disabled = false,
      required = false,
      hideLabel = false,
    },
    ref
  ) => {
    const [inputId, errorId] = useIds("textarea", ["textarea", "error"]);

    return (
      <div
        className={cn("aje-input", `is-${size}`, {
          "can-resize": resize,
          "has-error": error,
          "is-disabled": disabled,
        })}
      >
        <Label message={message} hidden={hideLabel} htmlFor={inputId}>
          {label}
        </Label>
        <textarea
          id={inputId}
          ref={ref}
          aria-describedby={error ? errorId : ""}
          placeholder={placeholder}
          value={value}
          readOnly={readonly}
          disabled={disabled}
          required={required}
          onChange={onChange && makeEventHandler(onChange)}
        />
        <InputError error={error} id={errorId} />
      </div>
    );
  }
);

export default Textarea;
