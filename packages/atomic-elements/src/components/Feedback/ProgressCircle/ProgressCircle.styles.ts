import {
  fillColor,
  FillColorProps,
  strokeColor,
  StrokeColorProps,
} from "@styles/colors";
import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const animateStroke = keyframes`
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -35;
  }
  100% {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: -100;
  }
`;

export const ProgressCircleIndicator = styled.circle<StrokeColorProps>`
  transition: stroke-dasharray 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  fill: transparent;
  ${strokeColor.defaults({ $stroke: "var(--progress-circle-indicator-clr)" })}
`;

export const ProgressCircleTrack = styled.circle<StrokeColorProps>`
  fill: transparent;
  ${strokeColor.defaults({ $stroke: "var(--progress-circle-track-clr)" })}
`;

export const ProgressCircleBackground = styled.circle<FillColorProps>`
  ${fillColor.defaults({ $fill: "var(--progress-circle-bg-clr)" })}
`;

export const ProgressCircleSvg = styled.svg`
  &[data-indeterminate] {
    animation: ${rotate} 2s linear infinite;

    ${ProgressCircleIndicator} {
      transition: unset;
      animation: ${animateStroke} 1.5s ease-in-out infinite;
    }
  }
`;
