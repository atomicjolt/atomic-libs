import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { DropdownButton } from "../../Dropdowns/Dropdowns.styles";

export const SelectFieldWrapper = styled.div`
  ${mixins.SizingX}
  ${mixins.FieldStatus}

  &[data-readonly] ${DropdownButton} {
    --btn-border-clr: var(--neutral200);
    --btn-bg-clr: var(--neutral200);
  }
`;

export const ButtonText = styled.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
