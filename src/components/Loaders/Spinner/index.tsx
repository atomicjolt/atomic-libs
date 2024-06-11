import { AriaLabelProps, BaseProps, Size } from "../../../types";
import { useRenderProps } from "@/hooks/useRenderProps";
import { Flex } from "@/components/Layout/Flex/Flex";
import { CircularLoader, LoaderPath } from "./Spinner.styles";
import { LoaderCheck, LoaderMessage, LoaderWrapper } from "../Loader.styles";
import { LoaderProps } from "../Loading.types";

export interface SpinnerProps
  extends Omit<BaseProps, "size">,
    LoaderProps,
    AriaLabelProps {}

const strokeWidths: Record<Size, number> = {
  small: 1,
  medium: 0.5,
  large: 0.3,
};

/** Spinner Component */
export function Spinner(props: SpinnerProps) {
  const {
    isLoading = true,
    className,
    size = "medium",
    message,
    placement = "center",
    ...rest
  } = props;

  const strokeWidth = strokeWidths[size];

  const placementType = ["inline", "block"].includes(placement)
    ? "inline"
    : "center";

  const renderProps = useRenderProps({
    componentClassName: "aje-spinner",
    className,
    size,
  });

  return (
    <LoaderWrapper {...renderProps} {...rest} data-placement={placement}>
      {isLoading ? (
        <Flex
          inline={placementType === "inline"}
          direction={placementType === "inline" ? "row" : "column"}
          gap={placementType === "inline" ? "1rem" : 0}
          justifyContent="center"
          alignItems="center"
        >
          <CircularLoader
            className="circular-loader"
            viewBox="25 25 50 50"
            data-testid="spinner-svg"
          >
            <LoaderPath
              className="loader-path"
              cx="50"
              cy="50"
              r="20"
              fill="none"
              strokeWidth={`${strokeWidth}em`}
            />
          </CircularLoader>
          {message && <LoaderMessage>{message}</LoaderMessage>}
        </Flex>
      ) : (
        <LoaderCheck />
      )}
    </LoaderWrapper>
  );
}

export default Spinner;
