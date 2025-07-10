import mixins from "@styles/mixins";
import styled from "styled-components";
import { PaddingSide } from "./ComboInput.types";

export const StyledComboInput = styled.div<{ $paddingSide?: PaddingSide }>`
  ${mixins.Regular}
  ${mixins.InputLike}
  padding: 0px;
  display: flex;
  align-items: center;
  gap: var(--input-gap);
  cursor: text;

  ${({ $paddingSide }) => {
    if ($paddingSide === "left") {
      return "padding-left: var(--input-padding-horiz);";
    } else if ($paddingSide === "right") {
      return "padding-right: var(--input-padding-horiz);";
    } else if ($paddingSide === "both") {
      return `
        padding-left: var(--input-padding-horiz);
        padding-right: var(--input-padding-horiz);
      `;
    }
  }}

  input {
    border: none;
    padding: 0px;
    width: 100%;
    min-height: 100%;
    flex: 1;

    &:focus {
      outline: none;
    }
  }
`;
