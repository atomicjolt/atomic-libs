import styled from "styled-components";
import { typography, TypographyProps } from "@styles/typography";
import { MarginProps, margins } from "@styles/layout";
import { TextColorProps, textColor } from "@styles/colors";

export const TextWrapper = styled.span<
  TypographyProps & MarginProps & TextColorProps
>`
  color: var(--text-clr);
  ${typography}
  ${margins}
  ${textColor}
`;
