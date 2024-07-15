import mixins from "@styles/mixins";
import styled, { keyframes } from "styled-components";

export const DotsContainer = styled.div<{ $duration?: number }>`
  ${mixins.Sizing}
  --size-sm-x: 10px;
  --size-md-x: 20px;
  --size-lg-x: 30px;

  ${({ $duration }) =>
    $duration ? `--animation-duration: ${$duration}ms;` : ""}

  font-size: var(--size-x);
  display: flex;
  align-items: center;
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

export const Dot = styled.span<{ $count: number }>`
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: var(--animation-clr);
  transform: translateY(-25%);
  animation-name: ${bob};
  animation-duration: var(--animation-duration);
  animation-timing-function: cubic-bezier(0.5, 0.05, 1, 0.5);
  animation-direction: alternate;
  animation-iteration-count: infinite;
  animation-delay: calc(
    var(--animation-duration) * ${({ $count }) => $count * 0.5}
  );
`;
