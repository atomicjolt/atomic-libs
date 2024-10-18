import { createComponentContext } from "@utils/index";
import { ComboBoxFieldProps } from "./ComboBoxField.types";
import { createContext } from "react";
import { ComboBoxState } from "react-stately";

export const ComboBoxFieldContext =
  createComponentContext<ComboBoxFieldProps<any>>();

export const ComboBoxFieldStateContext =
  createContext<ComboBoxState<any> | null>(null);
