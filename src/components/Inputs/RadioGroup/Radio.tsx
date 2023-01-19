import cn from "classnames";
import React, { useContext } from "react";
import { useIds } from "../../../hooks";
import { MessageLabel, ErrorLabel } from "../../../styles/utils";
import { HasClassName } from "../../../types";
import { ChooseInput, ChooseLabel } from "../Inputs.styles";
import RadioContext from "./context";
import { RadioWrapper } from "./RadioGroup.styles";

export interface RadioProps extends HasClassName {
  readonly value: string;
  readonly children: React.ReactNode;
  readonly disabled?: boolean;
  readonly message?: string;
  readonly error?: string;
}

/** Radio Elements, must be a descendant of a `<RadioGroup>` */
export default function Radio(props: RadioProps) {
  const { value, children, disabled, message, error, className } = props;
  const [inputId] = useIds(`radio`, ["input"]);

  const {
    currentValue,
    onChange,
    name,
    disabled: parentDisabled,
  } = useContext(RadioContext);

  return (
    <RadioWrapper
      className={cn("aje-radio", className)}
      htmlFor={inputId}
      as="label"
    >
      <ChooseInput
        id={inputId}
        type="radio"
        name={name}
        checked={value == currentValue}
        disabled={disabled || parentDisabled}
        value={value}
        onChange={onChange}
      />
      <ChooseLabel className="aje-checkbox__label">
        {children}
        {message && <MessageLabel as="p">{message}</MessageLabel>}
        {error && <ErrorLabel as="p">{error}</ErrorLabel>}
      </ChooseLabel>
    </RadioWrapper>
  );
}
