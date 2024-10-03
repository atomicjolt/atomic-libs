import React from "react";
import { MenuProps } from ".";
import { TreeState } from "react-stately";

export const MenuContext = React.createContext<MenuProps<any>>(null as any);
export const MenuStateContext = React.createContext<TreeState<object> | null>(
  null
);
