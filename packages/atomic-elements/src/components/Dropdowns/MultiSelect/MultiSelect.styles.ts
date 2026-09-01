import styled from "styled-components";
import { MultiSelectField } from "@components/Fields/MultiSelectField";
import { FloatingDropdown } from "../Dropdowns.styles";
import { SkeletonLoader } from "@components/Feedback/SkeletonLoader";

export const StyledLoadingMultiSelect = styled(SkeletonLoader)`
  width: var(--size-x);
  max-width: 100%;
  height: var(--input-height, 40px);
  display: block;
`;

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
