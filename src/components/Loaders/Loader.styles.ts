import styled, { keyframes } from "styled-components";

const check = keyframes`
  0% {
    opacity: 0;
    transform: rotate(90deg) scale(0);
  }
  100% {
    opacity: 1;
    transform: rotate(45deg) scale(1);
  }
`;

export const LoaderCheck = styled.span`
  position: relative;
  font-size: inherit;
  top: -0.125em;
  width: 0.5em;
  height: 1em;
  border-bottom: 0.2em solid var(--loader-clr);
  border-right: 0.2em solid var(--loader-clr);
  transform: rotate(45deg) scale(0);
  animation: ${check} 300ms cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
`;
