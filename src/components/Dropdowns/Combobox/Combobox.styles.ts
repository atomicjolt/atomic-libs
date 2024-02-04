import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { DropdownWrapper } from "../Dropdowns.styles";

export const ComboboxWrapper = styled(DropdownWrapper)`
  ${mixins.SizingsX}
  ${mixins.InputWrapper}

  &.read-only {
    --input-bg-clr: var(--neutral100);
  }
`;

export const ComboboxInputWrapper = styled.div`
  ${mixins.InputLike}
  display: flex;
  align-items: end;
  padding: 0px;
`;

export const ComboboxInput = styled.input`
  ${mixins.InputLike}
  border: none;

  &:focus {
    outline: none;
  }
`;
