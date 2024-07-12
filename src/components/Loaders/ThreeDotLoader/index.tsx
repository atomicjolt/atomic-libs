import { AriaLabelProps, BaseProps } from "../../../types";
import { Flex } from "@components/Layout/Flex/Flex";
import { Dot1, Dot2, Dot3, DotsContainer } from "./ThreeDotLoader.styles";
import { LoaderCheck, LoaderMessage, LoaderWrapper } from "../Loader.styles";
import { useRenderProps } from "@hooks/useRenderProps";
import { LoaderProps } from "../Loading.types";

export interface ThreeDotLoaderProps
  extends Omit<BaseProps, "size">,
    AriaLabelProps,
    LoaderProps {}

/** Three Dot Loader Component */
export function ThreeDotLoader(props: ThreeDotLoaderProps) {
  const {
    isLoading = true,
    className,
    size = "medium",
    placement = "center",
    direction = "column",
    message,
    ...rest
  } = props;

  const placementType = ["inline", "block"].includes(placement)
    ? "inline"
    : "center";

  const renderProps = useRenderProps({
    componentClassName: "aje-three-dot-loader",
    className,
    size,
  });

  return (
    <LoaderWrapper {...renderProps} {...rest} data-placement={placement}>
      {isLoading ? (
        <Flex
          inline={placementType === "inline"}
          direction={direction}
          gap={direction === "row" ? "1rem" : 0}
          justifyContent="center"
          alignItems="center"
        >
          <DotsContainer className="dots-container">
            <Dot1 className="dot1"></Dot1>
            <Dot2 className="dot2"></Dot2>
            <Dot3 className="dot3"></Dot3>
          </DotsContainer>
          {message && <LoaderMessage>{message}</LoaderMessage>}
        </Flex>
      ) : (
        <LoaderCheck />
      )}
    </LoaderWrapper>
  );
}

export default ThreeDotLoader;
