import cn from "classnames";
import React from "react";
import { useIds } from "../../../hooks";
import { InputProps } from "../../../types";
import { makeEventHandler } from "../../../utils";
import ComponentWrapper from "../../Utility/ComponentWrapper";
import InputError from "../../Utility/InputError";
import Label from "../../Utility/Label";

export interface TextAreaProps
  extends Omit<InputProps<string, HTMLTextAreaElement>, "size"> {
  size?: "small" | "medium" | "large";
  resize?: boolean;
}

/** Textarea Component. Accepts a `ref` */
const Textarea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (props, ref) => {
    const [inputId, errorId] = useIds("TextArea", ["textarea", "error"]);
    const {
      value,
      onChange,
      size = "small",
      hideLabel = false,
      resize = true,
      label,
      error,
      message,
      placeholder,
      className,
      ...inputProps
    } = props;

    const { disabled, required } = inputProps;

    return (
      <ComponentWrapper
        className={["aje-input", className, { "can-resize": resize }]}
        size={size}
        disabled={disabled}
        required={required}
        error={error}
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
          onChange={makeEventHandler(onChange)}
          {...inputProps}
        />
        <InputError error={error} id={errorId} />
      </ComponentWrapper>
    );
  }
);

export default Textarea;
