import styled, { keyframes } from "styled-components";
import mixins from "@styles/mixins";

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
  display: inline-block;
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

export const LoaderWrapper = styled.div`
  font-size: var(--loader-size);

  &.is-small {
    --loader-size: 10px;
  }

  &.is-medium {
    --loader-size: 20px;
  }

  &.is-large {
    --loader-size: 30px;
  }

  &[data-placement="inline"] {
    display: inline-block;
  }

  &[data-placement="block"] {
    display: block;
  }

  &[data-placement="center"] {
    flex-grow: 1;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  &[data-placement="absolute center"] {
    position: absolute;
    display: grid;
    inset: 0;
    place-items: center;
  }
`;

export const LoaderMessage = styled.p`
  ${mixins.Regular}
  font-size: var(--loader-size);
  color: var(--text-clr);
`;
