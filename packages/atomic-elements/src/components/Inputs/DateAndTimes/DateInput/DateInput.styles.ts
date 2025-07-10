import styled from "styled-components";
import mixins from "../../../../styles/mixins";

export const DateInputWrapper = styled.div`
  ${mixins.Regular}
  ${mixins.FieldStatus}
  ${mixins.SizingX}
  --size-sm-x: 230px;
  --size-md-x: 230px;
  --size-lg-x: 400px;
  --input-gap: 0;
`;

export const StyledDateSegment = styled.div`
  margin: 0 0.1rem;
`;
