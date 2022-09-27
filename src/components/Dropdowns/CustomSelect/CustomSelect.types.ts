import React from "react";
import { HasVariant, InputProps } from "../../../types";

export type Variants = "default" | "floating";

export interface CustomSelectProps<T>
  extends InputProps<T | null, Element, React.MouseEvent<Element>>,
    HasVariant<Variants> {
  readonly children: React.ReactElement | React.ReactElement[];
}

export interface CustomSelectContext<T> {
  currentValue: T | null;
  onClick: (value: T, event: React.MouseEvent<Element>) => void;
}

export interface CustomSelectVariantProps<T> {
  children: React.ReactNode;
  error: React.ReactNode;
  message?: string;
  hideLabel: boolean;
  label: string;
  inputId: string;
  labelId: string;
}
