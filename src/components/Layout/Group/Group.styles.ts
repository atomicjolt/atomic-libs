import styled from "styled-components";

interface GroupWrapperProps {
  gap?: number;
}

export const GroupWrapper = styled.div<GroupWrapperProps>`
  display: flex;
  gap: ${({ gap }) => (gap === undefined ? 8 : gap)}px;

  &.is-merged {
    gap: 0;

    // Stops button from moving when you click on them
    & > *.is-active {
      transform: none;
    }
  }

  &.is-column {
    flex-direction: column;

    &.is-merged > {
      :first-child,
      :first-child input {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
        border-bottom: 0;
      }

      :not(:first-child):not(:last-child),
      :not(:first-child):not(:last-child) input {
        border-bottom: 0;
        border-radius: 0;
      }

      :last-child,
      :last-child input {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
      }
    }
  }

  &.is-row {
    flex-direction: row;

    &.is-merged > {
      :first-child,
      :first-child input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
        border-right: 0;
      }

      :not(:first-child):not(:last-child),
      :not(:first-child):not(:last-child) input {
        border-right: 0;
        border-radius: 0;
      }

      :last-child,
      :last-child input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
      }
    }
  }
`;
