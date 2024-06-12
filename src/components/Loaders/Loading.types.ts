import { Size } from "@/types";

export type LoaderPlacement = "inline" | "block" | "center" | "absolute center";

export interface LoaderProps {
  isLoading?: boolean;
  message?: React.ReactNode;
  size?: Size;
  /** Placement of the loader
   * - `inline` - Loader is displayed inline with the content
   * - `block` - Loader is displayed as a block element
   * - `center` - Loader spans the full width of the parent container.
   *    If the parent is a flex conatiner, the loader will take up available space on the main axis
   * - `absolute center` - Loader is absolutely positioned of it's nearest relative parent
   *
   * @default "center"
   */
  placement?: LoaderPlacement;

  /** The placement of the loader and the message relative to each other */
  direction?: "row" | "column";
}

export interface ErrorStateProps {
  error: React.ReactNode;
}
