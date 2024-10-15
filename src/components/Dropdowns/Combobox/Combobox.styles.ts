import styled from "styled-components";
import { FloatingDropdown } from "../Dropdowns.styles";
import { ComboBoxField } from "@components/Fields/ComboBoxField";

export const StyledComboBoxField = styled(ComboBoxField)`
  &.aje-combobox--floating {
    ${FloatingDropdown}
  }
`;
