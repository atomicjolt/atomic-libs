import styled from "styled-components";
import { MarginProps, margins } from "@styles/layout";
import { TextColorProps, textColor } from "@styles/colors";

export const StrongWrapper = styled.strong<MarginProps & TextColorProps>`
  ${margins}
  ${textColor}
`;
