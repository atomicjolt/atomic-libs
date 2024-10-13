import {
  FocusableProps,
  HelpTextProps,
  LabelableProps,
  TextInputBase,
  CollectionStateBase,
  MultipleSelection,
} from "@react-types/shared";
import { BaseProps } from "../../../types";

export interface AriaMultiSelectProps<T>
  extends CollectionStateBase<T>,
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
   * The name of the input, used when submitting an HTML form.
   */
  name?: string;
}
