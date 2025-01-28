import styled from "styled-components";
import { MarginProps, margins } from "@styles/layout";
import { typography, TypographyProps } from "@styles/typography";
import { TextColorProps, textColor } from "@styles/colors";

export const HeadingWrapper = styled.h1<
  TypographyProps & MarginProps & TextColorProps
>`
  margin: 0;
  color: var(--text-clr);
  ${typography.defaults({ $size: "6" })}
  ${margins}
  ${textColor}
`;
