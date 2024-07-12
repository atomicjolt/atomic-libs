import styled from "styled-components";

export const StyledIcon = styled.i`
  user-select: none;
  pointer-events: none;
  color: var(--icon-clr, inherit);

  &.is-small {
    font-size: 18px;
  }
  &.is-medium {
    font-size: 24px;
  }
  &.is-large {
    font-size: 36px;
  }

  &.is-disabled {
    color: rgba(0, 0, 0, 0.3);
  }

  &:hover {
    cursor: default;
  }
`;
