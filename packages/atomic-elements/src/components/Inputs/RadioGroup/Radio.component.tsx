import React, { useContext, useRef } from "react";
import cn from "classnames";
import { AriaRadioProps, useRadio } from "@react-aria/radio";
import { useLocale } from "@react-aria/i18n";

import { HasClassName, HelpTextProps } from "../../../types";
import { HiddenInput, ChooseLabel } from "../Inputs.styles";
import RadioContext from "./context";
import { RadioWrapper } from "./RadioGroup.styles";
import { ErrorMessage, Message } from "../../Fields";

export interface RadioProps
  extends AriaRadioProps,
    HasClassName,
    Omit<HelpTextProps, "label"> {
  readonly children: React.ReactNode;
}

/** Radio Elements, must be a descendant of a `<RadioGroup>` */
export function Radio(props: RadioProps) {
  const { className, message, error, children } = props;

  const state = useContext(RadioContext);
  const ref = useRef(null);

  const { inputProps, labelProps } = useRadio(props, state, ref);
  const { direction } = useLocale();

  return (
    <RadioWrapper
      className={cn("aje-radio", className)}
      {...labelProps}
      $rtl={direction === "rtl"}
    >
      <HiddenInput {...inputProps} />
      <ChooseLabel className="aje-checkbox__label" $rtl={direction === "rtl"}>
        {children}
        {message && <Message>{message}</Message>}
        {error && <ErrorMessage>{error}</ErrorMessage>}
      </ChooseLabel>
    </RadioWrapper>
  );
}
