import { backgroundColor, BackgroundColorProps } from "@styles/colors";
import { display, DisplayProps, layout, LayoutProps } from "@styles/layout";
import styled from "styled-components";

type StyleProps = LayoutProps & DisplayProps & BackgroundColorProps;

export const StyledCardPanel = styled.div<StyleProps>`
  ${layout.defaults({ $p: "var(--card-panel-padding)" })}
  ${display}
  ${backgroundColor.defaults({ $bg: "var(--card-panel-bg-clr)" })}
  border-radius: var(--card-radius);
`;

export const CardWrapper = styled.div`
  background-color: var(--card-bg-clr);
  border: var(--card-border);
  border-radius: var(--card-radius);
  padding: var(--card-padding);

  --divider-margin-secondary: calc(var(--card-panel-padding) * -1);
`;
