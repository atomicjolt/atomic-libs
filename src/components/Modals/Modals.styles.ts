import styled from "styled-components";
import mixins from "../../styles/mixins";

export const ContentWrapper = styled.div`
  padding: 24px;
`;

export const ModalTop = styled.div.attrs({ className: "aje-modal__top" })`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const ModalClose = styled.button.attrs({
  className: "aje-modal__close",
})`
  border: none;
  background: none;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  font-size: 2.4rem;
  color: var(--text-clr-alt);
  display: grid;
  place-items: center;
  transition: background 100ms ease;

  i {
    transition: color 100ms ease;
  }

  &:hover {
    color: var(--text-clr);
    background-color: var(--neutral100);
    cursor: pointer;
  }
  &:active {
    background-color: var(--neutral200);
  }
  &:focus-visible {
    outline: var(--outline);
    outline-offset: 2px;
  }
`;

export const ModalTitle = styled.h2.attrs({ className: "aje-modal__title" })`
  ${mixins.Bold}
  margin: 0;
  font-size: 2rem;
  flex: 1;
  line-height: 1;
  color: var(--text-clr);
`;

export const ModalMain = styled.div.attrs({ className: "aje-modal__main" })`
  ${mixins.Regular}
  padding: 16px 0 24px;
  font-size: 1.6rem;
  color: var(--text-clr);
  line-height: 1.5;

  p {
    margin: 0;
  }
`;

export const ModalBottom = styled.div.attrs({ className: "aje-modal__bottom" })`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 8px;
`;
