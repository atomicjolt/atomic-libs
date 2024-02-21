import styled from "styled-components";
import mixins from "../../../styles/mixins";

export const ModalHeader = styled.div.attrs({ className: "aje-modal__top" })`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ModalTitle = styled.h2.attrs({ className: "aje-modal__title" })`
  ${mixins.Bold}
  margin: 0;
  font-size: 2rem;
  flex: 1;
  line-height: 1;
  color: var(--text-clr);
`;

export const ModalBody = styled.div.attrs({ className: "aje-modal__main" })`
  ${mixins.Regular}
  padding: 16px 0 24px;
  font-size: 1.6rem;
  color: var(--text-clr);
  line-height: 1.5;

  p {
    margin: 0;
  }
`;

export const ModalFooter = styled.div.attrs({ className: "aje-modal__bottom" })`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
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

    .aje-modal {
      margin: 0;
    }
  }
`;

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

    .aje-modal__top > i {
      color: var(--error700);
    }
  }
`;
