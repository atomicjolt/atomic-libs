import { css, keyframes } from "styled-components";

export const scale = keyframes`
  from {
    transform: scaleY(0.9);
  }

  to {
    transform: scaleY(1);
  }
`;

export const scaleAnimation = css`
  transform-origin: top;
  animation: ${scale} 0.2s ease-in-out;
`;
