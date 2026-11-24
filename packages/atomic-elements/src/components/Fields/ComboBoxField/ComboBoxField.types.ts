import { BaseCollection } from "@react-aria/collections";
import { SingleSelection } from "@react-types/shared";
import { MenuTriggerAction } from "@react-types/combobox";
import { Key, LoadingProps } from "../../../types";
import { FieldProps } from "../Field";

export interface ComboBoxFieldProps<T>
  extends Omit<SingleSelection, "disallowEmptySelection" | "onSelectionChange">,
    Omit<FieldProps, "children">,
    LoadingProps {
  children?: React.ReactNode;

  /** Handler called when the selection changes */
  onSelectionChange?: (key: Key | null) => void;

  /** Allow a value that doesn't match an option */
  allowsCustomValue?: boolean;
  /** Input text (controlled) */
  inputValue?: string;
  /** Initial input text (uncontrolled) */
  defaultInputValue?: string;
  /** Called when the input text changes */
  onInputChange?: (value: string) => void;

  /** Called when the menu opens or closes */
  onOpenChange?: (isOpen: boolean, menuTrigger?: MenuTriggerAction) => void;
  /** What opens the menu: `input` (typing), `focus`, or `manual`
   * @default "input"
   */
  menuTrigger?: MenuTriggerAction;
}

export interface ComboBoxFieldInnerProps<T> extends ComboBoxFieldProps<T> {
  collection: BaseCollection<T>;
  comboBoxRef: React.RefObject<HTMLInputElement | null>;
}
