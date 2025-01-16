import { HTMLAttributes } from "react";
import { BaseProps, HasChildren } from "../../../types";

export type PaddingSide = "left" | "right" | "both";

export interface ComboInputProps
  extends Omit<BaseProps, "size">,
    HasChildren,
    Omit<HTMLAttributes<HTMLDivElement>, "className" | "id" | "children"> {
  /** ref to the input element that this virtual input should focus when clicked
   * When `ComboInput` is used within a `Field` component, this prop is automatically
   * provided
   */
  inputRef?: React.RefObject<HTMLInputElement>;

  padding?: PaddingSide;
}
