import { HelpTextProps, Validation } from "@react-types/shared";

export type AriaProps<P> = Omit<
  P,
  | keyof HelpTextProps
  | keyof Validation<any>
  | "label"
  | "isDisabled"
  | "isReadOnly"
  | "id"
  | "name"
  | "pattern"
>;

export type Key = string | number;

export type {
  SortDescriptor,
  Selection,
  SortDirection,
  SelectionMode,
  SelectionBehavior,
} from "react-stately";
