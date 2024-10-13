import { createContext } from "react";
import { ListState } from "react-stately";
import { createComponentContext } from "@utils/index";
import { ListBoxProps } from "./ListBox.types";

export const ListStateContext = createContext<ListState<any> | null>(null);
export const ListBoxContext = createComponentContext<ListBoxProps<any>>();
