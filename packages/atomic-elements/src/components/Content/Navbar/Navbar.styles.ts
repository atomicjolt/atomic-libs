import { flex, FlexStyleProps } from "@styles/flex";
import { layout, LayoutProps } from "@styles/layout";
import styled from "styled-components";

export const NavbarWrapper = styled.nav<LayoutProps & FlexStyleProps>`
  ${layout}
  ${flex}
`;
