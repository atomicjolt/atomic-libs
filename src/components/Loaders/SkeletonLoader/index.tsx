import React, { useId, useMemo } from "react";
import { useLocale } from "react-aria";
import {
  GradientEndPoint,
  GradientMidPoint,
  Svg,
} from "./SkeletonLoader.styles";
import { HasClassName } from "../../../types";
import classNames from "classnames";

// Based on https://github.com/danilowoz/react-content-loader

export interface SkeletonLoaderProps
  extends Omit<React.SVGAttributes<SVGElement>, "className">,
    HasClassName {
  /** Whether or not to animate the skeleton */
  isAnimated?: boolean;
  /** Width of the animated gradient with repsect to the viewbox witdth */
  gradientRatio?: number;
  /** Length in seconds that the animation should take */
  duration?: number;
  /** Used to describe the element for accessibility */
  title?: string;
}

/**
 * Renders a skeleton loader component. This component is used to show a loading state for a component.
 *
 * You provide svg elements as children to the component and it will animate a gradient over the top of them.
 */
export function SkeletonLoader(props: SkeletonLoaderProps) {
  const {
    children,
    isAnimated = true,
    gradientRatio = 2,
    duration = 1.2,
    title = "",
    viewBox: providedViewProx,
    width,
    height,
    className,
    ...rest
  } = props;

  const { direction } = useLocale();

  // get the baseURL from the document
  const baseUrl = useMemo(() => {
    const base = document.querySelector("base");
    if (base) {
      return base.href;
    }

    return "";
  }, []);

  const viewBox = useMemo(() => {
    if (providedViewProx) {
      return providedViewProx;
    }

    return `0 0 ${width} ${height}`;
  }, [providedViewProx, width, height]);

  const fixedId = useId();
  const idClip = `${fixedId}-diff`;
  const idGradient = `${fixedId}-animated-diff`;
  const idAria = `${fixedId}-aria`;

  const durationSeconds = `${duration}s`;

  const from = `${gradientRatio * -1} 0`;
  const to = `${gradientRatio} 0`;

  return (
    <Svg
      aria-labelledby={idAria}
      role="img"
      $rtl={direction === "rtl"}
      viewBox={viewBox}
      width={width}
      height={height}
      className={classNames("aje-skeleton-loader", className)}
      {...rest}
    >
      {title && <title id={idAria}>{title}</title>}
      <rect
        role="presentation"
        x="0"
        y="0"
        width="100%"
        height="100%"
        clipPath={`url(${baseUrl}#${idClip})`}
        style={{ fill: `url(${baseUrl}#${idGradient})` }}
      />

      <defs>
        <clipPath id={idClip}>{children}</clipPath>

        <linearGradient
          id={idGradient}
          gradientTransform={`translate(${from})`}
        >
          <GradientEndPoint offset="0%" />
          <GradientMidPoint offset="50%" />
          <GradientEndPoint offset="100%" />
          {isAnimated && (
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values={`${from}; 0 0; ${to}`}
              dur={durationSeconds}
              repeatCount="indefinite"
            />
          )}
        </linearGradient>
      </defs>
    </Svg>
  );
}
