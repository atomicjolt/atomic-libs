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
import { BaseProps } from "../../../types";

export interface AriaMultiSelectProps<T>
  extends CollectionStateBase<T>,
    Omit<InputBase, "isReadOnly">,
    Validation<Key>,
    HelpTextProps,
    LabelableProps,
    TextInputBase,
    Omit<MultipleSelection, "disallowEmptySelection" | "selectionMode">,
    FocusableProps,
    BaseProps {
  /** Sets the open state of the menu. */
  isOpen?: boolean;
  /** Sets the default open state of the menu. */
  defaultOpen?: boolean;
  /** Method that is called when the open state of the menu changes. */
  onOpenChange?: (isOpen: boolean) => void;
  /**
   * Describes the type of autocomplete functionality the input should provide if any. See [MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefautocomplete).
   */
  autoComplete?: string;
  /**
   * The name of the input, used when submitting an HTML form.
   */
  name?: string;
}
