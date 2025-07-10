import styled from "styled-components";
import mixins from "../../styles/mixins";

export const StyledField = styled.div`
  ${mixins.SizingX}
  ${mixins.FieldStatus}

  & input {
    width: 100%;
  }
`;
