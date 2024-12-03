import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const ChipGroupWrapper = styled.div`
  ${mixins.FieldStatus}
  ${mixins.SizingX}

  --size-sm-x: 20rem;
  --size-md-x: 30rem;
  --size-lg-x: 40rem;
  --size-full-x: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const ChipsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin: 0;
`;
