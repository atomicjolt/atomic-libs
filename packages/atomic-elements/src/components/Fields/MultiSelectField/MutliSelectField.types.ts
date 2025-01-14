import {
  FocusableProps,
  HelpTextProps,
  InputBase,
  LabelableProps,
  TextInputBase,
  Validation,
  CollectionStateBase,
} from "@react-types/shared";
import { AriaProps, Key } from "../../../types";
import { FieldProps } from "../Field";

export interface AriaMultiSelectProps<T>
  extends CollectionStateBase<T>,
    Omit<InputBase, "isReadOnly">,
    Validation<Key>,
    HelpTextProps,
    LabelableProps,
    TextInputBase,
    FocusableProps {
  /** Sets the open state of the menu. */
  isOpen?: boolean;
  /** Sets the default open state of the menu. */
  defaultOpen?: boolean;
  /** Method that is called when the open state of the menu changes. */
  onOpenChange?: (isOpen: boolean) => void;
  /** The name of the input, used when submitting an HTML form. */
  name?: string;
  /** The currently selected keys in the collection (controlled). */
  selectedKeys?: Iterable<Key>;
  /** The initial selected keys in the collection (uncontrolled). */
  defaultSelectedKeys?: Iterable<Key>;
  /** Handler that is called when the selection changes. */
  onSelectionChange?: (keys: Set<Key>) => void;
  /** The currently disabled keys in the collection (controlled). */
  disabledKeys?: Iterable<Key>;
}

export interface MultiSelectFieldProps<T extends object>
  extends Omit<AriaProps<AriaMultiSelectProps<T>>, "children">,
    Omit<FieldProps, "children"> {
  children: React.ReactNode;
}
