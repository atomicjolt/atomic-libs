import { forwardRef, useMemo } from "react";
import { useProgressBar, AriaProgressBarProps } from "@react-aria/progress";
import { RenderStyleProps, SuggestStrings } from "../../../types";
import { Color } from "@styles/variables";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { ProgressCircleContext } from "./ProgressCircle.context";
import {
  ProgressCircleSvg,
  ProgressCircleIndicator,
  ProgressCircleTrack,
  ProgressCircleBackground,
} from "./ProgressCircle.styles";

export interface ProgressCircleProps
  extends RenderStyleProps<never>,
    AriaProgressBarProps {
  /** Whether or not to display a label in the center of the circle representing the value */
  showValueLabel?: boolean;
  /** The width and height of the progress circle */
  $size?: string;
  /** The width of the track */
  $trackWidth?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  /** The color of the background */
  $bg?: SuggestStrings<Color>;
  /** The color of the track */
  $trackColor?: SuggestStrings<Color>;
  /** The color indicating the amount of progress */
  $indicatorColor?: SuggestStrings<Color>;
  /** The linecap of the progress indicator */
  $linecap?: "round" | "butt";
}

export const ProgressCircle = forwardRef<HTMLElement, ProgressCircleProps>(
  function ProgressCircle(props, ref) {
    [props, ref] = useContextProps(ProgressCircleContext, props, ref);
    const {
      value = 0,
      $size = "60",
      $trackWidth = "10",
      $indicatorColor = "var(--progress-circle-indicator-clr)",
      $trackColor = "var(--progress-circle-track-clr)",
      $bg = "var(--progress-circle-bg-clr)",
      $linecap,
      className,
      style,
      isIndeterminate,
      minValue = 0,
      maxValue = 100,
      showValueLabel,
      ...rest
    } = props;

    const { progressBarProps } = useProgressBar(props);

    const radius = 16;

    const [filledValue, unFilledValue] = useMemo(() => {
      const percentage = ((value - minValue) / (maxValue - minValue)) * 100;

      if (percentage > 100) {
        return [100, 0];
      }
      if (percentage < 0) {
        return [0, 100];
      }

      return [percentage, 100 - percentage];
    }, [value, minValue, maxValue]);

    const renderProps = useRenderProps({
      componentClassName: "aje-progresscircle",
      className,
      style,
      selectors: {
        "data-indeterminate": isIndeterminate,
      },
    });

    return (
      <ProgressCircleSvg
        width={$size}
        height={$size}
        viewBox="0 0 44 44"
        {...progressBarProps}
        {...renderProps}
        {...rest}
      >
        <ProgressCircleBackground cx="22" cy="22" r={radius} $fill={$bg} />
        <ProgressCircleTrack
          cx="22"
          cy="22"
          r={radius}
          $stroke={$trackColor}
          strokeWidth={$trackWidth}
        />
        <ProgressCircleIndicator
          cx="22"
          cy="22"
          r={radius}
          $stroke={$indicatorColor}
          strokeWidth={$trackWidth}
          strokeDasharray={`${filledValue} ${unFilledValue}`}
          strokeDashoffset="25"
          strokeLinecap={$linecap}
        />
        {showValueLabel && (
          <text
            x="22"
            y="22"
            textAnchor="middle"
            dominantBaseline="middle"
            fill={$indicatorColor}
            fontSize="10"
          >
            {progressBarProps["aria-valuetext"]}
          </text>
        )}
      </ProgressCircleSvg>
    );
  }
);

ProgressCircle.displayName = "ProgressCircle";
