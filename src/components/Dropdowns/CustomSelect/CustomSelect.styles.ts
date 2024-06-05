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
  background-color: var(--listbox-bg-clr);
  height: var(--listbox-item-height);
  width: 100%;
  font-size: var(--listbox-font-size);
  color: var(--listbox-text-clr);

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
