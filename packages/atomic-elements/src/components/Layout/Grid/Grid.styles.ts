import styled from "styled-components";
import { layout, LayoutProps } from "@styles/layout";
import { grid, GridStyleProps } from "@styles/grid";

export const GridWrapper = styled.div<GridStyleProps & LayoutProps>`
  ${grid}
  ${layout}
`;
