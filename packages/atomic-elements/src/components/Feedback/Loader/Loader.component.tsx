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
   * is displayed
   * @default true
   */
  isLoading?: boolean;
  /** An optional message to display with the loader */
  message?: React.ReactNode;
  /** Size of the loader. Also sets the size of the checkmark shown when
   * loading finishes
   * @default "medium"
   */
  size?: Size;
  /** Placement of the loader
   * - `inline` - Loader is displayed inline with the content
   * - `block` - Loader is displayed as a block element
   * - `center` - Loader spans the full width of the parent container.
   *    If the parent is a flex container, the loader will take up available space on the main axis
   * - `absolute center` - Loader is absolutely positioned of its nearest relative parent
   *
   * @default "center"
   */
  placement?: LoaderPlacement;

  /** The orientation of the loader and the message relative to each other
   * @default "vertical"
   */
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

  const rest = filterDOMProps(props, { labelable: true });
  // A labelled loader is announced as a status; unlabelled it is decorative.
  const role =
    props["aria-label"] || props["aria-labelledby"] ? "status" : undefined;

  return (
    <LoaderWrapper
      {...renderProps}
      {...rest}
      role={role}
      data-placement={placement}
    >
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
