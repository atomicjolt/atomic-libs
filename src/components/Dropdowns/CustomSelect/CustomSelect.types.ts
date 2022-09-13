import React from "react";
import { InputProps } from "../../../types";

export interface CustomSelectProps<T>
  extends InputProps<T | null, Element, React.MouseEvent<Element>> {
  readonly children: React.ReactElement | React.ReactElement[];
}

export interface CustomSelectContext<T> {
  currentValue: T | null;
  onClick: (value: T, event: React.MouseEvent<Element>) => void;
}
