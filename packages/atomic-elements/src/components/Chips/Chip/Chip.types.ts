import { Node } from "react-stately";
import { AriaLabelProps, DomProps, SuggestStrings } from "../../../types";
import { PressEvent, PressProps } from "@react-aria/interactions";
import { ItemProps } from "../../Collection";

type ChipVariants = SuggestStrings<
  "default" | "warning" | "success" | "danger"
>;

export interface ChipProps<T> extends ItemProps, PressProps {
  variant?: ChipVariants;
  /** Handler that is called when the user
   * clicks the remove button for the chip */
  onRemove?: (e: PressEvent) => void;
  isDisabled?: boolean;
}

export type ChipArgs<T> =
  | [ChipProps<T>, React.ForwardedRef<HTMLDivElement>]
  | [ChipProps<T>, React.ForwardedRef<HTMLDivElement>, Node<T>];

export interface ChipGroupChipProps<T> extends ChipProps<T> {
  item: Node<T>;
  itemRef: React.ForwardedRef<HTMLDivElement>;
}

export interface ChipInternalProps<T> extends ChipProps<T> {
  allowsRemoving?: boolean;
}
