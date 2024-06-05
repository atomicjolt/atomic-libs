import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { DropdownButton, FloatingDropdown } from "../Dropdowns.styles";

export const CustomSelectWrapper = styled.div`
  ${mixins.SizingX}
  ${mixins.FieldStatus}

  &[data-readonly] ${DropdownButton} {
    --btn-border-clr: var(--neutral200);
    --btn-bg-clr: var(--neutral200);
  }

  &.aje-select--floating {
    ${FloatingDropdown}
  }
`;

export const SearchInput = styled.input`
  ${mixins.Regular}
  border: none;
  background-color: var(--option-bg-clr);
  height: var(--option-height);
  width: 100%;
  padding: 0 32px 0 var(--option-padding-horizontal);
  font-size: var(--option-font-size);
  color: var(--option-text-clr);

  &:focus {
    outline: 2px solid var(--outline-clr-primary);
    outline-offset: -2px;
  }
`;

export const ButtonText = styled.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
