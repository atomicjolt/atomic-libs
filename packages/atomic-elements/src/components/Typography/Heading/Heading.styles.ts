import styled from "styled-components";
import { MarginProps, margins } from "@styles/layout";
import { typography, TypographyProps } from "@styles/typography";
import { ColorProps, colors } from "@styles/colors";

export const HeadingWrapper = styled.h1<
  TypographyProps & MarginProps & ColorProps
>`
  margin: 0;
  color: var(--text-clr);
  ${typography.defaults({ $size: "6" })}
  ${margins}
  ${colors}
`;
