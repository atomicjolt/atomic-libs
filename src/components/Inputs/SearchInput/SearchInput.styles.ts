import styled from "styled-components";
import { Input } from "../Inputs.styles";
import mixins from "../../../styles/mixins";

export const StyledSearchInput = styled(Input).attrs({ type: "search" })`
  --input-width-sm: 100px;
  --input-width-md: 200px;
  --input-width-lg: 300px;
`;

export const SearchInputWrapper = styled.div`
  ${mixins.InputLike}
  display: flex;
  align-items: center;
  padding: 0px;
`;

export const ActualSearchInput = styled.input`
  ${mixins.InputLike}
  ${mixins.Regular}
  border: none;
  box-shadow: none;

  &:focus,
  &:active,
  &:hover {
    border: none !important;
    outline: none !important;
    box-shadow: none !important;
  }
`;
