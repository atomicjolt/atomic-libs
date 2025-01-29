import { layout, LayoutProps } from '@styles/layout';
import styled from "styled-components";

export const ModalWrapper = styled.div<LayoutProps>`
  ${layout.defaults({ $width: "100%", $maxWidth: "800px", $p: "5" })};

  border-radius: calc(var(--radius) * 2);
  background-color: var(--neutral50);
  box-shadow: 0 10px 40px hsla(0, 0%, 0%, 0.25);
  margin-top: 56px;
`;

export const ModalBackground = styled.div`
  position: fixed;
  min-height: 300px;
  inset: 0;
  background-color: hsla(0, 0%, 100%, 0.75);
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 1000;

  &.is-centered {
    display: grid;
    place-items: center;
    justify-content: initial;

    ${ModalWrapper} {
      margin: 0;
    }
  }
`;
