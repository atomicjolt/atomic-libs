import styled from "styled-components";
import mixins from "@styles/mixins";
import { typography, TypographyProps } from "@styles/typography";
import { MarginProps, margins } from "@styles/layout";
import { TextColorProps, textColor } from "@styles/colors";

export const StyledLink = styled.a<
  TypographyProps & MarginProps & TextColorProps
>`
  ${mixins.Regular}
  background-color: var(--link-bg-clr);

  ${typography.defaults({ $decoration: "var(--link-text-decoration)" })}
  ${margins}
  ${textColor.defaults({ $color: "var(--link-text-clr)" })}

  &:hover {
    color: var(--link-hover-text-clr);
    background-color: var(--link-hover-bg-clr);
  }
`;
