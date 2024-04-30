import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const LoadingWrapper = styled.div`
  --loader-size: 20px;

  position: absolute;
  inset: 0;
  display: grid;
  place-items: center;

  .aje-three-dot-loader {
    position: relative;
  }
`;

export const LoadingContent = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
`;

export const LoadingMessage = styled.p`
  ${mixins.Regular}
  font-size: var(--loader-size);
  color: var(--text-clr);
`;
