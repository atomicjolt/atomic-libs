import React, { useMemo } from "react";
import { CustomSelectContext } from "./CustomSelect.types";
import { EmptyOption, Option } from "../Option";

export const Context = React.createContext<CustomSelectContext<any>>(
  {} as CustomSelectContext<any>
);

export function useSelectedChild<T>(value: T, children: React.ReactNode) {
  return useMemo(() => {
    const childArray = React.Children.toArray(children) as React.ReactElement[];
    childArray.forEach((c) => {
      if (c.type !== Option && c.type !== EmptyOption) {
        throw new Error(
          "All children of CustomSelect must be Option or EmptyOption"
        );
      }
    });
    return childArray.find((c) => c.props["value"] == value);
  }, [value]);
}
