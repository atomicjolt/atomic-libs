import styled from "styled-components";
import { layout, LayoutProps } from "@styles/layout";
import { flex, FlexStyleProps } from "@styles/flex";

export const FlexWrapper = styled.div<LayoutProps & FlexStyleProps>`
  ${flex}
  ${layout}
`;
