import React from "react";
import { EventHandler, HasVariant, InputProps } from "../../../types";
import { CustomSelectOptionProps } from "./Option";

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
  ids: [string, string, string, string];
  error: React.ReactNode;
  active: boolean;
  message?: string;
  hideLabel: boolean;
  label: string;
  options: CustomSelectOptionProps<T>[];
  selectedOption?: CustomSelectOptionProps<T>;
  toggleMenu: () => void;
  onSelect: EventHandler<T, React.MouseEvent>;
}
