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
  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: var(--loader-size);
`;

export const CircularLoader = styled.svg`
  width: 1.25em;
  animation: ${rotate} 2s linear infinite;
`;

export const LoaderPath = styled.circle`
  fill: none;
  stroke: var(--loader-clr);
  stroke-linecap: round;
  animation: ${animateStroke} 1.5s ease-in-out infinite;
`;
