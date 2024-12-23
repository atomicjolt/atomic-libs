import styled from "styled-components";
import mixins from "../../styles/mixins";
import { FieldWrapper } from "../Internal/FieldWrapper";

export const StyledField = styled.div`
  ${mixins.SizingX}
  ${mixins.FieldStatus}

  & input {
    width: 100%;
  }
`;
