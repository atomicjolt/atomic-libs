import styled from "styled-components";

export const ModalWrapper = styled.div`
  width: 90%;
  max-width: 800px;
  border-radius: 10px;
  background-color: var(--neutral50);
  padding: 24px;
  box-shadow: 0 10px 40px hsla(0, 0%, 0%, 0.25);
  margin-top: 56px;

  &.aje-modal--popup {
    max-width: 400px;
  }

  &.aje-modal--error {
    max-width: 400px;
  }
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
