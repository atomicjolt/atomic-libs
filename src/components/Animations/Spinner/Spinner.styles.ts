import mixins from "@styles/mixins";
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
    stroke-dashoffset: -124;
  }
`;

export const SpinnerContainer = styled.div`
  ${mixins.Sizing}
  --size-sm-x: 10px;
  --size-md-x: 20px;
  --size-lg-x: 30px;

  font-size: var(--size-x);
`;

export const SpinnerSvg = styled.svg<{ $duration: number }>`
  width: 1.25em;
  vertical-align: middle;
  animation: ${rotate} ${({ $duration }) => `${$duration}ms`} linear infinite;
`;

export const SpinnerPath = styled.circle<{ $duration: number }>`
  fill: none;
  stroke: var(--animation-clr);
  stroke-linecap: round;
  animation: ${animateStroke} ${({ $duration }) => `${$duration}ms`} ease-in-out
    infinite;
`;
