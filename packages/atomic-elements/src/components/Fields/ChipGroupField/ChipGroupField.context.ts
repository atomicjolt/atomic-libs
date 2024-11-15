import { ListState } from "react-stately";
import { createComponentContext } from "@utils/index";
import {
  ChipGroupFieldListProps,
  ChipGroupFieldProps,
} from "./ChipGroupField.component";
import { createContext } from "react";

export const ChipGroupFieldContext =
  createComponentContext<ChipGroupFieldProps<any>>();

export const ChipGroupStateContext = createContext<ListState<any> | null>(null);

export const ChipGroupListContext =
  createComponentContext<ChipGroupFieldListProps<any>>();
