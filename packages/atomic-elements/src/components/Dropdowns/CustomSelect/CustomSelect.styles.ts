import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { FloatingDropdown } from "../Dropdowns.styles";
import { SelectField } from "@components/Fields/SelectField";

export const StyledSelectField = styled(SelectField)`
  &.aje-select--floating {
    ${FloatingDropdown}
  }
`;

export const ButtonText = styled.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
