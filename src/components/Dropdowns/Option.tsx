import React from "react";

export interface OptionProps<T> {
  value: T;
  children: React.ReactNode;
}

/** An Option in the various Dropdown */
export default function Option<T>({ value, children }: OptionProps<T>) {
  // @ts-ignore
  return <option value={value}>{children}</option>;
}
