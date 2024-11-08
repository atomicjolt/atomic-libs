import React from "react";
import { AriaButtonProps } from "@react-aria/button";

export { InputContext as FieldInputContext } from "./Atoms/Input";
export { TextAreaContext as FieldTextAreaContext } from "./Atoms/TextArea";
export { LabelContext as FieldLabelContext } from "./Atoms/Label";
export { ErrorMessageContext as FieldErrorContext } from "./Atoms/ErrorMessage";
export { MessageContext as FieldMessageContext } from "./Atoms/Message";

export const NumberFieldButtonContext = React.createContext<{
  incrementButtonProps: AriaButtonProps;
  decrementButtonProps: AriaButtonProps;
}>({} as any);
