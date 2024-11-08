import mixins from "@styles/mixins";
import styled from "styled-components";

export const StyledComboInput = styled.div`
  ${mixins.Regular}
  ${mixins.InputLike}
  padding: 0px;
  display: flex;
  align-items: center;
  gap: var(--input-gap);
  cursor: text;

  &.padding-left {
    padding-left: var(--input-padding-horiz);
  }

  &.padding-right {
    padding-right: var(--input-padding-horiz);
  }

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
