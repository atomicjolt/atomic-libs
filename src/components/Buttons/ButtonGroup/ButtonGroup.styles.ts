import styled from "styled-components";

interface ButtonGroupWrapperProps {
  gap?: number;
}

export const ButtonGroupWrapper = styled.div<ButtonGroupWrapperProps>`
  display: flex;
  gap: ${({ gap }) => (gap === undefined ? 8 : gap)}px;

  &.is-merged {
    gap: 0;

    & > *.is-active {
      transform: none;
    }
  }

  &.is-column {
    flex-direction: column;

    &.is-merged {
      :first-child {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 0;
      }

      :not(:first-child):not(:last-child) {
        border-bottom: 0;
        border-radius: 0;
      }

      :last-child {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }

  &.is-row {
    flex-direction: row;

    &.is-merged {
      :first-child {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
      }

      :not(:first-child):not(:last-child) {
        border-right: 0;
        border-radius: 0;
      }

      :last-child {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
`;
