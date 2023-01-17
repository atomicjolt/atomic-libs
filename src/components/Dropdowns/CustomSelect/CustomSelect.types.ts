import React from "react";
import { FilterStrategy } from "../../../filter";
import { HasVariant, InputProps } from "../../../types";

export type CustomSelectVariants = "default" | "floating";

export interface CustomSelectProps<T extends {} | Array<any>>
  extends InputProps<T | null, Element, React.SyntheticEvent<Element>>,
    HasVariant<CustomSelectVariants> {
  readonly children: React.ReactElement | React.ReactElement[];
  /** Adds a search input to the dropdown.
   * When enabling search, it is reccomended to added a `searchKey` to each
   * `<Option>` child */
  readonly searchable?: boolean;
  /** Placeholder for the search input */
  readonly searchPlaceholder?: string;
  /** Strategy on how to filter results based on search term */
  readonly filterStrategy?: FilterStrategy<string, string>;
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
