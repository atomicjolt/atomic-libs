import React, { EventHandler } from "react";
import { HasVariant, InputProps } from "../../../types";
import { OptionProps } from "../Option";

export type Variants = "default" | "floating";
export type NullTypeOrTypeArray<T> = T | T[] | (T | null)[] | null;

export interface CustomSelectProps<T>
  extends InputProps<
      NullTypeOrTypeArray<T>,
      Element,
      React.MouseEvent<Element> | React.KeyboardEvent<Element>
    >,
    HasVariant<Variants> {
  readonly children: React.ReactElement | React.ReactElement[];
  /** Adds a search input to the dropdown.
   * When enabling search, it is reccomended to added a `searchKey` to each
   * `<Option>` child */
  readonly searchable?: boolean;
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
