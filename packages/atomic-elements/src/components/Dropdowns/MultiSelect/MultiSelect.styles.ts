import styled from "styled-components";
import { MultiSelectField } from "@components/Fields/MultiSelectField";
import { FloatingDropdown } from "../Dropdowns.styles";

export const StyledMultiSelectField = styled(MultiSelectField)`
  &.aje-multiselect--floating {
    ${FloatingDropdown}
  }
`;

export const ButtonText = styled.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
