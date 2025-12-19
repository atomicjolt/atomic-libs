import styled from "styled-components";
import mixins from "../../../../styles/mixins";

export const TimeInputWrapper = styled.div`
  ${mixins.FieldStatus}
  ${mixins.SizingX}

  --size-sm-x: 230px;
  --size-md-x: 230px;
  --size-lg-x: 400px;
  --input-gap: 0px;
`;

export const StyledTimeSegment = styled.div`
  margin: 0 0.1rem;
`;
