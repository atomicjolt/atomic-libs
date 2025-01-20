import styled from "styled-components";
import { flex, FlexStyleProps, layout, LayoutProps } from "@styles/layout";

export const FlexWrapper = styled.div<LayoutProps & FlexStyleProps>`
  ${flex}
  ${layout}
`;
