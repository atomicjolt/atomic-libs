import React, { useContext } from "react";

export interface CustomSelectOptionProps<T> {
  value: T;
  children: React.ReactNode;
}

/** An Option in the `CustomSelect` */
export function Option<T>({ value, children }: CustomSelectOptionProps<T>) {
  return null;
}

/** A `CustomSelect` `Option` item with `null` as the value */
export function EmptyOption({ children }: { children?: React.ReactNode }) {
  return <Option value={null}>{children}</Option>;
}
