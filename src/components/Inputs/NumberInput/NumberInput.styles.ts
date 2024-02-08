import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const NumberInputWrapper = styled.div`
  ${mixins.InputLike}
  display: flex;
  padding: 0;
`;

export const StyledNumberInput = styled.input`
  ${mixins.InputLike}
  border: none;

  &:focus {
    outline: none;
  }
`;

export const NumberInputButtons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 0 0 8px;

  --btn-height: 20px;
  --btn-padding: 0.1em;
`;
