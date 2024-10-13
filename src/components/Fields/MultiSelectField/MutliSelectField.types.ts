import { Key } from "react";
import {
  FocusableProps,
  HelpTextProps,
  InputBase,
  LabelableProps,
  TextInputBase,
  Validation,
  CollectionStateBase,
  MultipleSelection,
} from "@react-types/shared";
import { AriaProps } from "../../../types";
import { FieldProps } from "../Field";

export interface AriaMultiSelectProps<T>
  extends CollectionStateBase<T>,
    Omit<InputBase, "isReadOnly">,
    Validation<Key>,
    HelpTextProps,
    LabelableProps,
    TextInputBase,
    Omit<MultipleSelection, "disallowEmptySelection" | "selectionMode">,
    FocusableProps {
  /** Sets the open state of the menu. */
  isOpen?: boolean;
  /** Sets the default open state of the menu. */
  defaultOpen?: boolean;
  /** Method that is called when the open state of the menu changes. */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * The name of the input, used when submitting an HTML form.
   */
  name?: string;
}

export interface MultiSelectFieldProps<T extends object>
  extends Omit<AriaProps<AriaMultiSelectProps<T>>, "children">,
    Omit<FieldProps, "children"> {
  children: React.ReactNode;
}
