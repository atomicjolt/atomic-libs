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

  /** Ensures the modal is visible by scrolling it into view.
   *
   * This is typically unnecessary since modals are automatically
   * centered in the browser viewport. However, when rendering
   * within an iframe that exceeds the parent viewport height,
   * the optimal placement cannot be determined. In this case,
   * the modal is positioned at the top of the page and
   * automatically scrolled into view.
   */
  ensureVisible?: boolean;
}
