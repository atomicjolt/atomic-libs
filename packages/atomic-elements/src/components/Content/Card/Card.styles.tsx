import styled from "styled-components";
import { backgroundColor, BackgroundColorProps } from "@styles/colors";
import { display, DisplayProps, layout, LayoutProps } from "@styles/layout";

export type StyleProps = LayoutProps & DisplayProps & BackgroundColorProps;

export const StyledCardPanel = styled.div<StyleProps>`
  ${layout}
  ${display}
  ${backgroundColor}

  border-radius: var(--card-radius);
`;

export const CardWrapper = styled.div<StyleProps>`
  ${layout}
  ${display}
  ${backgroundColor}

  border-radius: var(--card-radius);
  border: var(--card-border);

  --divider-margin-secondary: calc(var(--card-panel-padding) * -1);
`;
