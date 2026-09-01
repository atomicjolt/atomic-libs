import styled from "styled-components";
import { FloatingDropdown } from "../Dropdowns.styles";
import { ComboBoxField } from "@components/Fields/ComboBoxField";
import { SkeletonLoader } from "@components/Feedback/SkeletonLoader";

export const StyledLoadingComboBox = styled(SkeletonLoader)`
  width: 200px;
  max-width: 100%;
  height: var(--input-height, 40px);
  display: block;
`;

export const StyledComboBoxField = styled(ComboBoxField)`
  &.aje-combobox--floating {
    ${FloatingDropdown}
  }
`;
