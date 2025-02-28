import { forwardRef, useMemo } from "react";
import { useProgressBar, AriaProgressBarProps } from "@react-aria/progress";
import { RenderStyleProps, SuggestStrings } from "../../../types";
import { Color } from "@styles/variables";
import { useContextProps } from "@hooks/useContextProps";
import { useRenderProps } from "@hooks/useRenderProps";
import { ProgressCircleContext } from "./ProgressCircle.context";
import {
  ProgressCircleSvg,
  ProgressCircleActive,
  ProgressCircleTrack,
  ProgressCircleBackground,
} from "./ProgressCircle.styles";

export interface ProgressCircleProps
  extends RenderStyleProps<never>,
    AriaProgressBarProps {
  value: number;
  $size?: string;
  $width?: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10";
  $bg?: SuggestStrings<Color>;
  $trackColor?: SuggestStrings<Color>;
  $activeColor?: SuggestStrings<Color>;
  $linecap?: "round" | "square" | "butt";
}

// TODO:
// - Update the Spinner to use the new ProgressCircle component
// - Allowe the user to set a minValue and a maxValue to scale the value between them
// - Look through the props of the Aria component anre remove the ones that are not needed
// - Figure out the right defaults for $size and $width
// - Add an optional label prop that displays in the center of the circle

export const ProgressCircle = forwardRef<HTMLElement, ProgressCircleProps>(
  function ProgressCircle(props, ref) {
    [props, ref] = useContextProps(ProgressCircleContext, props, ref);
    const {
      value,
      $size = "40",
      $width = "10",
      $activeColor = "var(--progress-circle-active-clr)",
      $trackColor = "var(--progress-circle-track-clr)",
      $bg = "var(--progress-circle-bg-clr)",
      $linecap,
      className,
      style,
      isIndeterminate,
      ...rest
    } = props;

    const { progressBarProps } = useProgressBar(props);

    const renderProps = useRenderProps({
      componentClassName: "aje-progresscircle",
      ...props,
      selectors: {
        "data-indeterminate": isIndeterminate,
      },
    });

    const radius = 16;

    const [filledValue, unFilledValue] = useMemo(() => {
      if (value > 100) {
        return [100, 0];
      }
      if (value < 0) {
        return [0, 100];
      }

      return [value, 100 - value];
    }, [value]);

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
          strokeWidth={$width}
        />
        <ProgressCircleActive
          cx="22"
          cy="22"
          r={radius}
          $stroke={$activeColor}
          strokeWidth={$width}
          strokeDasharray={`${filledValue} ${unFilledValue}`}
          strokeDashoffset="25"
          strokeLinecap={$linecap}
        />
      </ProgressCircleSvg>
    );
  }
);

ProgressCircle.displayName = "ProgressCircle";
