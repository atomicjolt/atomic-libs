import styled from "styled-components";
import mixins from "../../../styles/mixins";
import { FloatingDropdown } from "../Dropdowns.styles";
import { SelectField } from "@components/Fields/SelectField";
import { SkeletonLoader } from "@components/Feedback/SkeletonLoader";

export const StyledLoadingSelect = styled(SkeletonLoader)`
  width: var(--size-x);
  max-width: 100%;
  height: var(--input-height, 40px);
  display: block;
`;

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
