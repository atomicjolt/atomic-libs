import styled from "styled-components";
import { textColor, TextColorProps } from "@styles/colors";
import { MarginProps, margins } from "@styles/layout";

export const EmWrapper = styled.em<MarginProps & TextColorProps>`
  ${margins}
  ${textColor}
`;
