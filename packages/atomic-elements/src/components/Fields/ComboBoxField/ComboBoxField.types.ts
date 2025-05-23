import { BaseCollection } from "@react-aria/collections";
import { SingleSelection } from "@react-types/shared";
import { MenuTriggerAction } from "@react-types/combobox";
import { Key } from "../../../types";
import { FieldProps } from "../Field";

export interface ComboBoxFieldProps<T>
  extends Omit<SingleSelection, "disallowEmptySelection" | "onSelectionChange">,
    Omit<FieldProps, "children"> {
  children?: React.ReactNode;

  /** Hangler called when the selection changes */
  onSelectionChange?: (key: Key | null) => void;

  allowsCustomValue?: boolean;
  inputValue?: string;
  defaultInputValue?: string;
  onInputChange?: (value: string) => void;

  onOpenChange?: (isOpen: boolean, menuTrigger?: MenuTriggerAction) => void;
  menuTrigger?: MenuTriggerAction;
}

export interface ComboBoxFieldInnerProps<T> extends ComboBoxFieldProps<T> {
  collection: BaseCollection<T>;
  comboBoxRef: React.RefObject<HTMLInputElement | null>;
}
