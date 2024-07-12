import styled from "styled-components";
import mixins from "@styles/mixins";
import { DropdownButton, FloatingDropdown } from "../Dropdowns.styles";

export const MultiSelectWrapper = styled.div`
  ${mixins.SizingX}
  ${mixins.FieldStatus}


  &[data-readonly] ${DropdownButton} {
    --btn-border-clr: var(--neutral200);
    --btn-bg-clr: var(--neutral200);
  }

  &.aje-multiselect--floating {
    ${FloatingDropdown}
  }
`;
