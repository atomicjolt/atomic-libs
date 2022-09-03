import React, { useContext, useEffect, useMemo, useRef, useState } from "react";
import cn from "classnames";
import { Context } from "./utils";

interface CustomSelectOptionProps<T> {
  value: T;
  children: React.ReactNode;
}

/** An Option in the `CustomSelect` */
export function Option<T>({ value, children }: CustomSelectOptionProps<T>) {
  const { currentValue, onClick } = useContext(Context);

  return (
    <li
      className={cn("aje-combobox__option", {
        "is-focused": value == currentValue,
      })}
      role="option"
      aria-selected={value == currentValue}
      onClick={(e) => onClick(value, e)}
    >
      {children}
    </li>
  );
}

/** A `CustomSelect.Option` item with `null` as the value */
export function EmptyOption({ children }: { children?: React.ReactNode }) {
  return <Option value={null}>{children}</Option>;
}
