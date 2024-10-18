import { createContext } from "react";
import { createComponentContext } from "@utils/index";
import { MultiSelectFieldProps } from "./MutliSelectField.types";
import { MultiSelectState } from "./useMultiSelectState";

export const MultiSelectFieldContext =
  createComponentContext<MultiSelectFieldProps<any>>();

export const MultiSelectStateContext =
  createContext<MultiSelectState<any> | null>(null);
