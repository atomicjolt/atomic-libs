import styled from "styled-components";
import { typography, TypographyProps } from "@styles/typography";
import { dimensions, DimensionsProps, MarginProps, margins } from "@styles/layout";
import { TextColorProps, textColor } from "@styles/colors";

export const TextWrapper = styled.span<
  TypographyProps & MarginProps & TextColorProps & DimensionsProps
>`
  ${typography}
  ${margins}
  ${textColor.defaults({ $color: "text-clr" })}
  ${dimensions}
`;
