import { filterDOMProps } from "@react-aria/utils";
import { useRenderProps } from "@hooks/useRenderProps";
import {
  AriaLabelProps,
  RenderClassName,
  RenderStyle,
  Size,
} from "../../../types";
import { SpinnerSvg, SpinnerPath, SpinnerContainer } from "./Spinner.styles";

export interface SpinnerProps extends AriaLabelProps {
  className?: RenderClassName<never>;
  style?: RenderStyle<never>;
  size?: Size;

  /** Duration of the animation in milliseconds
   * @default 2000
   */
  duration?: number;
}

const strokeWidths: Record<Size, number> = {
  small: 1,
  medium: 0.5,
  large: 0.1,
};

/** Spinner Component */
export function Spinner(props: SpinnerProps) {
  const { size = "medium", duration = 2000 } = props;

  const strokeWidth = strokeWidths[size];

  const renderProps = useRenderProps({
    ...props,
    componentClassName: "aje-spinner",
    size,
  });

  const pathDuration = duration * 0.75;

  return (
    <SpinnerContainer {...renderProps} {...filterDOMProps(props)}>
      <SpinnerSvg
        viewBox="25 25 50 50"
        $duration={duration}
        data-testid="spinner-svg"
      >
        <SpinnerPath
          cx="50"
          cy="50"
          r="20"
          fill="none"
          strokeWidth={`${strokeWidth}em`}
          $duration={pathDuration}
        />
      </SpinnerSvg>
    </SpinnerContainer>
  );
}
