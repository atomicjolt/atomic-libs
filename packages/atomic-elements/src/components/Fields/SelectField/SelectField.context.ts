import { createContext } from "react";
import { SelectState } from "react-stately";
import { FocusableElement, DOMAttributes } from "@react-types/shared";
import { createComponentContext } from "@utils/index";
import { SelectFieldProps } from "./SelectField.types";

export const SelectFieldContext =
  createComponentContext<SelectFieldProps<any>>();

export const SelectStateContext = createContext<SelectState<any> | null>(null);

export const SelectFieldValueContext =
  createContext<DOMAttributes<FocusableElement> | null>(null);
