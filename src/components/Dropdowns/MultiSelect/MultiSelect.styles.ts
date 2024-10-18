import styled from "styled-components";
import { MultiSelectField } from "@components/Fields/MultiSelectField";
import { FloatingDropdown } from "../Dropdowns.styles";

export const StyledMultiSelectField = styled(MultiSelectField)`
  &.aje-multiselect--floating {
    ${FloatingDropdown}
  }
`;
