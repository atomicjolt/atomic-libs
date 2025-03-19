import styled from "styled-components";
import { typography, TypographyProps } from "@styles/typography";
import { MarginProps, margins } from "@styles/layout";
import { TextColorProps, textColor } from "@styles/colors";

export type StyleProps = TypographyProps & MarginProps & TextColorProps;

export const StyledLink = styled.a<StyleProps>`
  ${typography.defaults({ $decoration: "var(--link-text-decoration)" })}
  ${margins}
  ${textColor.defaults({ $color: "var(--link-text-clr)" })}

  background-color: var(--link-bg-clr);

  &:hover {
    color: var(--link-hover-text-clr);
    background-color: var(--link-hover-bg-clr);
  }
`;
