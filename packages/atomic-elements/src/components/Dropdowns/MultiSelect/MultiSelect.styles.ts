import styled from "styled-components";
import { MultiSelectField } from "@components/Fields/MultiSelectField";
import { FloatingDropdown } from "../Dropdowns.styles";
import { Button } from '@components/Buttons/Button';

export const StyledMultiSelectField = styled(MultiSelectField)`
  &.aje-multiselect--floating {
    ${FloatingDropdown}
  }
`;

export const MultiSelectButton = styled(Button)`
  justify-content: space-between;
  padding-right: 0.8rem;
`;
