import styled from "styled-components";
import { layout, LayoutProps } from "@styles/layout";
import { flex, FlexStyleProps } from "@styles/flex";

export const GroupWrapper = styled.div<LayoutProps & FlexStyleProps>`
  ${flex}
  ${layout}

  &[data-merged] {
    gap: 0;

    // Stops button from moving when you click on them
    & > [data-pressed="true"] {
      transform: none;
    }
  }

  &[data-direction="column"] {
    &[data-merged] > {
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

  &[data-direction="column-reverse"] {
    &[data-merged] > {
      :first-child,
      :first-child input {
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        border-top: 0;
      }

      :not(:first-child):not(:last-child),
      :not(:first-child):not(:last-child) input {
        border-top: 0;
        border-radius: 0;
      }

      :last-child,
      :last-child input {
        border-bottom-left-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }

  &[data-direction="row"] {
    &[data-merged] > {
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

  &[data-direction="row-reverse"] {
    &[data-merged] > {
      :first-child,
      :first-child input {
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
        border-left: 0;
      }

      :not(:first-child):not(:last-child),
      :not(:first-child):not(:last-child) input {
        border-left: 0;
        border-radius: 0;
      }

      :last-child,
      :last-child input {
        border-top-right-radius: 0;
        border-bottom-right-radius: 0;
      }
    }
  }
`;
