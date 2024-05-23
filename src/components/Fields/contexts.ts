import { DOMAttributes } from "@react-types/shared";
import React, { LabelHTMLAttributes } from "react";
import { AriaButtonProps } from "react-aria";

export const FieldLabelContext = React.createContext<
  DOMAttributes | LabelHTMLAttributes<HTMLLabelElement>
>({});

export const FieldMessageContext = React.createContext<DOMAttributes>({});

export const FieldErrorContext = React.createContext<{
  errorMessageProps: DOMAttributes;
  isInvalid: boolean;
}>({} as any);

export const FieldInputContext = React.createContext<{
  inputProps: DOMAttributes;
  ref: React.RefObject<HTMLInputElement>;
  inputRef: React.RefObject<HTMLInputElement>;
}>({} as any);

export const NumberFieldButtonContext = React.createContext<{
  incrementButtonProps: AriaButtonProps;
  decrementButtonProps: AriaButtonProps;
}>({} as any);
