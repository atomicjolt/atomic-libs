import styled from "styled-components";

export const DialogWrapper = styled.div`
  &:focus-visible {
    outline: none;
  }
`;

export const DialogTop = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const DialogTitle = styled.h3`
  margin-top: 0px;
`;
