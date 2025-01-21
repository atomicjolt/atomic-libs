import styled from "styled-components";
import { MarginProps, margins } from "@styles/layout";
import { typography, TypographyProps } from "@styles/typography";

export const HeadingWrapper = styled.h1<TypographyProps & MarginProps>`
  margin: 0;
  ${typography}
  ${margins}
`;
