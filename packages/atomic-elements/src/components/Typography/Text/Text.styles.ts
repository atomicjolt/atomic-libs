import styled from "styled-components";
import { typography, TypographyProps } from "@styles/typography";
import { MarginProps, margins } from "@styles/layout";

export const TextWrapper = styled.span<TypographyProps & MarginProps>`
  ${typography}
  ${margins}
`;
