import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { FloatingDropdown } from "../Dropdowns.styles";
import { SelectField } from "@components/Fields/SelectField";

export const StyledSelectField = styled(SelectField)`
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
