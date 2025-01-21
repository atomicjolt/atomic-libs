import styled from "styled-components";
import { typography, TypographyProps } from "@styles/typography";
import { MarginProps, margins } from "@styles/layout";
import { ColorProps, colors } from "@styles/colors";

export const TextWrapper = styled.span<
  TypographyProps & MarginProps & ColorProps
>`
  ${typography}
  ${margins}
  ${colors}
`;
