import styled, { keyframes } from "styled-components";

export const ThreeDotLoaderWrapper = styled.div`
  --loader-clr: var(--neutral500);
  --loader-size: 20px;

  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;
  font-size: var(--loader-size);
`;

export const DotsContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: inherit;
  gap: 0.25em;
`;

const bob = keyframes`
  from {
    transform: translateY(-25%);
  }
  to {
    transform: translateY(25%);
  }
`;

export const Dot = styled.span`
  --animation-duration: 500ms;
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: var(--loader-clr);
  transform: translateY(-25%);
  animation-name: ${bob};
  animation-duration: var(--animation-duration);
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-direction: alternate;
  animation-iteration-count: infinite;
`;

export const Dot1 = styled(Dot)`
  animation-delay: 0;
`;

export const Dot2 = styled(Dot)`
  animation-delay: calc(var(--animation-duration) * 0.5);
`;

export const Dot3 = styled(Dot)`
  animation-delay: calc(var(--animation-duration) * 1);
`;
