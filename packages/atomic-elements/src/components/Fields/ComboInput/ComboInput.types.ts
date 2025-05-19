import { ElementWrapper, RenderBaseProps } from "../../../types";

export type PaddingSide = "left" | "right" | "both";

export interface ComboInputProps
  extends RenderBaseProps<never>,
    ElementWrapper<HTMLDivElement> {
  /** ref to the input element that this virtual input should focus when clicked
   * When `ComboInput` is used within a `Field` component, this prop is automatically
   * provided
   */
  inputRef?: React.RefObject<HTMLInputElement | null>;

  /** Where to include padding on the sides of the ComboInput
   * - `left` - padding on the left side
   * - `right` - padding on the right side
   * - `both` - padding on both sides
   * */
  padding?: PaddingSide;
}
