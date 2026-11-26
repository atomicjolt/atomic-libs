import { useContext, useRef } from "react";
import { AriaRadioProps, useRadio } from "@react-aria/radio";
import { useLocale } from "@react-aria/i18n";
import { useId } from "@react-aria/utils";

import { HelpMessageProps, RenderBaseProps } from "../../../types";
import { HiddenInput, ToggleHelpText } from "../Inputs.styles";
import { RadioGroupContext } from "./context";
import { RadioLabel, RadioWrapper } from "./RadioGroup.styles";
import { ErrorMessage, Message } from "../../Fields";
import { useRenderProps } from "@hooks";

interface RadioRenderProps {
  isSelected: boolean;
  isDisabled: boolean;
  isPressed: boolean;
}

export interface RadioProps
  extends Omit<AriaRadioProps, "children">,
    HelpMessageProps,
    RenderBaseProps<RadioRenderProps> {}

/** Radio Elements, must be a descendant of a `<RadioGroup>` */
export function Radio(props: RadioProps) {
  const { message, error } = props;

  const ref = useRef(null);
  const state = useContext(RadioGroupContext);

  if (!state) {
    throw new Error("Radio components must be rendered within a RadioGroup");
  }

  const { inputProps, labelProps, ...states } = useRadio(
    { ...props, children: true },
    state,
    ref
  );
  const { direction } = useLocale();

  // The <label> names the input through htmlFor; message and error describe it.
  const inputId = useId(inputProps.id);
  const messageId = useId();
  const errorId = useId();
  const describedBy =
    [
      inputProps["aria-describedby"],
      message ? messageId : undefined,
      error ? errorId : undefined,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  const renderProps = useRenderProps({
    componentClassName: "aje-radio",
    ...props,
    values: states,
    selectors: {
      "data-selected": states.isSelected,
      "data-disabled": states.isDisabled,
      "data-pressed": states.isPressed,
    },
  });

  return (
    <RadioWrapper $rtl={direction === "rtl"} {...renderProps}>
      <HiddenInput
        {...inputProps}
        id={inputId}
        aria-describedby={describedBy}
      />
      <RadioLabel
        {...labelProps}
        htmlFor={inputId}
        className="aje-checkbox__label"
        $rtl={direction === "rtl"}
      >
        {renderProps.children}
      </RadioLabel>
      {(message || error) && (
        <ToggleHelpText $prefix="radio" $rtl={direction === "rtl"}>
          {message && <Message id={messageId}>{message}</Message>}
          {error && (
            <ErrorMessage id={errorId} isInvalid>
              {error}
            </ErrorMessage>
          )}
        </ToggleHelpText>
      )}
    </RadioWrapper>
  );
}
