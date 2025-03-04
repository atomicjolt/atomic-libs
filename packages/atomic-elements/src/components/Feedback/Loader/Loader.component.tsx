import { filterDOMProps } from "@react-aria/utils";
import { Flex } from "@components/Layout/Flex";
import { useRenderProps } from "@hooks/useRenderProps";
import { AriaLabelProps, RenderBaseProps, Size } from "../../../types";
import { Checkmark } from "@components/Animations/Checkmark";
import { LoaderMessage, LoaderWrapper } from "./Loader.styles";
import { LoaderPlacement } from "./Loader.types";

export interface LoaderProps
  extends RenderBaseProps<{ isLoading: boolean }>,
    AriaLabelProps {
  /** Whether the loader is in a loading state, when true,
   * children is rendered, when false, a checkmark animation
   * is displayed */
  isLoading?: boolean;
  /** An optional message to display with the loader */
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

  /** The orientation of the loader and the message relative to each other */
  orientation?: "horizontal" | "vertical";
}

/** Loader component. Manages the placement
 * of a loading animation and an optional message.
 */
export function Loader(props: LoaderProps) {
  const {
    isLoading = true,
    placement = "center",
    orientation = "vertical",
    size = "medium",
    message,
  } = props;

  const placementType = ["inline", "block"].includes(placement)
    ? "inline"
    : "center";

  const renderProps = useRenderProps({
    componentClassName: "aje-loader",
    ...props,
    size,
    values: { isLoading },
  });

  const direction = orientation === "horizontal" ? "row" : "column";

  const rest = filterDOMProps(props);

  return (
    <LoaderWrapper {...renderProps} {...rest} data-placement={placement}>
      {isLoading ? (
        <Flex
          $display={placementType === "inline" ? "inline-flex" : "flex"}
          $direction={direction}
          $gap={direction === "row" ? "1rem" : "0"}
          $justify="center"
          $align="center"
        >
          {renderProps.children}
          {message && <LoaderMessage>{message}</LoaderMessage>}
        </Flex>
      ) : typeof props.children === "function" ? (
        renderProps.children
      ) : (
        <Checkmark size={size} />
      )}
    </LoaderWrapper>
  );
}
