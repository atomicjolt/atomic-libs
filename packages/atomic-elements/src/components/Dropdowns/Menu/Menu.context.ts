import React from "react";
import { MenuProps } from ".";
import { TreeState } from "react-stately";
import { createComponentContext } from "@utils/index";

export const MenuContext = createComponentContext<MenuProps<any>>();
export const MenuStateContext = React.createContext<TreeState<object> | null>(
  null
);
