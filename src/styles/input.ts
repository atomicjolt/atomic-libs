import styled from "styled-components";
import mixins from "./mixins";

export const InputWrapper = styled.div`
  ${mixins.InputLike}
  display: flex;
  align-items: center;
  gap: var(--input-padding-horiz);

  input {
    border: none;
    padding: 0px;

    &:focus {
      outline: none;
    }
  }
`;

export const Input = styled.input`
  ${mixins.InputLike}
`;
