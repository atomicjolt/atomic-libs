import styled from "styled-components";
import mixins from "./mixins";

export const InputWrapper = styled.div`
  ${mixins.InputLike}
  display: flex;
  align-items: end;
  padding: 0px;
`;

export const Input = styled.input`
  ${mixins.InputLike}
  border: none;

  &:focus {
    outline: none;
  }
`;
