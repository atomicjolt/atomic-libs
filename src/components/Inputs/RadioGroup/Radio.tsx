import cn from "classnames";
import React, { useContext, useRef } from "react";
import { FieldMessage, FieldError } from "../../../styles/utils";
import { HasClassName, HelpTextProps } from "../../../types";
import { ChooseInput, ChooseLabel } from "../Inputs.styles";
import RadioContext from "./context";
import { RadioWrapper } from "./RadioGroup.styles";
import { AriaRadioProps, useRadio } from "react-aria";

export interface RadioProps
  extends AriaRadioProps,
    HasClassName,
    Omit<HelpTextProps, "label" | "hideLabel"> {
  readonly children: React.ReactNode;
}

/** Radio Elements, must be a descendant of a `<RadioGroup>` */
export default function Radio(props: RadioProps) {
  const { className, message, error } = props;
  const { children } = props;
  const state = useContext(RadioContext);
  const ref = useRef(null);
  const { inputProps, labelProps } = useRadio(props, state, ref);

  return (
    <RadioWrapper className={cn("aje-radio", className)} {...labelProps}>
      <ChooseInput {...inputProps} />
      <ChooseLabel className="aje-checkbox__label">
        {children}
        {message && <FieldMessage>{message}</FieldMessage>}
        {error && <FieldError>{error}</FieldError>}
      </ChooseLabel>
    </RadioWrapper>
  );
}
