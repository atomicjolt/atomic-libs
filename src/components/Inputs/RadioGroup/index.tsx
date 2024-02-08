import React from "react";
import cn from "classnames";
import { HasChildren, InputComponentProps, EventHandler } from "../../../types";
import RadioContext, { RadioContextData } from "./context";
import { makeEventHandler } from "../../../utils";
import { FieldSet } from "./RadioGroup.styles";
import { FieldError, Label, FieldMessage } from "../../../styles/utils";

export interface RadioGroupsProps
  extends Omit<InputComponentProps, "size">,
    HasChildren {
  readonly name: string;
  readonly disabled?: boolean;
  readonly value?: string;
  readonly onChange?: EventHandler<string, React.ChangeEvent<Element>>;
}

/**
 * Radio Group
 *
 * - For a choice selection of 3-5 options. There may be a few cases where you can use these for more than 5, but it isn't common.
 * - For 2 choices, use a checkbox instead.
 * - For more than 5 options, use a select.
 *
 * Any `<Radio />` element nested under a `<RadioGroup />` will be considered part of that group,
 * do note that it does not need to nested directly under. As such, you can add additional strucuture
 * between the over-lying `<RadioGroup />` and it's `<Radio />`s
 * */
export default function RadioGroup(props: RadioGroupsProps) {
  const {
    value,
    onChange,
    label,
    message,
    error,
    name,
    children,
    disabled = false,
    hideLabel,
    className,
  } = props;

  const ctx: RadioContextData = {
    onChange: makeEventHandler(onChange),
    name,
    currentValue: value,
    disabled,
  };

  return (
    <FieldSet className={cn("aje-radio-group", className)}>
      <Label as="legend" className={cn({ "aje-hidden": hideLabel })}>
        {label}
        {message && <FieldMessage as="p">{message}</FieldMessage>}
        {error && <FieldError as="p">{error}</FieldError>}
      </Label>
      <RadioContext.Provider value={ctx}>{children}</RadioContext.Provider>
    </FieldSet>
  );
}

export { default as Radio } from "./Radio";
