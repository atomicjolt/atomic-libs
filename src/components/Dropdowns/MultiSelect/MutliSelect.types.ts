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

export interface MultiSelectProps<T>
  extends CollectionStateBase<T>,
    Omit<InputBase, "isReadOnly">,
    Validation<Key>,
    HelpTextProps,
    LabelableProps,
    TextInputBase,
    Omit<MultipleSelection, "disallowEmptySelection">,
    FocusableProps {
  /** Sets the open state of the menu. */
  isOpen?: boolean;
  /** Sets the default open state of the menu. */
  defaultOpen?: boolean;
  /** Method that is called when the open state of the menu changes. */
  onOpenChange?: (isOpen: boolean) => void;
}
