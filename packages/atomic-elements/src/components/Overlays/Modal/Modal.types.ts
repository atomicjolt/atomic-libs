import { OverlayTriggerProps } from "react-stately";
import { ElementWrapper, RenderStyleProps } from "../../../types";

export type ModalChildren =
  | React.ReactNode
  | ((close: () => void) => React.ReactNode);

export interface BaseModalProps
  extends RenderStyleProps<never>,
    OverlayTriggerProps,
    ElementWrapper<HTMLDivElement> {
  /** Centers the modal within the viewport
   * @deprecated Use `isCentered` instead
   */
  centered?: boolean;

  /** Centers the modal within the viewport */
  isCentered?: boolean;
}
