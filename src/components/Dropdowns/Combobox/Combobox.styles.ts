import styled from "styled-components";
import mixins from "@styles/mixins";
import { FloatingDropdown } from "../Dropdowns.styles";

export const ComboBoxWrapper = styled.div`
  ${mixins.SizingX}
  ${mixins.FieldStatus}

  &.aje-combobox--floating {
    ${FloatingDropdown}
  }
`;
