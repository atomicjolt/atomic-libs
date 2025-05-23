import { OverlayTriggerProps } from "react-stately";
import { ElementWrapper, RenderStyleProps } from "../../../types";
import { LayoutProps } from "@styles/layout";

export type ModalChildren =
  | React.ReactNode
  | ((close: () => void) => React.ReactNode);

export interface BaseModalProps
  extends RenderStyleProps<never>,
    OverlayTriggerProps,
    ElementWrapper<HTMLDivElement>,
    LayoutProps {
  /** Centers the modal within the viewport
   * @deprecated Use `isCentered` instead
   */
  centered?: boolean;

  /** Centers the modal within the viewport */
  isCentered?: boolean;
}
