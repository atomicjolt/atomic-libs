import { AriaListBoxProps } from "@react-aria/listbox";
import { ExtendedSize, RenderStyleProps } from "../../../types";

export interface ListBoxProps<T>
  extends AriaListBoxProps<T>,
    RenderStyleProps<never> {
  /** The size of the listbox */
  size?: ExtendedSize;
}
