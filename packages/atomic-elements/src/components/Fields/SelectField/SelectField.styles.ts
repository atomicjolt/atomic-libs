import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const SelectFieldWrapper = styled.div`
  ${mixins.SizingX}
  ${mixins.FieldStatus}
`;

export const ButtonText = styled.span`
  overflow-x: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
